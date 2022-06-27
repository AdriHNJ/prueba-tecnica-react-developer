import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import twitter from "../../../assets/social/twitter-white.svg"
import facebook from "../../../assets/social/facebook-white.svg"
import instagram from "../../../assets/social/instagram-white.svg"
import appStore from "../../../assets/store/app-store.svg"
import playStore from "../../../assets/store/play-store.svg"
import windowsStore from "../../../assets/store/windows-store.svg"

export default function seriesFooter() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '30vh',
                position: 'right'
            }}
        >
            <CssBaseline />

            <Box
                component="footer"
                sx={{
                    py: 8,
                    px: 0,
                    mt: 'auto',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark'
                            ? theme.palette.grey[200]
                            : theme.palette.grey[800],
                }}
            >
                <Container fixed maxWidth={false}>
                    {/* Links de Home, Terms ... */}
                    <Link href="#" underline="hover" color={"#ffffff"} variant='h6' marginRight={2}>
                        {'Home'}
                    </Link>

                    <Link href="#" underline="hover" color={"#ffffff"} variant='h6' marginRight={2} marginLeft={2}>
                        {'Terms and Conditions'}
                    </Link>

                    <Link href="#" underline="hover" color={"#ffffff"} variant='h6' marginRight={2} marginLeft={2}>
                        {'Privacy Policy'}
                    </Link>

                    <Link href="#" underline="hover" color={"#ffffff"} variant='h6' marginRight={2} marginLeft={2}>
                        {'Collection Statement'}
                    </Link>

                    <Link href="#" underline="hover" color={"#ffffff"} variant='h6' marginRight={2} marginLeft={2}>
                        {'Help'}
                    </Link>

                    <Link href="#" underline="hover" color={"#ffffff"} variant='h6' marginRight={2} marginLeft={2}>
                        {'Manage Account'}
                    </Link>

                </Container>

                <Container fixed maxWidth={false}>
                    {/* Texto de copyright */}
                    <Typography color={"#c6c6c6"} marginTop={2}>
                        Copyright © 2022 DEMO Streaming. All Rights Reserved
                    </Typography>

                    {/* Imagenes con links dentro de un grid */}
                    <Grid container paddingTop={6}>
                        <Grid item paddingRight={3} >
                            <Link href="https://es-es.facebook.com/" target={'_blank'}>
                                <img src={facebook.src} height={30} />
                            </Link>
                        </Grid>
                        <Grid item paddingRight={3}>
                            <Link href="https://twitter.com/home?lang=es" target={'_blank'}>
                                <img src={twitter.src} height={30} />
                            </Link>
                        </Grid>
                        <Grid item md={7}>
                            <Link href="https://www.instagram.com/" target={'_blank'}>
                                <img src={instagram.src} height={30} />
                            </Link>
                        </Grid>
                        <Grid item paddingRight={2}>
                            <Link href='https://www.apple.com/es/app-store/' target={'_blank'}>
                                <img src={appStore.src} />
                            </Link>
                        </Grid>
                        <Grid item paddingRight={1}>
                            <Link href='https://play.google.com/store/games?hl=es' target={'_blank'}>
                                <img src={playStore.src} />
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href='https://apps.microsoft.com/store/apps?hl=es-es&gl=es' target={'_blank'}>
                                <img src={windowsStore.src} height={40.019} width={135.716} />
                            </Link>
                        </Grid>
                    </Grid>


                </Container>
            </Box>
        </Box>
    )
}