import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Task } from '../../models/Task';
import { useTheme } from '@mui/material';
import deleteIcon from '../../resources/close.svg';
import {ButtonBase} from '@mui/material';
import IncrementButton from './cardComponents/IncrementButton.tsx';

 
type TaskCardProps = {
  task : Task,
  incrementTaskCommand : (task: Task) => void,
  deleteTaskCommand : (task: Task) => void
}

function TaskCard(props:TaskCardProps){  
  const theme = useTheme();
  const backgroundColor = props.task.isCompleted() ? theme.palette.neutral.light : "#ffffff";
  const hoverColor = props.task.isCompleted() ? theme.palette.neutral.dark : theme.palette.neutral.light;
  const borderThickness = props.task.isCompleted() ? 0 : 1;
  const fontColor = props.task.isCompleted() ? theme.palette.neutral.dark : '';

  const displayPeriods = (task) => {
    if(task.periods === 1)
      return; 
    return (
      <Typography color={fontColor}>
        {task.completedPeriods}/{task.periods} completed
      </Typography>
    )
  }

  return (
    <Box sx={{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      minWidth: 275,
      backgroundColor: backgroundColor,
      borderRadius:2,
      border:borderThickness,
      borderColor:theme.palette.neutral.main,
      boxShadow:'none',
      padding:2
    }}>
      <Box sx={{display:'flex', gap:2, alignItems:'center'}}>
        {props.task.isCompleted() ?  ( <></> ): <IncrementButton incrementTaskCommand={props.incrementTaskCommand} task={props.task}/>}
        <Box>
          <Typography variant="h5" color={fontColor}>
            {props.task.taskName}
          </Typography>
          {displayPeriods(props.task)}
        </Box>
      </Box>
      <ButtonBase onClick={() => props.deleteTaskCommand(props.task)} 
        sx={{
          padding:1,
          borderRadius:23,
          "&:hover":{"backgroundColor":hoverColor}
          }}>
        <Box component="img" src={deleteIcon} sx={{width:23, height:23}}/>
      </ButtonBase>
    </Box>
  );
}

export default TaskCard;