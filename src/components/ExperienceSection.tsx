import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

// STEP 1: Import the logos you downloaded
import html from '../assets/logos/html5.svg';
import css3Logo from '../assets/logos/css.svg';
import reactLogo from '../assets/logos/react.svg';
import html5Logo from '../assets/logos/html5.svg';
import net from '../assets/logos/icons8-c-sharp-logo.svg';
import nextjsLogo from  '../assets/logos/nextdotjs.svg';
import javascriptLogo from '../assets/logos/javascript.svg';
import nodejsLogo from '../assets/logos/nodejs.svg';
import postgresLogo from '../assets/logos/postgresql.svg';
import graphqlLogo from '../assets/logos/graphql.svg';
import MuiLogo from '../assets/logos/mui.svg';
import GithubLogo from '../assets/logos/github.svg';
import TypescriptLogo from '../assets/logos/typescript.svg';
import FirebaseLogo from '../assets/logos/firebase.svg';
import ReactNativeLogo from '../assets/logos/icons8-react-native-96.svg'
import CypressLogo from '../assets/logos/cypress.svg';


// STEP 2: Create an array of your skills
const skillsData = [
    { name: 'CSS3', logo: css3Logo },
    { name: 'React.JS', logo: reactLogo },
    { name: 'HTML', logo: html5Logo },
    { name: 'C#', logo: net },
    { name: 'Javascript', logo: javascriptLogo },
    { name: 'Node.JS', logo: nodejsLogo },
    { name: 'PostgresSql', logo: postgresLogo },
    { name: 'Graphql', logo: graphqlLogo },
    { name: 'Mui', logo: MuiLogo },
    {name:'NextJs',logo: nextjsLogo  },
    {name:'Github', logo: GithubLogo },
    {name:'Typescript', logo: TypescriptLogo },
    {name:'Firebase', logo: FirebaseLogo },
    {name:'ReactNative',logo: ReactNativeLogo},
    {name:'Cypress', logo: CypressLogo },


];

const ExperienceSection = () => {
    const colors = {
        background: '#111827',
        text: '#E5E7EB',
    };

    return (
        <Box sx={{ bgcolor: colors.background, color: colors.text, padding: { xs: 4, md: 8 } }}>
            <Box sx={{ maxWidth: '1100px', marginX: 'auto' }}>
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 6 }}
                >
                    EXPERIENCE
                </Typography>

                <Grid container spacing={{ xs: 4, md: 5 }} justifyContent="center">
                    {skillsData.map((skill) => (
                        // This Grid item is responsive. It shows 2 items per row on mobile,
                        // 3 on small screens, and 4 on medium screens and up.
                        <Grid item xs={6} sm={4} md={3} key={skill.name}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: 1.5,
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.1)'
                                    }
                                }}
                            >
                                <img
                                    src={skill.logo}
                                    alt={`${skill.name} logo`}
                                    style={{ height: '64px', width: 'auto' }} // Adjust height as needed
                                />
                                <Typography variant="body1" sx={{ fontWeight: '600' }}>
                                    {skill.name}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default ExperienceSection;