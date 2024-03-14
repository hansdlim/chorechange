import React from "react"
import { Typography } from "@mui/material"
import { Button } from '@mui/material'

type GoalsPageEmptyViewProps = {
    setOpenDialog : (boolean) => void
}

const GoalsPageEmptyView = (props:GoalsPageEmptyViewProps) => {
    return (
        <>
            <Typography>You have no Goals set up!</Typography>
            <Typography>Goals you create will display here</Typography>
            <Button variant="outlined" onClick={() => props.setOpenDialog(true)}>Create Goal</Button>
        </>
    )
}

export default GoalsPageEmptyView;