import Box from '@mui/material/Box';
import * as React from 'react';
import { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext'; 
import UserStatusBar from '../components/UserStatusBar';
import Layout from '../components/Layout';
import { Divider, Typography } from '@mui/material';

function Focus() {
  const { user, setUser } = useContext(UserContext);
  
  return (
    <Layout>
      <Box 
        sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent:"flex-start",
            width:"100vw",
            gap:3,
            py:3
        }}>
        <UserStatusBar user={user}/>
        <Divider/>
        <Typography variant="h6">Lets Focus!</Typography>
      </Box>
    </Layout>
  );
}

export default Focus;