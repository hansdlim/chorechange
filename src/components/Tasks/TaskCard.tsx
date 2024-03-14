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

const displayPeriods = (task) => {
  if(task.periods === 1)
    return; 
  return (
    <Typography color="text.secondary">
      {task.completedPeriods}/{task.periods} completed
    </Typography>
  )
}

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
  deleteTaskCommand : (task: Task) => void
}

function TaskCard(props:TaskCardProps){  
  const theme = useTheme();
  const backgroundColor = props.task.isCompleted() ? theme.palette.neutral.light : "#ffffff";
  const borderThickness = props.task.isCompleted() ? 0 : 1;

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
      <Box sx={{display:'flex', gap:2}}>
        {displayAction(props.task, props.incrementTaskCommand)}
        <Box>
          <Typography variant="h5">
            {props.task.taskName}
          </Typography>
          {displayPeriods(props.task)}
        </Box>
      </Box>
      <Box component={Button} onClick={() => props.deleteTaskCommand(props.task)}>
        <Box component="img" src={deleteIcon} sx={{width:23, height:23}}/>
      </Box>
    </Box>
  );
}

export default TaskCard;