import {useContext, useEffect} from "react"

import {newPoisFetchAndFormat, newCarParksFetchAndFormat, 
    newBikeStandFetchAndFormat, newBusAndTramFetchAndFormat } from "./FetchConfig";
        
import GeoDataContext from "../Contexts/GeoDataContext";

export default function Cronjobs() {
    
    const { setBikeStands, setCarParks, setPois, setBusAndTram } = useContext(GeoDataContext);

    useEffect(( bikeStandFetcher = new newBikeStandFetchAndFormat(setBikeStands),
                carParksFetcher = new newCarParksFetchAndFormat(setCarParks),
                poisFetcher = newPoisFetchAndFormat(setPois),
                busAndTramFetcher = new newBusAndTramFetchAndFormat(setBusAndTram) ) => {
        bikeStandFetcher.getData();
        setTimeout(1000);
        carParksFetcher.getData();
        setTimeout(1000);
        poisFetcher.getData();
        setTimeout(1000);
        busAndTramFetcher.getData()
        setInterval( () => {
            bikeStandFetcher.getData();
            setTimeout(1000);
            carParksFetcher.getData();
            setTimeout(1000);
            poisFetcher.getData();
            setTimeout(1000);
            busAndTramFetcher.getData()
        }, process.env.REACT_APP_FETCH_INTERVAL )
    }, []);  // eslint-disable-line react-hooks/exhaustive-deps
}
