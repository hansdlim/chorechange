import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Goal } from '../../models/Goal';
import { ButtonBase, useTheme } from '@mui/material';

type GoalCardProps = {
    goal : Goal,
}

function GoalCard(props:GoalCardProps){  
  const theme = useTheme();
  return (
    <ButtonBase sx={{borderRadius:2}}>
        <Box sx={{
            minWidth: 275,
            borderRadius:2,
            border:1,
            borderColor:theme.palette.neutral.main,
            boxShadow:'none',
            padding:2,
            width:'100%',
            display:'flex',
            flexDirection:'column',
            alignItems:'flex-start'
            }}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Reward: {props.goal.reward}
            </Typography>
            <Typography variant="h5">
            {props.goal.name}
            </Typography>
        </Box>
    </ButtonBase>
    
  );
}

export default GoalCard;