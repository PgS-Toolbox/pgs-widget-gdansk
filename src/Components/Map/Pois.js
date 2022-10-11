import { React, useContext} from 'react';
import { GeoJSON } from 'react-leaflet';
import hash from 'object-hash';
import L from "leaflet";

import { renderToStaticMarkup } from 'react-dom/server';
import { PrettyPopup } from './PrettyPopup';

import GeoDataContext from "../../Contexts/GeoDataContext";
import { PoisIcon } from "./Icons/Icons";

function Pois () {
    const { pois } = useContext(GeoDataContext)

    function point2layer (geoJsonPoint, latlng) {
        return L.marker(latlng, {icon: PoisIcon});
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

    return pois === null ? null : (
        <div>
            <GeoJSON key={ hash(pois) } data={ pois } pointToLayer={point2layer} onEachFeature={onEachFeature}/>
        </div>
    )
}

export default Pois