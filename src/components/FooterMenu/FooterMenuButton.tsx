import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Box } from "@mui/material";

const getButtonBackgroundColor = (isActive : boolean) => {
    if(isActive)
        return '#ebebeb';
    return 'transparent';
}

type FooterMenuButtonProps = {
    icon:any,
    link:string
}

function FooterMenuButton(props: FooterMenuButtonProps) {
    return (
        <>
        <NavLink to={props.link} end 
            style={{
                textDecoration:'none', 
                width:'100%', 
                display:'flex', 
                flexDirection:'row', 
                justifyContent:'center', 
                alignItems:'center'}}> 
        {
            ({ isActive }) => ( 
                <Button disableElevation 
                    sx={{
                        textDecoration: 'none', 
                        backgroundColor:getButtonBackgroundColor(isActive), 
                        "&:hover":{backgroundColor:'#ebebeb'},
                        width:'25%', 
                        display:'flex', 
                        flexDirection:'column',
                        justifyContent:'center', 
                        alignItems:'center', 
                        }}
                    > 
                    <Box component="img" src={props.icon} sx={{width:35, height:35}}/>
                </Button> 
            )
        }
        </NavLink>
        </>
    )
}

export default FooterMenuButton;