import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import AddTaskDialog from './Dialogs/AddTaskDialog.tsx';
import logo from '../resources/logo.png';
import { useTheme } from '@mui/material';
import { ButtonBase } from '@mui/material';
import listIcon from '../resources/list-icon.svg';
import storeIcon from '../resources/store-icon.svg';

function SideBar() {
    const [openDialog, setOpenDialog] = React.useState(false);
    const theme = useTheme();
    const navigationLinks = [
        {
            name: "Tasks",
            link: "/",
            icon: listIcon
        },
        // {
        //     name: "GOALS",
        //     link: "/goals",
        // },
        {
            name: "STORE",
            link: "/store",
            icon: storeIcon
        },
        // {
        //     name: "Focus",
        //     link: "/focus",
        // },
        // {
        //     name: "Profile",
        //     link: "/profile",
        // },
    ]
        
    const getButtonBackgroundColor = (isActive : boolean) => {
        if(isActive)
            return '#ebebeb';
        return 'transparent';
    }

    return (
        <Box sx={{
            display:{xs:'none', sm:'flex', md:'flex'}, 
            justifyContent:'space-between',
        }}>
            {/* Box to just hold width */}
            <Box sx={{
                minWidth:{
                    xs:65,
                    sm:65,
                    md:165,
                },
                margin:2
            }}/>
            {/* Actual sidebar */}
            <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    maxHeight: "100vh",
                    justifyContent:'space-between',
                    position:"fixed",
                    width:{
                        xs:65,
                        sm:65,
                        md:165,
                    },
                    margin:2,
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection:"column",
                        justifyContent:'flex-start',
                        alignItems:'flex-start',
                        gap:2,
                        }}>
                        <Box sx={{
                            display:"flex",
                            flexDirection:"row",
                            alignItems: "center",
                            justifyContent:"flex-start",
                        }}>
                            <Box component="img" src={logo} sx={{width:30, height:30, marginRight:1}}/>
                            <Typography variant="h6" component="h1" fontWeight={600} sx={{display:{xs:'none', sm:'none', md:'block', color:theme.palette.primary.main}}}>
                                chorechange
                            </Typography>
                        </Box>
                        {
                            navigationLinks.map((item) => (
                                <NavLink key={item.name} to={item.link} end style={{textDecoration:'none', width:'100%'}}> 
                                {
                                    ({ isActive }) => ( 
                                        <Button disableElevation 
                                            sx={{
                                                textDecoration: 'none', 
                                                backgroundColor:getButtonBackgroundColor(isActive), 
                                                "&:hover":{backgroundColor:'#ebebeb'},
                                                width:'100%', 
                                                display:'flex', 
                                                justifyContent:'flex-start', 
                                                alignItems:'flex-start', 
                                                flexDirection:'row',
                                                gap:1,
                                                fontWeight:'bold'
                                                }}
                                            > 
                                            <Box component="img" src={item.icon} sx={{width:25, height:25}}/>
                                            <Box sx={{ display:{xs:'none',sm:'none', md:'block'}}}>{item.name}</Box>
                                        </Button> 
                                    )
                                }
                                </NavLink>
                            )
                        )}
                        <Button variant='outlined' 
                            sx=
                            {{
                                color:theme.palette.secondary.main, 
                                borderColor:theme.palette.secondary.main, 
                                width:'100%',
                                fontWeight:'bold',
                                typography:'body',
                                "&:hover":{borderColor:theme.palette.secondary.dark}
                            }} 
                            onClick={() => setOpenDialog(true)}>
                            <Box sx={{ display:{xs:'block',sm:'block', md:'none'}}}>{"+"}</Box>
                            <Box sx={{ display:{xs:'none',sm:'none', md:'block'}, color:theme.palette.secondary.main}}>{"Add Task +"}</Box>
                        </Button> 
                    </Box>
            </Box>
            <Divider orientation="vertical" light={true} flexItem sx={{minHeight:"100vh", backgroundColor:theme.palette.neutral.light}}/>
            <AddTaskDialog openDialog={openDialog} setOpenDialog={setOpenDialog}/>
        </Box>
    );
}

export default SideBar;