import * as React from 'react';
import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext.tsx';
import { TextField, Container, Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getUserById, getUser} from '../api/usersApi.ts';

const initialUserDetails = {
    username: "",
    password: ""
}

function Login() {
    const navigate = useNavigate();
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
        console.log("API CALL");
        const userCall = await getUser('test');
        console.log(userCall);
        console.log("Logging in...");
        setUser({
            ...userCall,
            token: true
        });
        console.log(userCall);
        navigate("/");
        console.log("Navigating...");
    }

    return (
        <>
        <Container maxWidth="md" disableGutters={true}>
            <Box sx={{
                display:"flex",
                flexDirection:"column"
            }}>
                <TextField label="UserName" id="outlined-basic" value={userDetails.username} onChange={handleOnChange}/>
                <TextField label="Password" id="outlined-basic" value={userDetails.password} onChange={handleOnChange}/>
                <Button variant='outlined' onClick={() => login()}>
                    Log in
                </Button>
            </Box>
        </Container>
        </>
    )
}

export default Login;