import { useContext, useEffect, useState} from "react";
import { withStyles } from "@material-ui/core/styles";
import { LinearProgress } from "@mui/material";

import ActivePositionContext from "../../../Contexts/ActivePositionContext";
import GeoDataContext from "../../../Contexts/GeoDataContext";

import Heading from "../../Heading";
import GeoButtons from "../../Buttons/GeoButtons";

import styles from "../../../styles"
import {k_nearest} from "../../../Utils/GeoUtils"

function BikeStandInfo (props) {
    const {classes} = props

    const { bikeStands } = useContext(GeoDataContext)
    const { activePosition } = useContext(ActivePositionContext)

    const [ nearestBikeStandInfo, setNearestBikeStandInfo ] = useState(null)

    useEffect(() => {
        if (activePosition !== null && bikeStands !== null ) {
            const nearest = k_nearest(bikeStands, activePosition, 1);
            setNearestBikeStandInfo(nearest[0].layer.feature)       
        }
    }, [activePosition, bikeStands]);

    return (
        <div className={classes.margin_bottom}>
            <Heading>NEAREST BIKE STAND</Heading>
            { nearestBikeStandInfo === null ? <LinearProgress /> : 
            <GeoButtons latlong={nearestBikeStandInfo.geometry.coordinates}/> }
        </div>
    );
}

export default withStyles(styles)(BikeStandInfo);