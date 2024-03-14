import { Dialog, TextField, Typography, Box, Divider, Button } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext.tsx";
import React from "react";
import DialogPopup from "./DialogPopup";
import FrequencyToggleButton from "../Inputs/FrequencyToggleButton.tsx";
import { FrequencyType } from "../../enums/FrequencyType.tsx";
import { Goal } from "../../models/Goal.ts";

type goalForm = {
    goalName:string,
    reward:number,
    checkpoints:number,
    goalLength:FrequencyType
}

const initialFormValues:goalForm = {
    reward: 0,
    goalName: "",
    checkpoints:0,
    goalLength: FrequencyType.Monthly
}

function AddGoalDialog({openDialog, setOpenDialog}){
    const {user, setUser} = useContext(UserContext);
    const [formValue, setFormValue] = useState(initialFormValues);
    const [frequency, setFrequency] = useState(FrequencyType.Daily);

    const addGoal = () => {
        const newGoal = new Goal(formValue.goalName, frequency, Number(formValue.reward), Number(formValue.checkpoints));
        user.goals.push(newGoal);
        setUser({...user});
        setFormValue(initialFormValues);
        setFrequency(FrequencyType.Daily);
        setOpenDialog(false);
    }

    const handleOnChange = (e) =>{
        const {name, value} = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        })
    }

    return (
        <DialogPopup title="Add Goal" confirm="Add Goal" confirmAction={addGoal} openDialog={openDialog} setOpenDialog={setOpenDialog}>
            <TextField label="Name of Goal" id="outlined-basic" name="goalName" value={formValue.goalName} onChange={handleOnChange}/>
            <TextField type="number" label="Reward" id="outlined-basic" name="reward" value={formValue.reward} onChange={handleOnChange}/>
            <TextField type="number" label="Checkpoints" id="outlined-basic" name="checkpoints" value={formValue.checkpoints} onChange={handleOnChange}/>
        </DialogPopup>
    );
}

export default AddGoalDialog;