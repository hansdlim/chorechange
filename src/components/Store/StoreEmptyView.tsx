import React from "react"
import { Typography } from "@mui/material"
import { Button } from '@mui/material'
import ContainedButton from "../Inputs/ContainedButton.tsx"
import { Box } from "@mui/material"


type StoreEmptyViewProps = {
    setOpenDialog : (boolean) => void
}

const StoreEmptyView = (props:StoreEmptyViewProps) => {
    return (
        <>
            <Box>You have no Rewards set up!</Box>
            <Box>Rewards you create will display here</Box>
            <ContainedButton onClick={() => props.setOpenDialog(true)} disabled={false}>Add Reward</ContainedButton>
            {/* <Button variant="outlined" onClick={() => props.setOpenDialog(true)}>Add Reward</Button> */}
        </>
    )
}

export default StoreEmptyView;