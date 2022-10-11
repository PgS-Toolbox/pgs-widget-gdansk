import leafletKnn from "leaflet-knn";
import L from "leaflet"

import proj4 from 'proj4'
proj4.defs("EPSG:2177","+proj=tmerc +lat_0=0 +lon_0=18 +k=0.999923 +x_0=6500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs");

export function k_nearest(geojson, point, k) {
    return leafletKnn(L.geoJSON(geojson)).nearestLayer(point, k);
}

export function projectionConverter( from, to, coordinates ) {
    return proj4(from, to, coordinates);
}