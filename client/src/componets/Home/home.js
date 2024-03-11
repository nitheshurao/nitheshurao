import { Box, Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './home.css'
function Home() {


    return (

        <Card sx={{ display: 'flex' }} >
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '90vh', padding: '1%' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', margin: 'auto', }}>
                    <div class="App-logo"> ⋆.ೃ࿔*:･</div>
                    <Typography component="div" variant="h2" sx={{ display: 'flex', margin: '40px auto', }}>
                        Hey, I'm Nithesh
                        <div class="ball App-logo">👋</div>
                    </Typography>
                    <Typography variant="h5" color="text.secondary" component="div" sx={{ display: 'flex', margin: 'auto', }}>
                        Full-Stack Developer & Creative Artist: Expert in JavaScript, React, Node.js, Express, MongoDB, and a Passionate Painter & Sketch Artist"
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: '30px' }}>
                        <IconButton aria-label="previous">
                            Hire Me
                        </IconButton>
                        <IconButton aria-label="play/pause">
                            Explore more
                        </IconButton>
                    </Box>
                </CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        Email: nitheshurao@gmail.com
                    </Grid>
                    <Grid item xs={3}>
                        phone: 7899589718
                    </Grid>
                    <Grid item xs={3}>
                        Linkdin
                    </Grid>
                    <Grid item xs={3}>
                        github
                    </Grid>
                </Grid>

            </Box>

            <CardMedia
                component="img"
                sx={{ width: '40%', padding: '2%', margin: 'auto' }}
                image="img/img1.png"
                alt="Live from space album cover"
            />

        </Card>

    )
}

export default Home
