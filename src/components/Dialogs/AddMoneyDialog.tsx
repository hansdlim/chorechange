import { Dialog, TextField, Typography, Box, Divider, Button } from "@mui/material";
import { useContext, useState } from "react";
import React from "react";
import { UserContext } from "../../contexts/UserContext.tsx";
import DialogPopup from "./DialogPopup.js";

type AddMoneyDialogProps = {
    openDialog: boolean,
    setOpenDialog: (openDialog:boolean) => void;
}

function AddMoneyDialog(props:AddMoneyDialogProps){
    const {user, setUser} = useContext(UserContext);
    const [input, setInput] = useState(0);

    const addMoney = () => {
        setUser({...user});
        setInput(0);
        props.setOpenDialog(false);
    }
    const handleOnChange = (e) =>{
        const {value} = e.target;
        setInput(value);
    }

    return (
        <DialogPopup title="Add Pocket Money" confirm="Add" confirmAction={addMoney} openDialog={props.openDialog} setOpenDialog={props.setOpenDialog}>
            <TextField type="number" label="Increase Amount" id="outlined-basic" value={input} onChange={handleOnChange}/>
        </DialogPopup>
    );
}

export default AddMoneyDialog;