import Box from '@mui/material/Box';
import * as React from 'react';

import { Container } from '@mui/material';
import SideBar from './SideBar.tsx';
function Layout({children}) {
  return (
    <Container maxWidth="md" disableGutters={true}>
      <Box 
          sx={{
              display: "flex",
              flexDirection: "row",
              height: "100vh",
          }}> 
        <SideBar/>
        <Box 
          sx={{
              display: "flex",
              width:"100vw",
              padding:2
          }}>
          {children}
        </Box>
      </Box>
    </Container>
  );
}

export default Layout;