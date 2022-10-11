import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const SearchField = () => {
  const provider = new OpenStreetMapProvider();
  const map = useMap();
  
  //This package is not 100% typescript
  //@ts-ignore
  const searchControl = new GeoSearchControl({
    provider,
    style: 'button',
    showMarker: false,
  });

  // Ingore typescript as we normally don't return anything from useEffect
  //@ts-ignore
  useEffect(() => {
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
    // We want to prevent endless rerender loop.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default SearchField;
