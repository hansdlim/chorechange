import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ButtonBase, useTheme } from '@mui/material';
import { Reward } from '../../models/Reward';
import { Button } from '@mui/material';
import coin from '../../resources/coin.svg';

type RewardCardProps = {
    reward : Reward,
    purchaseReward: (reward:Reward) => void,
}

function RewardCard(props:RewardCardProps){  
  const theme = useTheme();
  return (
    <Box sx={{
        borderRadius:2,
        border:1,
        borderColor:theme.palette.neutral.main,
        boxShadow:'none',
        padding:2,
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        gap:1
        }}>
        <Typography sx={{ fontSize: 18, display:'flex', justifyContent:'center', gap:1}} color="text.secondary" gutterBottom fontWeight="bold">
            <Box component="img" src={coin} sx={{width:25, height:25}}/>
            {props.reward.price}
        </Typography>
        <Typography fontWeight={'bold'} variant="h6">
            {props.reward.name}
        </Typography>
        <Box sx={{typography:'subtitle'}}>
            {props.reward.description}
        </Box>
        <Button variant='outlined' onClick={() => props.purchaseReward(props.reward)}>
            Buy
        </Button>
    </Box>
    
  );
}

export default RewardCard;