import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import windowsStore from "../../../assets/peliculasSeries.jpg"
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import Link from "@mui/material/Link";
import Image from "next/image";

export default function MainPage() { //Componente para la página principal
  return (
    <Container
      fixed maxWidth={false}
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 2,
          width: 200,
          height: 300,
        },
      }}
    >
      {/* Añadiremos dos papers para incluir la imagen junto con el texto y además los meto dentro de un link para navegar */}
      <Link href="/seriesPage">
        <Paper>
          <Image alt="complex" src={windowsStore.src} height={300} width={190}/>
            <Typography variant="h6">Popular Series</Typography>
        </Paper>
      </Link>
      <Link href="/moviesPage">
        <Paper>
          <Image alt="complex" src={windowsStore.src} height={300} width={190}/>
            <Typography variant="h6">Popular Movies</Typography>
        </Paper>
      </Link>

    </Container>
  );
}