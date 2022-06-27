import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Dialog, DialogContent, DialogTitle, Grid, IconButton, ImageListItemBar, Link, ListSubheader, Modal, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import React, { useEffect, useState } from "react";
import InfoIcon from '@mui/icons-material/Info';
import json from "../../../data/sample.json"
import CloseIcon from '@mui/icons-material/Close';

export default function MoviesPage() {

    const [openPopup, setOpenPopup] = useState(false)



    function ordenarAsc(json: any, key: string | number) {
        json.sort(function (a: any, b: any) {
            return a[key] > b[key];
        });
    }

    ordenarAsc(json.entries, 'title')

    //Con esta funcion cogemos el archivo JSON y cogemos solamente las series
    const onlyMovies = json.entries.filter(function (serie) {
        if (serie.programType === "movie") {
            return serie;
        };
    });

    //Cogemos las series a partir del año 2010 incluido
    const moviesNuevas = onlyMovies.filter(function (serie) {
        if (serie.releaseYear >= 2010) {
            return serie;
        }
    });

    //Cogemos las 20 primeras entradas
    const firstMovies = moviesNuevas.slice(0, 20)

    return (
        <Container
            fixed maxWidth={false}
        >
            <Grid container
                spacing={3}
                paddingTop={6}>
                {/* Mapeamos las peliculas para que cada una se encuentre dentro de un card */}
                {firstMovies.map((item, index) => (
                    <>
                        <Grid item xs={2.3}>
                            <Card>
                                <CardActionArea key={index} onClick={() => setOpenPopup(true)}>
                                    <CardMedia
                                        height={450}
                                        width={10}
                                        component="img"
                                        src={item.images["Poster Art"].url}
                                        alt={item.title} />
                                    <CardContent>
                                        <Link href='#'>
                                            <Typography gutterBottom variant="h6" component="div">
                                                {item.title}
                                            </Typography>
                                        </Link>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        {/* Declaramos el PopUp */}
                        <Dialog
                            open={openPopup}
                        >
                            <Button onClick={() => setOpenPopup(false)}>
                                <CloseIcon></CloseIcon>
                            </Button>
                            <Card>
                                <CardMedia
                                    height={800}
                                    width={10}
                                    component="img"
                                    src={item.images["Poster Art"].url}
                                    alt={item.title} />
                            </Card>
                            <DialogTitle>
                                <Typography gutterBottom variant="h6" component="div">
                                    {item.title}
                                </Typography>
                            </DialogTitle>
                            <DialogContent>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    {item.description}
                                </Typography>
                                <Typography gutterBottom variant="subtitle2" component="div">
                                    {item.releaseYear}
                                </Typography>
                            </DialogContent>
                        </Dialog>
                    </>
                ))}
            </Grid>
        </Container>
    );
}