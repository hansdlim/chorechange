import { Dialog, TextField, Typography, Box, Divider, Button } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext.tsx";
import React from "react";
import DialogPopup from "./DialogPopup";
import { FrequencyType } from "../../enums/FrequencyType.tsx";
import { Reward } from "../../models/Reward.ts";
import {v4 as uuidv4} from 'uuid';
import { saveUser } from "../../api/usersApi.ts";

type rewardForm = {
    name:string,
    description:string,
    price:number,
}

const initialFormValues:rewardForm = {
    name: "",
    description:"",
    price: 1,
}

function AddRewardDialog({openDialog, setOpenDialog}){
    const {user, setUser} = useContext(UserContext);
    const [formValue, setFormValue] = useState(initialFormValues);

    const addReward = () => {
        const newReward = new Reward(uuidv4(),formValue.name, formValue.description,formValue.price);
        user.rewards[newReward.id] = newReward;
        setUser({...user});
        setFormValue(initialFormValues);
        setOpenDialog(false);
        saveUser(user);
    }

    const handleOnChange = (e) =>{
        const {name, value} = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        })
    }

    return (
        <DialogPopup title="Add Reward" confirm="Add Reward" confirmAction={addReward} openDialog={openDialog} setOpenDialog={setOpenDialog}>
            <TextField label="Name of Reward" id="outlined-basic" name="name" value={formValue.name} onChange={handleOnChange}/>
            <TextField label="Description" id="outlined-basic" name="description" value={formValue.description} onChange={handleOnChange}/>
            <TextField type="number" label="Price" id="outlined-basic" name="price" value={formValue.price} onChange={handleOnChange}/>
        </DialogPopup>
    );
}

export default AddRewardDialog;