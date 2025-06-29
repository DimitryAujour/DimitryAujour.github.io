import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import portrait from '../assets/portrait.jpg'

const AboutSection: React.FC = () => {
    const colors = {
        background: '#111827',
        text: '#E5E7EB',
        accent: '#3b82f6',
        accentPurple: '#8b5cf6'
    };

    return (
        <Box sx={{
            bgcolor: colors.background,
            color: colors.text,
            padding: { xs: 4, md: 8 },
            overflow: 'hidden',
        }}>
            <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
                {/* Image Section */}
                <Grid item xs={12} md={5}>
                    <Box sx={{ position: 'relative', width: 'fit-content', margin: 'auto' }}>
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '-20px',
                                left: '-20px',
                                width: '100%',
                                height: '100%',
                                border: `5px solid ${colors.accent}`,
                                borderRadius: '12px',
                                borderRight: 'none',
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0,
                            }}
                        />
                        <Box
                            component="img"
                            src={portrait}
                            alt="Dimitry Aujour"
                            sx={{
                                position: 'relative',
                                width: '100%',
                                maxWidth: '350px',
                                borderRadius: '8px',
                                display: 'block',
                            }}
                        />
                    </Box>
                </Grid>

                {/* Text & Buttons Section */}
                <Grid item xs={12} md={7}>
                    <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                            ABOUT ME
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 4, maxWidth: '550px', marginX: { xs: 'auto', md: 0 } }}>
                            I am a passionate web developer based in Montreal, specializing in creating modern, responsive, and user-friendly web applications. With a strong foundation in React and the latest web technologies, I am dedicated to building products that not only look great but also perform flawlessly.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                            <Button
                                variant="contained"
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'white',
                                    paddingX: 4,
                                    paddingY: 1.5,
                                    borderRadius: '8px',
                                    background: `linear-gradient(to right, ${colors.accent}, ${colors.accentPurple})`,
                                    '&:hover': {
                                        opacity: 0.9
                                    }
                                }}
                            >
                                Hire Me
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    fontWeight: 'bold',
                                    borderColor: colors.accent,
                                    color: colors.accent,
                                    paddingX: 4,
                                    paddingY: 1.5,
                                    borderRadius: '8px',
                                    '&:hover': {
                                        backgroundColor: 'rgba(59, 130, 246, 0.1)'
                                    }
                                }}
                            >
                                Resume
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutSection;