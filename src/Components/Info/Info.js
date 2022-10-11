import { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import PoiInfo from "./PoiInfo/PoiInfo";
import PubTransInfo from "./PubTransInfo/PubTransInfo";
import CarParkInfo from "./ParkingInfo/CarParkInfo"
import BikeStandInfo from "./ParkingInfo/BikeStandInfo"

import ShowContext from "../../Contexts/ShowContext";
import styles from "../../styles";

function Info(props) {
    const { classes } = props

    const { showCarParks, showBikeStands, showBusAndTram, showPois } = useContext(ShowContext);

    return (
        <Grid container 
            justifyContent="center"
            spacing={3} 
            className={classes.root}>
            { showCarParks || showBikeStands ?
            <Grid item md={12} lg={3}>
                <Grid container>
                    <Grid item sm={12}>
                        <BikeStandInfo />
                    </Grid>
                    <Grid item sm={12}>
                        <CarParkInfo />
                    </Grid>
                </Grid>
            </Grid> : null }
            { showBusAndTram ? 
            <Grid item sm={12} lg={4}>
                <PubTransInfo>
                </PubTransInfo>
            </Grid> : null }
            { showPois ? 
            <Grid item sm={12} lg={5}>
                <PoiInfo>
                </PoiInfo>
            </Grid> : null }
        </Grid>
    );
}

export default withStyles(styles)(Info);