import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { DemoDrawer } from '../drawer';

export default function Header() {
  return (
    // Declaramos una caja o Box en la que añadimos un componente AppBar para hacer la cabecera. Ademas añadimos un boton 
    // con el icono de menú para navegar entre las distitas páginas.
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color='default'>
        <Toolbar>
          <DemoDrawer />
          <Typography
            variant="h4"
            noWrap
            component="div"
            align='center'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            DEMO Streaming
          </Typography>
          
          <Box>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Añadimos una nueva barra para añadir el texto de popular titles*/}
      <AppBar position="sticky" color='secondary'>
        <Toolbar>
          <Typography
            variant="h4"
            noWrap
            component="div"
            align='center'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Popular Series
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
