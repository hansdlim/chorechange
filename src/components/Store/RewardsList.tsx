import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import * as React from 'react';
import { Typography } from '@mui/material';
import { FrequencyType } from '../../enums/FrequencyType.tsx';
import RewardCard from './RewardCard.tsx';
import { Reward } from '../../models/Reward.ts';

type RewardsListProps = {
    listName: string,
    rewards: Reward[],
    purchaseReward: (reward:Reward) => void,
}

function RewardsList(props:RewardsListProps) {
    return (
    <Box 
        sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2
        }}>
        {props.rewards.map((r) => ( <RewardCard reward={r} key={r.id} purchaseReward={props.purchaseReward}/> ))}
    </Box>
    );
}

export default RewardsList;