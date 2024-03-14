import React from "react";
import { Task } from "../../models/Task.tsx";
import { FrequencyType } from "../../enums/FrequencyType.tsx";
import TaskList from "./TaskList.tsx";
import TaskTab from "./TaskTab.tsx";
import { Box, Divider } from "@mui/material";

type TaskTabsProps = {
    selectedTab: FrequencyType,
    taskList: Task[]
    selectTabCommand: (frequency : FrequencyType) => void,
}

const TaskTabs = (props: TaskTabsProps) => {
    const dailyTasks = props.taskList.filter(task => task.frequency === FrequencyType.Daily);
    const weeklyTasks = props.taskList.filter(task => task.frequency === FrequencyType.Weekly);
    const monthlyTasks = props.taskList.filter(task => task.frequency === FrequencyType.Monthly);
    const todoTasks = props.taskList.filter(task => task.frequency === FrequencyType.Unscheduled);
    return (
        <Box>
             <Box sx={{
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent:{
                    xs:'space-between',
                    sm:'flex-start',
                    md:'flex-start',
                },
                gap:{
                    xs: 0,
                    sm:3
                },
                }}>
                <TaskTab tabType={FrequencyType.Daily} selectedTab={props.selectedTab} tabName="Daily" taskList={dailyTasks} selectTabCommand={props.selectTabCommand}/>
                <TaskTab tabType={FrequencyType.Weekly} selectedTab={props.selectedTab} tabName="Weekly" taskList={weeklyTasks} selectTabCommand={props.selectTabCommand}/>
                <TaskTab tabType={FrequencyType.Monthly} selectedTab={props.selectedTab} tabName="Monthly" taskList={monthlyTasks} selectTabCommand={props.selectTabCommand}/>
                <TaskTab tabType={FrequencyType.Unscheduled} selectedTab={props.selectedTab} tabName={FrequencyType.Unscheduled.toString()} taskList={todoTasks} selectTabCommand={props.selectTabCommand}/>
            </Box>
        </Box>
       
    )
}

export default TaskTabs;