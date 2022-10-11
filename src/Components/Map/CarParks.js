import { React, useContext, useEffect, useState} from 'react';
import { GeoJSON, Popup } from 'react-leaflet';
import hash from 'object-hash';
import L from "leaflet";

import GeoDataContext from "../../Contexts/GeoDataContext";
import { CarParkIcon } from "./Icons/Icons";

import { renderToStaticMarkup } from 'react-dom/server';
import { PrettyPopup } from './PrettyPopup';

function CarParks () {
    const { carParks } = useContext(GeoDataContext)

    function point2layer (geoJsonPoint, latlng) {
        return L.marker(latlng, {icon: CarParkIcon});
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

    return carParks === null ? null : (
        <div>
            <GeoJSON key={ hash(carParks) } data={ carParks } pointToLayer={point2layer} onEachFeature={onEachFeature}/>
        </div>
    )
}

export default CarParks