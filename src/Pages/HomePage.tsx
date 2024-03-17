import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import * as React from 'react';
import { Container, Typography } from '@mui/material';
import TaskList from '../components/Tasks/TaskList.tsx';
import TaskCard from '../components/Tasks/TaskCard.tsx';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext.tsx'; 
import UserStatusBar from '../components/UserStatusBar.tsx';
import Layout from '../components/Layout.tsx';
import { Task } from '../models/Task.tsx';
import { User } from '../models/User.tsx';
import { FrequencyType } from '../enums/FrequencyType.tsx';
import TaskTabs from '../components/Tasks/TaskTabs.tsx';
import ProgressBar from '../components/ProgressBar/ProgressBar.tsx';
import CoinsAddedDialog from '../components/Dialogs/CoinsAddedDialog.tsx';
import { deleteUserTask, saveUserTask } from '../api/usersApi.ts';

function HomePage() {
  useEffect(() => {
    document.title = 'Tasks';
  });

  const { user, setUser } = useContext(UserContext);
  const [ selectedTab, setSelectedTab ] = useState(FrequencyType.Daily);
  const [openDialog, setOpenDialog] = useState(false);

  const incrementTask = async (task: Task) => {
    let updatedUser:User = {...user};
    const t = updatedUser.tasks[task.id];
    t.completedPeriods += 1;
    console.log(t.completedPeriods + " / " + t.periods);
    if(t.completedPeriods === t.periods){
      t.completeTask();
    }
    console.log("THIS IS A NEW DATE: " + new Date());
    console.log(t.lastCompletedDate);
    console.log(t.isCompleted());
    setUser(updatedUser);
    const saveTask = await saveUserTask(user.id, task);
  }

  const deleteTask = async (task: Task) => {
    let updatedUser:User = {...user};
    const t:Task = updatedUser.tasks[task.id];
    console.log(t);
    console.log(user.tasks);
    console.log("deletingTask");
    console.log(task.id);
    delete updatedUser.tasks[task.id];
    setUser(updatedUser);
    await deleteUserTask(updatedUser.id, task);
  }


  const handleNewTabSelected = (frequency:FrequencyType) => {
    setSelectedTab(frequency);
  }

  const userTaskArray: Task[] = Object.values(user.tasks);

  const dailyTasks = userTaskArray.filter(task => task.frequency === FrequencyType.Daily);
  const weeklyTasks = userTaskArray.filter(task => task.frequency === FrequencyType.Weekly);
  const monthlyTasks = userTaskArray.filter(task => task.frequency === FrequencyType.Monthly);
  const todoTasks = userTaskArray.filter(task => task.frequency === FrequencyType.Unscheduled);
  
  return (
    <Layout>
      <Box 
        sx={{
            display: "flex",
            width:'100%',
            flexDirection: "column",
            justifyContent:"flex-start",
            gap:2
        }}>
        <UserStatusBar user={user}/>
        <TaskTabs selectedTab={selectedTab} taskList={userTaskArray} selectTabCommand={handleNewTabSelected}/>
        <TaskList listName={"Daily Tasks"}  taskList={dailyTasks} selectedTab={selectedTab} listType={FrequencyType.Daily} incrementTaskCommand={incrementTask} deleteTaskCommand={deleteTask}/>
        <TaskList listName={"Weekly Tasks"}  taskList={weeklyTasks} selectedTab={selectedTab} listType={FrequencyType.Weekly} incrementTaskCommand={incrementTask} deleteTaskCommand={deleteTask}/>
        <TaskList listName={"Monthly Tasks"}  taskList={monthlyTasks} selectedTab={selectedTab} listType={FrequencyType.Monthly} incrementTaskCommand={incrementTask} deleteTaskCommand={deleteTask}/>
        <TaskList listName={"To-do List"}  taskList={todoTasks} selectedTab={selectedTab} listType={FrequencyType.Unscheduled} incrementTaskCommand={incrementTask} deleteTaskCommand={deleteTask}/>
      </Box>
    </Layout>
  );
}

export default HomePage;