import { Button } from "@mui/material";
import {Typography} from "@mui/material";
import React from "react";
import { ReactNode } from "react";
import { Box } from "@mui/material";

type ContainedButtonProps = {
    disabled:boolean,
    onClick:() => void,
    children: ReactNode
}

const ContainedButton = (props:ContainedButtonProps) => {
    return (
        <Button variant='contained' disableElevation disabled={props.disabled} onClick={() => props.onClick()}> 
            <Box sx={{color:'white', fontWeight:600}}>{props.children}</Box>
        </Button>
    )
}

export default ContainedButton;