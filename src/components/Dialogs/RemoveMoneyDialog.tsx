import { Dialog, TextField, Typography, Box, Divider, Button } from "@mui/material";
import { useContext, useState } from "react";
import React from "react";
import { UserContext } from "../../contexts/UserContext.tsx";
import DialogPopup from "./DialogPopup";

type RemoveMoneyDialogProps = {
    openDialog: boolean,
    setOpenDialog: (openDialog:boolean) => void
}

const RemoveMoneyDialog = (props:RemoveMoneyDialogProps) => {
    const {user, setUser} = useContext(UserContext);
    const [input, setInput] = useState(0);

    const removeMoney = () => {
        setUser({...user});
        setInput(0);
        props.setOpenDialog(false);
    }
    const handleOnChange = (e) =>{
        const {value} = e.target;
        setInput(value);
    }

    return (
        <DialogPopup title="Spend Pocket Money" confirm="Spend" confirmAction={removeMoney} openDialog={props.openDialog} setOpenDialog={props.setOpenDialog}>
            <TextField type="number" label="Decrease Amount" id="outlined-basic" value={input} onChange={handleOnChange}/>
        </DialogPopup>
    );
}

export default RemoveMoneyDialog;