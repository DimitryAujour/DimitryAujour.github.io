import React, { useState } from 'react';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';

// Import the icons we'll need
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactSection = () => {
    // State to hold the form data
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevents the default browser page reload
        const formData = { name, email, message };
        console.log('Form data submitted:', formData);
        // In a real application, you would send this data to a backend or an email service
        // like EmailJS, Formspree, or your own server API.
        alert('Thank you for your message! I will get back to you soon.');
        // Clear the form
        setName('');
        setEmail('');
        setMessage('');
    };

    const colors = {
        primary: '#5D69F3',
        secondary: '#439CFB',
        text: '#FFFFFF',
        formBg: '#1A202C',
        inputBg: '#2D3748',
    };

    return (
        <Box
            sx={{
                padding: { xs: 4, md: 8 },
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                color: colors.text
            }}
        >
            <Box sx={{ maxWidth: '1200px', marginX: 'auto' }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 6 }}>
                    CONTACT
                </Typography>

                <Grid container spacing={6} alignItems="center">
                    {/* Left Column - Info */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                            Send me a Message
                        </Typography>
                        <Typography variant="body1" sx={{ marginY: 2, color: 'rgba(255, 255, 255, 0.8)' }}>
                            Have a project in mind or just want to say hi? Feel free to send me a message. I'll get back to you as soon as possible.
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 4 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <PhoneIcon />
                                <Typography>+1 (514) 123-4567</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <EmailIcon />
                                <Typography>dimitry.aujour@email.com</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <LocationOnIcon />
                                <Typography>Montreal, Quebec, Canada</Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Right Column - Form */}
                    <Grid item xs={12} md={6}>
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{
                                bgcolor: colors.formBg,
                                padding: { xs: 3, sm: 4 },
                                borderRadius: '16px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                            }}
                        >
                            <TextField
                                label="Name"
                                variant="filled"
                                fullWidth
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                InputLabelProps={{ sx: { color: colors.text } }}
                                sx={{ bgcolor: colors.inputBg, borderRadius: '8px' }}
                            />
                            <TextField
                                label="Email"
                                variant="filled"
                                type="email"
                                fullWidth
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                InputLabelProps={{ sx: { color: colors.text } }}
                                sx={{ bgcolor: colors.inputBg, borderRadius: '8px' }}
                            />
                            <TextField
                                label="Message"
                                variant="filled"
                                fullWidth
                                multiline
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                InputLabelProps={{ sx: { color: colors.text } }}
                                sx={{ bgcolor: colors.inputBg, borderRadius: '8px' }}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                sx={{
                                    fontWeight: 'bold',
                                    paddingY: 1.5,
                                    bgcolor: colors.primary,
                                    '&:hover': {
                                        bgcolor: colors.secondary
                                    }
                                }}
                            >
                                Send
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default ContactSection;