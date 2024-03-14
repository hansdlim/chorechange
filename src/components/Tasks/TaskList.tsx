import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import * as React from 'react';
import { Typography } from '@mui/material';
import TaskCard from './TaskCard.tsx';
import { Task } from '../../models/Task.tsx';
import { FrequencyType } from '../../enums/FrequencyType.tsx';

type TaskListProps = {
    listName: string,
    taskList: Task[],
    incrementTaskCommand: (task: Task) => void,
    deleteTaskCommand: (task: Task) => void,
    listType: FrequencyType,
    selectedTab: FrequencyType
}

function TaskList(props:TaskListProps) {

    const uncompletedTasks = props.taskList.filter(t => !t.isCompleted());
    const completedTasks = props.taskList.filter(t => t.isCompleted());

    if(props.listType !== props.selectedTab)
        return;

    return (
    <Box 
        sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
        }}>
            {/* <Typography variant='h6' fontWeight={600}>{props.listName}</Typography>
            <Divider></Divider> */}
        {uncompletedTasks.map((t) => ( <TaskCard task={t} key={t.id} incrementTaskCommand={props.incrementTaskCommand} deleteTaskCommand={props.deleteTaskCommand}/> ))}
        {completedTasks.map((t) => ( <TaskCard task={t} key={t.id} incrementTaskCommand={props.incrementTaskCommand} deleteTaskCommand={props.deleteTaskCommand}/> ))}
    </Box>
    );
}

export default TaskList;