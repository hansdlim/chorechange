import { Box, Button, Typography } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import RemoveMoneyDialog from './Dialogs/RemoveMoneyDialog.tsx';
import AddMoneyDialog from './Dialogs/AddMoneyDialog.tsx';
import { User } from '../models/User.tsx';
import coin from '../resources/coin.svg';
import { useTheme } from '@emotion/react';
import CoinsAddedDialog from './Dialogs/CoinsAddedDialog.tsx';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext.tsx';

type UserStatusBarProps = {
    user:User,
}

function UserStatusBar(props:UserStatusBarProps) {
    const [openDialog, setOpenDialog] = useState(false);

    const [coinsCollected, setCoinsCollected] = useState(0);
    const { user, setUser } = useContext(UserContext);
    const theme = useTheme();
    const disableButton = !props.user.dailyRewardAvailable();
    const buttonText = props.user.dailyRewardCollected() ? "Reward Collected" : "Collect Reward"; 
    
    const resetCoinsCollected = () =>{
        setCoinsCollected(0);
    }
    
    const collectDailyReward = () => {
        user.collectDailyReward();
        setCoinsCollected(1);
        setOpenDialog(true);
        setUser({...user});
    }

    return (
        <>
        <Box sx={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            gap:5,
        }}>
            <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"flex-start",
                    width:'100%',
                    alignItems:"center",
                    gap:1,
                }}>
                <Box sx={{
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:'flex-start',
                        alignItems:"center",
                        width:'100%',
                        gap:2,
                    }}>
                        Daily Progress: <Box fontWeight={'bold'}>{props.user.getDailyProgressPercentage()}</Box>
                    <Button variant='contained' disableElevation disabled={disableButton} onClick={() => collectDailyReward()}> 
                        <Box sx={{color:'white', fontWeight:600}}>{buttonText}</Box>
                    </Button>
                </Box>
                <Box component="img" src={coin} sx={{width:23, height:23}}/>
                <Box sx={{color:theme.palette.gold.main, fontWeight:'bold', fontSize:'h6.fontSize'}}>{props.user.dailyCoins}</Box>
            </Box>
        </Box>
        <CoinsAddedDialog coinsAdded={coinsCollected} openDialog={openDialog} setOpenDialog={setOpenDialog} resetCoinsCollected={resetCoinsCollected}/>
        </>
    )
}

export default UserStatusBar;
