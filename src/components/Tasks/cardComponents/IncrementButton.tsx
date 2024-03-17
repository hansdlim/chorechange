import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Task } from '../../../models/Task';
import { useTheme } from '@mui/material';
import tickIcon from '../../../resources/tick-icon.svg';
import tickIconWhite from '../../../resources/tick-icon-white.svg';
import plusIconWhite from '../../../resources/plus-icon-white.svg';
import plusIconBlue from '../../../resources/plus-icon-blue.svg';
import {ButtonBase} from '@mui/material';

const displayAction = (task, incrementTask) => {
  if(task.isCompleted())
    return;

  const buttonWording = (task.completedPeriods + 1) === task.periods ? "Complete" : "+";
  return (
    <Button size="small" onClick={() => incrementTask(task)}>{buttonWording}</Button>
  )
}
 
type TaskCardProps = {
  task : Task,
  incrementTaskCommand : (task: Task) => void,
}

function IncrementButton(props:TaskCardProps){  
    const theme = useTheme();
    const backgroundColor = props.task.isCompleted() ? theme.palette.primary.light : "#ffffff";
    const icon = () => {
        if(props.task.periods > 1){
            if(props.task.isCompleted())
                return plusIconWhite;
            return plusIconBlue
        }
        if(props.task.isCompleted())
            return tickIconWhite;
        
        return tickIcon;
    }
    const borderWidth = props.task.isCompleted() ? 0 : 1;

    return (
        <ButtonBase 
            onClick={() => props.incrementTaskCommand(props.task)}
            sx={{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                borderRadius:16,
                border:borderWidth,
                borderColor:theme.palette.primary.main,
                backgroundColor:backgroundColor,
                width:34, 
                height:34
            }}>
            {/* <Box component="img" src={icon} sx={{width:25, height:25}}/> */}
            <Box component="img" src={icon()} sx={{width:25, height:25}}/>
        </ButtonBase>
    );
}

export default IncrementButton;