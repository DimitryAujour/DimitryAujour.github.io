import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import logo from '../assets/logo.png';
// We no longer need the 'dimitry' import if we are removing that column
import dimitry from '../assets/dimitry.png';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const HeroSection = () => {
    return (
        <Box
            sx={{
                bgcolor: '#1e272e',
                color: 'white',
                padding: { xs: 4, md: 8 },
                minHeight: '80vh',
            }}
        >
            {/* Section 1 */}
            <Grid container spacing={5} justifyContent="center">
                <Grid item xs={11} md={8} sx={{ textAlign: 'center' }}>
                    <Box sx={{ marginBottom: 4 }}>
                        <img src={dimitry} alt="A picture of myself" className="dimitry" />
                    </Box>
                    <Typography variant="h4" fontWeight="bold">
                        I'm Dimitry, a
                    </Typography>
                    <Typography variant="h4" fontWeight="bold" color="#a29bfe">
                        Fullstack Developer
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, maxWidth: '600px', mx: 'auto' }}>
                        Based in Montreal, I build intuitive, responsive, and beautiful web applications.
                    </Typography>
                </Grid>
            </Grid>

            {/* Section 2 - Appears below Section 1 */}
            <Grid container spacing={4} justifyContent="center" sx={{ mt: 6 }}>
                {/* First column */}
                <Grid item xs={12} md={6}>
                    <Box sx={{  p: 2,borderColor: '#a29bfe',border:'3px solid'}}>
                        <Typography variant="h5" fontWeight="bold" color="#a29bfe">
                            About me
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 2 }}>
                            This is a clean, readable paragraph using the Typography component.
                        </Typography>
                        <Typography
                            component="a"
                            href="https://your-destination.com"
                            sx={{
                                textDecoration: 'underline',
                                color: '#a29bfe', // Or 'primary.main'
                                cursor: 'pointer',
                                '&:hover': {
                                    color: '#6c5ce7',
                                    textDecoration: 'none',
                                },
                            }}
                        >
                            Visit My Portfolio
                        </Typography>

                    </Box>
                </Grid>

                {/* Second column */}
                <Grid item xs={12} md={6}>
                    <Box sx={{  p: 2,borderColor: '#a29bfe',border:'3px solid'}}>
                        <Typography variant="h5" fontWeight="bold" color="#a29bfe">
                            My work
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 2 }}>
                            This is a clean, readable paragraph using the Typography component.
                        </Typography>
                        <Typography
                            component="a"
                            href="https://your-destination.com"
                            sx={{
                                textDecoration: 'underline',
                                color: '#a29bfe', // Or 'primary.main'
                                cursor: 'pointer',
                                '&:hover': {
                                    color: '#6c5ce7',
                                    textDecoration: 'none',
                                },
                            }}
                        >
                            Visit My Portfolio
                        </Typography>

                    </Box>
                </Grid>
            </Grid>
            <KeyboardDoubleArrowDownIcon/>
        </Box>

    );
};

export default HeroSection;