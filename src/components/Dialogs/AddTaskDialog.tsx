import { Dialog, TextField, Typography, Box, Divider, Button } from "@mui/material";
// import { createNewTask } from "../../services/TaskServices.tsx";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext.tsx";
import React from "react";
import DialogPopup from "./DialogPopup";
import FrequencyToggleButton from "../Inputs/FrequencyToggleButton.tsx";
import { FrequencyType } from "../../enums/FrequencyType.tsx";
import { Task } from "../../models/Task.tsx";
import {v4 as uuidv4} from 'uuid';
import { saveUserTask } from "../../api/usersApi.ts";

type taskForm = {
    reward:number,
    taskName:string,
    periods:number
}

const initialFormValues:taskForm = {
    reward: 0,
    taskName: "",
    periods: 0
}

initialFormValues.periods = 1;
initialFormValues.taskName = "";
initialFormValues.reward = 0;

function AddTaskDialog({openDialog, setOpenDialog}){
    const {user, setUser} = useContext(UserContext);
    const [formValue, setFormValue] = useState(initialFormValues);
    const [frequency, setFrequency] = useState(FrequencyType.Daily);

    const  addTask = async() => {
        const newTask:Task = new Task(uuidv4(), Number(formValue.reward), formValue.taskName, frequency, Number(formValue.periods), 0);
        user.tasks[newTask.id] = newTask;
        setUser({...user});
        setFormValue(initialFormValues);
        setFrequency(FrequencyType.Daily);
        setOpenDialog(false);
        const saveTask = await saveUserTask(user.id, newTask);
    }

    const handleOnChange = (e) =>{
        const {name, value} = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        })
    }

    return (
        <DialogPopup title="Add Task" confirm="Add Task" confirmAction={addTask} openDialog={openDialog} setOpenDialog={setOpenDialog}>
            <TextField label="Name of Task" id="outlined-basic" name="taskName" value={formValue.taskName} onChange={handleOnChange}/>
                <TextField type="number" label="Periods" id="outlined-basic" name="periods" value={formValue.periods} onChange={handleOnChange}/>
                <FrequencyToggleButton frequency={frequency} setFrequency={setFrequency}/>
        </DialogPopup>
    );
}

export default AddTaskDialog;