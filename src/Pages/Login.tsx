import * as React from 'react';
import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext.tsx';
import { TextField, Container, Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getUser} from '../api/usersApi.ts';
import { useTheme } from '@mui/material';
import logo from '../resources/logo.png';

const initialUserDetails = {
    username: "",
    password: ""
}

function Login() {
    const navigate = useNavigate();
    const theme = useTheme();
    const { user, setUser } = useContext(UserContext);
    const [userDetails, setUserDetails] = useState(initialUserDetails);
    
    const handleOnChange = (e) =>{
        const {name, value} = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value
        })
    }

    const login = async () => {
        const userCall = await getUser(userDetails.username, userDetails.password);
        setUser({
            ...userCall,
            token: true
        });
        navigate("/");
    }

    return (
        <>
        <Container maxWidth="md" disableGutters={true}>
            <Box sx={{
                display:"flex",
                flexDirection:"column",
                padding:5,
                gap:3
            }}>
                <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                    <Box component="img" src={logo} sx={{width:30, height:30, marginRight:1}}/>
                    <Typography variant='h4' fontWeight={'bold'} sx={{color:theme.palette.primary.main}}>chorechange</Typography>
                </Box>
                <TextField label="UserName" id="outlined-basic" value={userDetails.username} name='username' onChange={handleOnChange}/>
                <TextField label="Password" type="password" id="outlined-basic" value={userDetails.password} name='password' onChange={handleOnChange}/>
                <Button variant='outlined' onClick={() => login()}>
                    Log in
                </Button>
            </Box>
        </Container>
        </>
    )
}

export default Login;