import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {Alert, List, ListItem, ListItemIcon, ListItemText, Stack, Typography} from "@mui/material";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const files = [
"/somedirectory_on_my_local_disc/cotswolds.webp",
"/somedirectory_on_my_local_disc/london.jpeg",
"/somedirectory_on_my_local_disc/new_york.jpeg"
]



function Uploader() {
    return (
        <Box
            display="flex"
            gap={6}
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            height="100vh" // full viewport height
        >
            <Stack sx={{backgroundColor: "lightgrey" , padding: "20px" }}>
                <Typography sx={{ mb: 2 }} variant="h6" component="div">
                    Files to Upload
                </Typography>
                    <List dense={true}>
                        {files.map( (fileName) =>
                            <ListItem>
                                <ListItemIcon>
                                    <InsertDriveFileIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={fileName}
                                />
                            </ListItem>,
                        )}
                    </List>
            </Stack>
            <Alert severity="success">
                file {"XXXXX"} is uploading
            </Alert>
            <Button onClick={() => alert("Implement me")} variant="contained" component="label">
                Upload
            </Button>
        </Box>
    );
}

export default Uploader
