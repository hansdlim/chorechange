import Box from '@mui/material/Box';
import * as React from 'react';
import { Container } from '@mui/material';
import SideBar from './SideBar.tsx';
import FooterMenu from './FooterMenu/FooterMenu.tsx';
import listIcon from '../resources/tasks-icon.svg';
import storeIcon from '../resources/store-icon-blue.svg';
import { NavDetails } from '../models/NavDetails.ts';

const taskNav:NavDetails = {
  name: "Tasks",
  link: "/",
  icon: listIcon
}
const storeNav:NavDetails = {
  name: "Store",
  link: "/store",
  icon: storeIcon
}

const navigationLinks:{ [key: string]: NavDetails } = {
  taskNav:taskNav,
  storeNav:storeNav
}

function Layout({children}) {
  return (
    <Container maxWidth="md" disableGutters >
      <Box 
          sx={{
              display: "flex",
              flexDirection: "row",
              height: "100vh",
          }}> 
        <SideBar navDetails={navigationLinks}/>
        <Box 
          sx={{
              display: "flex",
              padding:2,
              width:'100%',
          }}>
          {children}
        </Box>
      </Box>
      <FooterMenu navDetails={navigationLinks}/>
    </Container>
  );
}

export default Layout;