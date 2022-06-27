import React from 'react'
import { Drawer, Box, Typography, IconButton, Link, Divider, ListItem, ListItemButton, ListItemIcon, List, ListItemText } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import MovieIcon from '@mui/icons-material/Movie';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import HomeIcon from '@mui/icons-material/Home';

export const DemoDrawer = () => {

    //Definimos un hook para abrir y cerrar el drawer
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <>
        {/* Colocamos todo el texto junto con los iconos en una lista */}
            <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <List>
                    <Link href="/" color='inherit' underline='none'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Main Page" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Divider/>
                    <Link href="/seriesPage" color='inherit' underline='none'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <MovieIcon />
                                </ListItemIcon>
                                <ListItemText primary="Popular Series" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link href="/moviesPage" color='inherit' underline='none'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <MovieCreationOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Popular Movies" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
        </>
    )
}
