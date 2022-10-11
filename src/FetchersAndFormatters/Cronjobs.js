import {useContext, useEffect} from "react"

import { PoisFetchAndFormat, BikeStandFetchAndFormat, 
         CarParksFetchAndFormat, BusAndTramFetchAndFormat } from "./osmFetchAndFormat";

import GeoDataContext from "../Contexts/GeoDataContext";

export default function Cronjobs() {
    
    const { setBikeStands, setCarParks, setPois, setBusAndTram } = useContext(GeoDataContext);

    useEffect(( bikeStandFetcher = new BikeStandFetchAndFormat(setBikeStands),
                carParksFetcher = new CarParksFetchAndFormat(setCarParks),
                poisFetcher = new PoisFetchAndFormat(setPois),
                busAndTramFetcher = new BusAndTramFetchAndFormat(setBusAndTram) ) => {
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
