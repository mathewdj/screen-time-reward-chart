import './RewardChart.css'
import React from "react";
import { Typography, Grid, Switch, Paper, Container, CssBaseline } from '@material-ui/core';


export default class RewardChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            jobs: [
                "Clean underneath LEGO table",
                "Unload dishwasher",
                "Load dishwasher",
                "Clean room",
                "Play outside",
                "Tidy outside toys",
                "Clean room",
                "Make bed",
            ]
        };

    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <nav className="navbar navbar-expand">
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Screentime Reward Chart</Typography>
                </nav>
                <Container maxWidth="md">
                    <Paper className="Paper">
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Typography variant="h5">Total screentime</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="h5">0 minutes</Typography>
                            </Grid>
                        </Grid>
                        {
                            this.state.jobs.map(job =>
                                <Grid container spacing={2}>
                                    <Grid item xs={8}>
                                        <Typography variant="h6">{job}</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Switch />
                                    </Grid>
                                </Grid>
                            )
                        }
                    </Paper>
                </Container>
            </React.Fragment >

        )
    }

}