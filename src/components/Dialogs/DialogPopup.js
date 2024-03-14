import { Dialog, TextField, Typography, Box, Divider, Button } from "@mui/material";


function DialogPopup({title, confirm, confirmAction, openDialog, setOpenDialog, children}){
    return (
        <Dialog open={openDialog}>
            <Box 
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap:3,
                    alignItems: "flex-start",
                    justifyContent:"flex-start",
                    padding:3,
                    minWidth:{
                        xs:150,
                        sm:500,
                    },
                    maxWidth:{
                        xs:300,
                        sm:500,
                    },
                }}>
                <Box sx={{
                     display: "flex",
                     flexDirection: "column",
                     gap:1,
                     width:"100%"
                }}>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:"space-between",
                        alignItems:"center"
                    }}>
                        <Typography variant="h6">{title}</Typography>
                        <Button onClick={() => setOpenDialog(false)}>
                            <Typography variant="h6">X</Typography>
                        </Button>
                    </Box>
                    <Divider flexItem />
                </Box>
                {children}
                <Divider flexItem />
                <Button variant='outlined' onClick={() => confirmAction()}>
                    <Typography variant="outline">{confirm}</Typography>
                </Button>
            </Box>
        </Dialog>
    );
}

export default DialogPopup;