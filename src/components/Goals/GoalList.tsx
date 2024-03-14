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
    // listType: FrequencyType,
    // selectedTab: FrequencyType
    // deleteTaskCommand?: JSX.Element
}

function GoalList(props:GoalListProps) {
    // if(props.listType !== props.selectedTab)
    //     return;

    return (
    <Box 
        sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            py:3
        }}>
            {/* <Typography variant='h6' fontWeight={600}>{props.listName}</Typography>
            <Divider></Divider> */}
        {props.goalList.map((t) => ( <GoalCard goal={t}/> ))}
    </Box>
    );
}

export default GoalList;