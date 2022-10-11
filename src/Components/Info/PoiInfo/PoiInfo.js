

import {useState, useContext, useEffect} from "react";
import { LinearProgress } from "@mui/material";

import Heading from "../../Heading";
import PoiList from "./PoiList";

import ActivePositionContext from "../../../Contexts/ActivePositionContext";
import GeoDataContext from "../../../Contexts/GeoDataContext";

import {k_nearest} from "../../../Utils/GeoUtils";

function PoiInfo(props) {
    const { pois } = useContext(GeoDataContext)
    const { activePosition } = useContext(ActivePositionContext)

    const [ nearestPois, setNearestPois ] = useState(null)

    useEffect(() => {
        if (activePosition !== null && pois !== null ) {
            const nearest = k_nearest(pois, activePosition, 6);
            setNearestPois(nearest.map( feature => {
                return feature.layer.feature
            }))
        }
    }, [activePosition, pois]);

    return (
        <div>
            <Heading> PLACES OF INTEREST </Heading>
            { nearestPois === null ? <LinearProgress/> : 
            <PoiList pois={nearestPois} /> }
        </div>
    );
}

export default PoiInfo