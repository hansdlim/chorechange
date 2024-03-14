import Box from '@mui/material/Box';
import * as React from 'react';
import { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext'; 
import UserStatusBar from '../components/UserStatusBar';
import Layout from '../components/Layout';

function Profile() {
  const { user, setUser } = useContext(UserContext);
  
  return (
    <Layout>
      <Box 
        sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent:"flex-start",
            width:"100vw",
            py:3
        }}>
        <UserStatusBar user={user}/>
      </Box>
    </Layout>
  );
}

export default Profile;