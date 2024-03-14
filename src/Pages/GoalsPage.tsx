import React, { useContext, useState } from "react";
import Layout from "../components/Layout.tsx";
import { Box } from "@mui/material";
import UserStatusBar from "../components/UserStatusBar.tsx";
import { Typography } from "@mui/material";
import { UserContext } from '../contexts/UserContext.tsx'; 
import { Button } from "@mui/material";
import AddGoalDialog from "../components/Dialogs/AddGoalDialog.tsx";
import { isNotEmpty } from "../utils/ArrayUtils.ts";
import GoalsPageEmptyView from "../components/Goals/GoalsPageEmptyView.tsx";
import GoalList from "../components/Goals/GoalList.tsx";

const GoalsPage = () => {
    const { user, setUser } = useContext(UserContext);
    const [ openDialog, setOpenDialog ] = useState(false);

    const hasGoals = isNotEmpty(user.goals);
    console.log(hasGoals);
    console.log(user.goals);

    return (
        <Layout>
            <Box 
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent:"flex-start",
                    width:"100%",
                    gap:3,
                }}>
                <UserStatusBar user={user}/>
                <Box sx={{display:'flex', flexDirection:'row', justifyContent:'flex-start', gap:2}}>
                    <Typography variant="h6" fontWeight={'bold'}>Goals</Typography>
                    <Button variant="outlined" onClick={() => {setOpenDialog(true)}}>+</Button>
                </Box>

                {hasGoals ? <GoalList listName="Goal List" goalList={user.goals}/> : <GoalsPageEmptyView setOpenDialog={setOpenDialog}/>}
                
            </Box>
        <AddGoalDialog openDialog={openDialog} setOpenDialog={setOpenDialog}/>
        </Layout>
    )
}

export default GoalsPage;