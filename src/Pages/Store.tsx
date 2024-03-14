import React, { useContext } from "react";
import Layout from "../components/Layout.tsx";
import { Box } from "@mui/material";
import UserStatusBar from "../components/UserStatusBar.tsx";
import { Typography } from "@mui/material";
import { UserContext } from '../contexts/UserContext.tsx'; 
import { useState } from "react";
import StoreEmptyView from "../components/Store/StoreEmptyView.tsx";
import { isNotEmpty } from "../utils/ArrayUtils.ts";
import AddRewardDialog from "../components/Dialogs/AddRewardDialog.tsx";
import RewardsList from "../components/Store/RewardsList.tsx";
import { Divider } from "@mui/material";
import { Button } from "@mui/material";

const Store = () => {
    const { user, setUser } = useContext(UserContext);
    const [ openDialog, setOpenDialog ] = useState(false);

    const hasRewards = isNotEmpty(user.rewards);

    return (
        <Layout>
            <Box 
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent:"flex-start",
                    width:"100%",
                    gap:2,
                }}>
                <UserStatusBar user={user}/>
                <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', gap:3}}>
                    <Typography variant="h6" fontWeight="bold">Rewards</Typography>
                    <Button variant="contained" disableElevation onClick={() => setOpenDialog(true)}>Create New +</Button>
                </Box>
                <Divider></Divider>
                {hasRewards ? <RewardsList listName="Rewards" rewards={user.rewards}/> : <StoreEmptyView setOpenDialog={setOpenDialog}/>}
            </Box>
        <AddRewardDialog openDialog={openDialog} setOpenDialog={setOpenDialog}/>
        </Layout>
    )
}

export default Store;