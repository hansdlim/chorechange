import { Dialog, TextField, Typography, Box, Divider, Button } from "@mui/material";
import { useContext, useState } from "react";
import React from "react";
import { UserContext } from "../../contexts/UserContext.tsx";
import DialogPopup from "./DialogPopup";

type RemoveMoneyDialogProps = {
    openDialog: boolean,
    setOpenDialog: (openDialog:boolean) => void
}

const RewardBoughtDialog = (props:RemoveMoneyDialogProps) => {
    const { user, setUser } = useContext(UserContext);
    const closeDialog = () =>{
        props.setOpenDialog(false);
    }

    return (
        <DialogPopup title="Reward Purchased!" confirm="OK" confirmAction={() => closeDialog()} openDialog={props.openDialog} setOpenDialog={props.setOpenDialog}>
            <Typography>New balance: {user.dailyCoins}</Typography>
        </DialogPopup>
    );
}

export default RewardBoughtDialog;