import { Dialog, TextField, Typography, Box, Divider, Button } from "@mui/material";
import React from "react";
import DialogPopup from "./DialogPopup.js";

type CoinsAddedDialogProps = {
    openDialog: boolean,
    coinsAdded: number,
    setOpenDialog: (openDialog:boolean) => void;
    resetCoinsCollected: () => void;
}

function CoinsAddedDialog(props:CoinsAddedDialogProps){
    const closeDialog = () =>{
        props.setOpenDialog(false);
        props.resetCoinsCollected();
    }

    return (
        <DialogPopup title="Daily Reward Collected!" confirm="OK" confirmAction={() => closeDialog()} openDialog={props.openDialog} setOpenDialog={props.setOpenDialog}>
            <Typography>{props.coinsAdded} Coin(s) Collected</Typography>
        </DialogPopup>
    );
}

export default CoinsAddedDialog;