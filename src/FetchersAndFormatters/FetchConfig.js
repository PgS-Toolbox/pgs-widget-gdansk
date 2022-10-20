import { PoisFetchAndFormat, BikeStandFetchAndFormat, 
    CarParksFetchAndFormat, BusAndTramFetchAndFormat,
    CarParkDetailsFetchAndFormat, BusAndTramDetailsFetchAndFormat } from "./gdanskFetchAndFormat";

import { PgsCarParksFetchAndFormat, PgsCarParkDetailsFetchAndFormat } from "./pgsFetchAndFormat"

export function newCarParksFetchAndFormat(...args){
    console.log(process.env.REACT_APP_HUB_ADDRESS === "")
    if (process.env.REACT_APP_HUB_ADDRESS === "") {
        return new CarParksFetchAndFormat(...args);
    };
    return new PgsCarParksFetchAndFormat(...args);
}
    
export function newCarParkDetailsFetchAndFormat(...args){
    if (process.env.REACT_APP_HUB_ADDRESS === "") {
        return new CarParkDetailsFetchAndFormat(...args);
    };
    return new PgsCarParkDetailsFetchAndFormat(...args);
}

export function newPoisFetchAndFormat(...args){
    return new PoisFetchAndFormat(...args);
}

export function newBikeStandFetchAndFormat(...args){
    return new BikeStandFetchAndFormat(...args);
}

export function newBusAndTramFetchAndFormat(...args){
    return new BusAndTramFetchAndFormat(...args);
}

export function newBusAndTramDetailsFetchAndFormat(...args){
    return new BusAndTramDetailsFetchAndFormat(...args);
}