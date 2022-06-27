import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Dialog, DialogContent, DialogTitle, Divider, Grid, IconButton, ImageListItemBar, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Modal, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import React, { useEffect, useState } from "react";
import InfoIcon from '@mui/icons-material/Info';
import json from "../../../data/sample.json"
import CloseIcon from '@mui/icons-material/Close';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function SeriesPage() {

    //Añadimos el hook para abrir o cerrar el popUp cuando pinchemos en una de las series
    const [openPopup, setOpenPopup] = useState(false)


    function ordenarAsc(json: any, key: string | number) {
        json.sort(function (a: any, b: any) {
            return a[key] > b[key];
        });
    }

    ordenarAsc(json.entries, 'title')

    //Con esta funcion cogemos el archivo JSON y cogemos solamente las series
    const onlySeries = json.entries.filter(function (serie) {
        if (serie.programType === "series") {
            console.log(serie)
            return serie;
        };
    });

    //Cogemos las series a partir del año 2010 incluido
    const seriesNuevas = onlySeries.filter(function (serie) {
        if (serie.releaseYear >= 2010) {
            return serie;
        }
    });

    //Cogemos las 20 primeras entradas
    const firstSeries = seriesNuevas.slice(0, 20)


    return (
        <Container
            fixed maxWidth={false}
        >
            <Grid container
                spacing={3}
                paddingTop={6}>
                {/* Mapeamos las series para que cada una se encuentre dentro de un card */}
                {firstSeries.map((item, index) => (
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

function setState(arg0: any) {
    throw new Error("Function not implemented.");
}
