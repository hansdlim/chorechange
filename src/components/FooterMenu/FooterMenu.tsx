import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import AddTaskDialog from '../Dialogs/AddTaskDialog.tsx';
import logo from '../resources/logo.png';
import { useTheme } from '@mui/material';
import { ButtonBase } from '@mui/material';
import listIcon from '../../resources/tasks-icon.svg';
import storeIcon from '../../resources/store-icon-blue.svg';
import FooterMenuButton from './FooterMenuButton.tsx';
import plusIcon from '../../resources/plus-icon-white.svg';
import { NavDetails } from '../../models/NavDetails.ts';

type FooterMenuProps = {
    navDetails:{ [key: string]: NavDetails }
}

function FooterMenu(props:FooterMenuProps) {
    const [openDialog, setOpenDialog] = React.useState(false);
    const theme = useTheme();


    return (
        <>   
            {/* Actual sidebar */}
            <Box sx={{
                    display:{xs:'flex', sm:'none', md:'none'}, 
                    flexDirection: "row",
                    width: "100vw",
                    bottom:0,
                    justifyContent:'space-between',
                    alignItems:'center',
                    position:"fixed",
                    gap:2,
                    backgroundColor:'white',
                    paddingTop:2,
                    paddingBottom:2,
                }}>
                    <FooterMenuButton icon={props.navDetails["taskNav"].icon} link={props.navDetails["taskNav"].link}/>
                    <Button variant='contained' disableElevation
                        sx=
                        {{
                            backgroundColor:theme.palette.secondary.main, 
                            borderColor:theme.palette.secondary.main, 
                            width:'25%',
                            fontWeight:'bold',
                            typography:'body',
                            "&:hover":{borderColor:theme.palette.secondary.dark}
                        }} 
                        onClick={() => setOpenDialog(true)}>
                        <Box component="img" src={plusIcon} sx={{width:35, height:35}}/>
                    </Button> 
                    <FooterMenuButton icon={props.navDetails["storeNav"].icon} link={props.navDetails["storeNav"].link}/>
            </Box>
            {/* <Divider orientation="horizontal" light={true} flexItem sx={{minWidth:"100vw", backgroundColor:theme.palette.neutral.light}}/> */}
            <AddTaskDialog openDialog={openDialog} setOpenDialog={setOpenDialog}/>
        </>
    );
}

export default FooterMenu;