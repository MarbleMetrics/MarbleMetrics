import {Box} from '@mui/material';
import Container from './Container';
import Footer from "@/Components/Footer";
import React from "react";

export default function Authenticated({ auth, children, showDrawer=true }) {
    return (
        <Container showDrawer={showDrawer} showNavLinks={false} auth={auth}>
            <Box component="main" sx={{ flexGrow: 1 }}>
                <Box sx={{p: { xs: 1, md: 3 }, minHeight: '100%'}}>
                    <main>
                        {children}
                    </main>
                </Box>
                <Footer/>
            </Box>
        </Container>
    );
}
