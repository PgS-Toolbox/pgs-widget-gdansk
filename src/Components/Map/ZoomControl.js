import { useMap } from 'react-leaflet';

function ZoomControl({handleZoomChange}){
    const map = useMap();

    map.on('zoom', function() {
        if (parseInt(map.getZoom()) <= 12){
            handleZoomChange(false);
        }
        if (parseInt(map.getZoom()) > 12){
            handleZoomChange(true);
        }
    });

    return null;
}

export default ZoomControl