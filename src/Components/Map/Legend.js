import { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Checkbox } from '@material-ui/core';
import { DirectionsBike, Commute, TheaterComedy } from '@mui/icons-material'

import ShowContext from "../../Contexts/ShowContext";
import { LocalParkingIcon } from "./Icons/Icons";

import styles from "../../styles"

function Legend(props) {
    const { classes } = props

    const { showCarParks, setShowCarParks, showBikeStands, setShowBikeStands,
        showBusAndTram, setShowBusAndTram, showPois, setShowPois, isMobile } = useContext(ShowContext);

    return (
        <Grid container
            spacing={6}
            alignItems="center"
            justifyContent="center"
            className={classes.legend}>

            <Grid item sm="auto" className={classes.center_vertically}>
                <LocalParkingIcon className={classes.legend_icon} />
                &nbsp;&nbsp;
                {isMobile ? null : <span className={classes.legend_h3_style}> Car park </span>}
                <Checkbox checked={showCarParks} onClick={() => setShowCarParks(!showCarParks)} className={classes.legend_checkbox} />
            </Grid>
            <Grid item sm="auto" className={classes.center_vertically}>
                <DirectionsBike className={classes.legend_icon} />
                {isMobile ? null : <span className={classes.legend_h3_style}> Bike stand </span>}
                <Checkbox checked={showBikeStands} onClick={() => setShowBikeStands(!showBikeStands)} className={classes.legend_checkbox} />
            </Grid>
            <Grid item sm="auto" className={classes.center_vertically}>
                <Commute className={classes.legend_icon} />
                {isMobile ? null : <span className={classes.legend_h3_style}> Bus or tram stop </span>}
                <Checkbox checked={showBusAndTram} onClick={() => setShowBusAndTram(!showBusAndTram)} className={classes.legend_checkbox} />
            </Grid>
            <Grid item sm="auto" className={classes.center_vertically}>
                <TheaterComedy className={classes.legend_icon} />
                {isMobile ? null : <span className={classes.legend_h3_style}> Point of interest </span>}
                <Checkbox checked={showPois} onClick={() => setShowPois(!showPois)} className={classes.legend_checkbox} />
            </Grid>
        </Grid>);
};

export default withStyles(styles)(Legend);