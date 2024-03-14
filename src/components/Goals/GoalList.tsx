import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import * as React from 'react';
import { Typography } from '@mui/material';
import { Goal } from '../../models/Goal.ts';
import GoalCard from './GoalCard.tsx';
import { FrequencyType } from '../../enums/FrequencyType.tsx';

type GoalListProps = {
    listName: string,
    goalList: Goal[],
}

function GoalList(props:GoalListProps) {

    return (
    <Box 
        sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            py:3
        }}>
        {props.goalList.map((t) => ( <GoalCard goal={t}/> ))}
    </Box>
    );
}

export default GoalList;