import { Box, Button, Typography } from '@mui/material';
import * as React from 'react';
import { User } from '../../models/User';

type ProgressBarProps = {
    user:User,
    collectDailyReward: () => void
}

function ProgressBar(props:ProgressBarProps) {
    const disableButton = !props.user.dailyRewardAvailable();
    const buttonText = props.user.dailyRewardCollected() ? "Daily Reward Collected" : "Collect Daily Reward"; 
    return (
        <>
        <Box sx={{
                display:"flex",
                flexDirection:"row",
                justifyContent:'space-between',
                alignItems:"center",
                gap:2,
            }}>
            <Typography sx={{
                display:"flex",
                flexDirection:"row",
                gap:1
                }}>
                Daily Progress:<Typography fontWeight="bold">{props.user.getDailyProgressPercentage()}</Typography>
            </Typography>
            <Button variant='contained' disableElevation disabled={disableButton} onClick={() => props.collectDailyReward()}> 
                <Typography sx={{color:'white', fontWeight:600}}>{buttonText}</Typography>
            </Button>
        </Box>
        </>
    )
}

export default ProgressBar;