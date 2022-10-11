
import {useState, useContext, useEffect} from "react";
import { LinearProgress } from "@mui/material";

import Heading from "../../Heading";
import PubTransList from "./PubTransList";

import ActivePositionContext from "../../../Contexts/ActivePositionContext";
import GeoDataContext from "../../../Contexts/GeoDataContext";

import {k_nearest} from "../../../Utils/GeoUtils";

function PubTransInfo(props) {
    const { busAndTram } = useContext(GeoDataContext)
    const { activePosition } = useContext(ActivePositionContext)

    const [ nearestBusAndTram, setNearestBusAndTram ] = useState(null)
 
    useEffect(() => {
        if (activePosition !== null && busAndTram !== null ) {
            const nearest = k_nearest(busAndTram, activePosition, 6);
            setNearestBusAndTram(nearest.map( feature => {
                return feature.layer.feature
            }))
        }
    }, [activePosition, busAndTram]);

    return (
        <div>
            <Heading> PUBLIC TRANSPORT </Heading>
            { 
                nearestBusAndTram === null ? <LinearProgress /> : <PubTransList pubtrans={nearestBusAndTram} />
            }
        </div>
    );
}

export default PubTransInfo