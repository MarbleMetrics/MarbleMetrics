import {Inertia} from '@inertiajs/inertia';
import {Box, Button, Grid, Typography} from '@mui/material';
import ScriptAndInstructions from '@/Components/ScriptAndInstructions';
import Authenticated from '@/Layouts/Authenticated';
import {Head} from "@inertiajs/inertia-react";

export default function DomainScript(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >

            <Head title="Domain Script" />

            <Grid container>
                <Grid item lg={8}>
                    <Typography variant="h4" sx={{py: 1}}><b>Add Script</b></Typography>
                </Grid>
            </Grid>

            <Grid container justifyContent="center">
                <Grid item sm={10} md={10} lg={6}>
                    <Box style={{ backgroundColor: '#fff' }} sx={{ p: 4 }}>
                        <Typography sx={{ py: 2 }} variant="h5"><b>Add this script to your website ({props.domain.domain_name})</b></Typography>
                        <ScriptAndInstructions domain={props.domain.domain_name}/>
                        <Button variant="contained" onClick={() => { Inertia.visit('/dashboard?domain=' + props.domain.domain_name); }} fullWidth size='large'>Start Collecting Data</Button>
                    </Box>
                </Grid>
            </Grid>

        </Authenticated>
    );
}
