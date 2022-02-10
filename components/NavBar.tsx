import { AppBar, Box, Toolbar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
export function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Text
                    </Typography>
                    <Button color="inherit">Button</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}