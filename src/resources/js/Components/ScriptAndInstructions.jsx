import {Box, Link} from '@mui/material';
import React from 'react';
import IntegrationCode from './IntegrationCode';

export default function ScriptAndInstructions({domain}) {
    return (
        <>
            <IntegrationCode domain={domain}/>

            <Box sx={{my: 3}}>
                <Link variant={'subtitle1'} href={'/contact'}>Need Help? Contact us</Link>
            </Box>
        </>
    );
}
