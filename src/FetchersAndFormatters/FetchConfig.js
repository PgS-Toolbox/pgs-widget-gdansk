import { PoisFetchAndFormat, BikeStandFetchAndFormat, 
    CarParksFetchAndFormat, BusAndTramFetchAndFormat,
    CarParkDetailsFetchAndFormat, BusAndTramDetailsFetchAndFormat } from "./osmFetchAndFormat";

export function newCarParksFetchAndFormat(...args){

    return new CarParksFetchAndFormat(...args);
}
    
export function newCarParkDetailsFetchAndFormat(...args){
    return new CarParkDetailsFetchAndFormat(...args);
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