import { React, useContext} from 'react';
import { GeoJSON } from 'react-leaflet';
import hash from 'object-hash';
import L from "leaflet";

import GeoDataContext from "../../Contexts/GeoDataContext";
import {BikeStandIcon} from "./Icons/Icons"

function BikeStands () {
    const { bikeStands } = useContext(GeoDataContext)

    function onEachFeature(feature, layer) {
        
    }
    
    function point2layer (geoJsonPoint, latlng) {
        return L.marker(latlng, {icon: BikeStandIcon});
    }

    return bikeStands === null ? null : (
        <div>
            {/* <GeoJSON key={ hash(bikeStands) } data={ bikeStands } /> */}
            <GeoJSON key={ hash(bikeStands) } data={ bikeStands } pointToLayer={point2layer} onEachFeature={onEachFeature}/>

        </div>
    )
}

export default BikeStands