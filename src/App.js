import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Map from "./Components/Map/Map";

import { ActivePositionProvider } from "./Contexts/ActivePositionContext";
import { GeoDataProvider } from "./Contexts/GeoDataContext";
import { ShowProvider } from './Contexts/ShowContext';

import Info from "./Components/Info/Info";

import Legend from './Components/Map/Legend';
import ActivePositionLabel from './Components/ActivePositionLabel';
import ButtonAppBar from "./Components/AppBar";

import styles from "./styles";
import Cronjobs from "./FetchersAndFormatters/Cronjobs"

function App(props) {
  const { classes } = props

  return (
    <ActivePositionProvider>
      <GeoDataProvider>
        <ShowProvider>
          <ButtonAppBar></ButtonAppBar>
          <Cronjobs></Cronjobs>
          <Grid container spacing={3} className={classes.root}>
            <Grid item xs={12}>
              <Map />
            </Grid>
            <Grid item xs={12}>
              <ActivePositionLabel></ActivePositionLabel>
            </Grid>
            <Legend></Legend>
          </Grid>
          <Info></Info>
          <Grid container spacing={3} className={classes.root}>
            <Grid item xs={12} lg={4}>
              <img
                className={classes.title_image}
                src="pgs_logo.png"
                alt="pgs_logo"
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <img
                className={classes.title_image}
                src="interreg_logo.jpg"
                alt="interreg_logo"
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <img
                className={classes.title_image}
                src="PICTEC-logo.png"
                alt="PICTEC-logo"
              />
            </Grid>
          </Grid>
        </ShowProvider>
      </GeoDataProvider>
    </ActivePositionProvider >
  );
}

export default withStyles(styles)(App);