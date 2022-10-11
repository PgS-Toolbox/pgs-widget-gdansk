import { React, useContext } from 'react';
import { GeoJSON } from 'react-leaflet';
import hash from 'object-hash';
import L from "leaflet";

import { renderToStaticMarkup } from 'react-dom/server';
import { PrettyPopup } from './PrettyPopup';

import GeoDataContext from "../../Contexts/GeoDataContext";
import { BusAndTramIcon } from "./Icons/Icons";

function BusAndTram () {
    const { busAndTram } = useContext(GeoDataContext)

    function point2layer (geoJsonPoint, latlng) {
        return L.marker(latlng, {icon: BusAndTramIcon});
    }

    const onEachFeature = (feature, layer) => {
        const popupContent = renderToStaticMarkup(
          <PrettyPopup popupContent={(
                <div>
                    <div> {feature.properties.name} </div>
                </div>
            )}/>
        );

        layer.bindPopup(popupContent);
    };

    return busAndTram === null ? null : (
        <div>
            <GeoJSON key={ hash(busAndTram) } data={ busAndTram } pointToLayer={point2layer} onEachFeature={onEachFeature}/>
        </div>
    )
}

export default BusAndTram