import React from 'react';
import { Box, Typography } from '@mui/material'; // Note: Grid is no longer needed here

// Import the icons we'll need
import MovieIcon from '@mui/icons-material/Movie';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import CodeIcon from '@mui/icons-material/Code';

const servicesData = [
    {
        icon: <MovieIcon sx={{ fontSize: 40 }} />,
        title: 'Video Editing',
        description: 'Professional-grade video editing and post-production services to make your content stand out and engage your audience effectively.'
    },
    {
        icon: <PhoneIphoneIcon sx={{ fontSize: 40 }} />,
        title: 'Mobile App Development',
        description: 'Creating intuitive, high-performance native and cross-platform mobile applications for both iOS and Android devices.'
    },
    {
        icon: <DesktopWindowsIcon sx={{ fontSize: 40 }} />,
        title: 'Desktop App Development',
        description: 'Building robust and scalable desktop applications for Windows and macOS, tailored to meet your specific business needs.'
    },
    {
        icon: <CodeIcon sx={{ fontSize: 40 }} />,
        title: 'Programming Languages',
        description: 'Expertise in a wide range of modern programming languages, ensuring the right technology is used for every project.'
    }
];

const ServicesSection = () => {
    const colors = {
        background: '#111827',
        cardBg: '#1E293B',
        accent: '#8B5CF6',
        text: '#E5E7EB',
        textSecondary: '#9CA3AF'
    };

    return (
        <Box sx={{ bgcolor: colors.background, color: colors.text, padding: { xs: 4, md: 8 } }}>
            <Typography
                variant="h4"
                component="h2"
                sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 6 }}
            >
                SERVICES
            </Typography>

            {/* REPLACEMENT: We are now using a single Box with Flexbox to create a vertical list */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4, // This creates space between the cards
                    maxWidth: '900px', // We can set a max-width to prevent it from being TOO wide on huge screens
                    marginX: 'auto' // This centers the column
                }}
            >
                {servicesData.map((service, index) => (
                    // The card itself is now a direct child of the flex container
                    <Box
                        key={index}
                        sx={{
                            padding: 4,
                            bgcolor: colors.cardBg,
                            borderRadius: '16px', // Slightly more rounded corners
                            border: `2px solid ${colors.accent}`,
                            boxShadow: `0 0 25px 0 ${colors.accent}50`, // Made the glow a little softer
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' }, // Stack on extra small, row on small and up
                            alignItems: { xs: 'flex-start', sm: 'center' }, // Align items nicely
                            gap: 3,
                        }}
                    >
                        {/* Icon */}
                        <Box sx={{ color: colors.accent, flexShrink: 0 }}>
                            {service.icon}
                        </Box>

                        {/* Text Content */}
                        <Box>
                            <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                                {service.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: colors.textSecondary, marginTop: 0.5 }}>
                                {service.description}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default ServicesSection;