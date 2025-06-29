import React, { useState } from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia, Modal, Button, Chip, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // --- NEW --- For the close button
import LaunchIcon from '@mui/icons-material/Launch';
import peakImage from '../assets/images/peakimage.png';
import peakVideo from '../assets/videos/peak-portfolio.mp4';

// --- DATA SETUP ---
// In a real portfolio, you would have multiple projects.
const portfolioData = [
    {
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce site with a custom CMS, built with the MERN stack.',
        image:peakImage, // IMPORTANT: Replace with your image path
        video: peakVideo,  // IMPORTANT: Replace with your video path
        fullDescription: 'This project involved building a complete e-commerce solution from the ground up. It features a secure payment gateway with Stripe, user authentication, an admin dashboard for managing products, and a responsive design for a seamless mobile shopping experience.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
        projectUrl: 'https://fitlogai.netlify.app/',
    },
    {
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce site with a custom CMS, built with the MERN stack.',
        image: '../assets/images/peakimage.png', // IMPORTANT: Replace with your image path
        video: '../assets/videos/peak-portfolio.mp4',  // IMPORTANT: Replace with your video path
        fullDescription: 'This project involved building a complete e-commerce solution from the ground up. It features a secure payment gateway with Stripe, user authentication, an admin dashboard for managing products, and a responsive design for a seamless mobile shopping experience.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
        projectUrl: 'https://fitlogai.netlify.app/',
    },
    {
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce site with a custom CMS, built with the MERN stack.',
        image: '../assets/images/peakimage.png', // IMPORTANT: Replace with your image path
        video: '../assets/videos/peak-portfolio.mp4',  // IMPORTANT: Replace with your video path
        fullDescription: 'This project involved building a complete e-commerce solution from the ground up. It features a secure payment gateway with Stripe, user authentication, an admin dashboard for managing products, and a responsive design for a seamless mobile shopping experience.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
        projectUrl: 'https://fitlogai.netlify.app/',
    },
    {
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce site with a custom CMS, built with the MERN stack.',
        image: '../assets/images/peakimage.png', // IMPORTANT: Replace with your image path
        video: '../assets/videos/peak-portfolio.mp4',  // IMPORTANT: Replace with your video path
        fullDescription: 'This project involved building a complete e-commerce solution from the ground up. It features a secure payment gateway with Stripe, user authentication, an admin dashboard for managing products, and a responsive design for a seamless mobile shopping experience.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
        projectUrl: 'https://fitlogai.netlify.app/',
    },
    // Add more projects here...
];
interface  Project {
    title: string;
    description: string;
    image: string;
    video: string;
    fullDescription: string;
    technologies: string[];
    projectUrl: string;
}

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', md: '60%' },
    maxWidth: '800px',
    bgcolor: '#1E293B', // cardBg color
    border: '2px solid #8B5CF6', // accent color
    boxShadow: 24,
    p: 4,
    borderRadius: '12px',
    color: '#E5E7EB', // text color
    maxHeight: '90vh',
    overflowY: 'auto'
};

const PortfolioSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    // --- NEW --- State for the modal
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // --- NEW --- Handlers for opening and closing the modal
    const handleOpen = (project: Project) => {
        setSelectedProject(project);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setSelectedProject(null);
    };

    const colors = {
        background: '#111827',
        cardBg: '#1E293B',
        accent: '#8B5CF6',
        text: '#E5E7EB',
        textSecondary: '#9CA3AF'
    };

    return (
        <Box sx={{ bgcolor: colors.background, color: colors.text, padding: { xs: 4, md: 8 } }}>
            <Box sx={{ maxWidth: '1200px', marginX: 'auto' }}>
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 6 }}
                >
                    PORTFOLIO
                </Typography>

                <Grid container spacing={4}>
                    {portfolioData.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                onClick={() => handleOpen(project)} // --- NEW --- Added onClick handler
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                sx={{
                                    height: '100%',
                                    bgcolor: colors.cardBg,
                                    color: colors.text,
                                    borderRadius: '12px',
                                    border: `2px solid transparent`,
                                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
                                    cursor: 'pointer',
                                    ...(hoveredIndex === index && {
                                        transform: 'translateY(-5px)',
                                        borderColor: colors.accent,
                                        boxShadow: `0 0 20px 0 ${colors.accent}60`,
                                    }),
                                }}
                            >
                                <Box sx={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                                    <CardMedia component="video" src={project.video} autoPlay loop muted sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: hoveredIndex === index ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }} />
                                    <CardMedia component="img" image={project.image} alt={project.title} sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: hoveredIndex === index ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }} />
                                </Box>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color={colors.textSecondary}>
                                        {project.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* --- NEW --- The Modal Component */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="project-detail-title"
                aria-describedby="project-detail-description"
            >
                <Box sx={modalStyle}>
                    {selectedProject && (
                        <>
                            <IconButton
                                aria-label="close"
                                onClick={handleClose}
                                sx={{
                                    position: 'absolute',
                                    right: 8,
                                    top: 8,
                                    color: colors.textSecondary,
                                }}
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography id="project-detail-title" variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
                                {selectedProject.title}
                            </Typography>
                            <Typography id="project-detail-description" sx={{ mt: 2, color: colors.textSecondary }}>
                                {selectedProject.fullDescription}
                            </Typography>
                            <Box sx={{ mt: 3, mb: 3 }}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                    Technologies Used
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                    {selectedProject.technologies.map((tech) => (
                                        <Chip key={tech} label={tech} sx={{ bgcolor: colors.accent, color: colors.text, fontWeight: 'bold' }} />
                                    ))}
                                </Box>
                            </Box>
                            <Button
                                variant="contained"
                                href={selectedProject.projectUrl}
                                target="_blank" // Opens the link in a new tab
                                endIcon={<LaunchIcon />}
                                sx={{
                                    fontWeight: 'bold',
                                    bgcolor: colors.accent,
                                    '&:hover': {
                                        bgcolor: '#7C43F5' // A slightly lighter purple on hover
                                    }
                                }}
                            >
                                View Project
                            </Button>
                        </>
                    )}
                </Box>
            </Modal>
        </Box>
    );
};

export default PortfolioSection;