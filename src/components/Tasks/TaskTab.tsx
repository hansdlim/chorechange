import React from "react";
import { Task } from "../../models/Task.tsx";
import { FrequencyType } from "../../enums/FrequencyType";
import TaskList from "./TaskList.tsx";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import Button from '@mui/material/Button';

type TaskTabProps = {
    selectedTab: FrequencyType,
    tabType: FrequencyType,
    tabName: string
    taskList: Task[],
    selectTabCommand: (frequency : FrequencyType) => void,
}


const TaskTab = (props: TaskTabProps) => {
    const theme = useTheme();
    const displayTab = props.selectedTab === props.tabType ? true : false;
    const fontWeight = displayTab ? 'bold' : 'regular';
    const tabColor = displayTab ? theme.palette.primary.main : theme.palette.neutral.main;
    const textColor = displayTab ? theme.palette.primary.dark: theme.palette.neutral.dark;
    const numOfTasks = props.taskList.filter(task => !task.isCompleted()).length;

    return (
        <Button onClick={()=>props.selectTabCommand(props.tabType)} sx={{padding:0, paddingTop:1, color:tabColor}}>
            <Box sx={{display:"flex", flexDirection:"column", minWidth:{xs:'20vw', sm:'16vw', md:120}}}>
                <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between",marginBottom:.5, marginLeft:1, marginRight:1}}>
                    <Typography fontWeight={fontWeight} sx={{fontSize:'1em', color:textColor}}>{props.tabType.toString()}</Typography>
                    <Typography fontWeight={fontWeight} sx={{fontSize:'1em', color:textColor}}>{numOfTasks}</Typography>
                </Box>
                <Box borderRadius={15} bgcolor={tabColor} sx={{height:5, }}/>
            </Box>
        </Button>
    )
}

export default TaskTab;