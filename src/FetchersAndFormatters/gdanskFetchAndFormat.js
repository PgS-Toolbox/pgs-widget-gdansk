import { FetchAndFormat } from "./dataFetchAndFormat";
import { projectionConverter } from "../Utils/GeoUtils";
import { getCurrentDay, timeNowPlusHrs } from "../Utils/TimeUtils"

export class CarParksFetchAndFormat extends FetchAndFormat {
    settings = [{
        "url": "https://ckan.multimediagdansk.pl/dataset/cb1e2708-aec1-4b21-9c8c-db2626ae31a6/resource/d361dff3-202b-402d-92a5-445d8ba6fd7f/download/parking-lots.json",
        "method": "GET",
        "timeout": 0,
    }];

    formatAndSetData (data, setter, aux_data) {
        data = data[0]
        var output_data = {
                type: "FeatureCollection",
                name: "parking_areas",
                features: []
        };

        
        output_data.features = data.parkingLots.map(car_park => (
            {
                type: "Feature",
                properties: {
                        "id": car_park.id,
                        "name": car_park.name,
                        "address": car_park.address,
                    },
                geometry: {
                    type: "Point",
                    coordinates: [car_park.location.longitude, car_park.location.latitude]
                }
            }
        ));

        setter(output_data) 
    };
}

export class CarParkDetailsFetchAndFormat extends FetchAndFormat {
    constructor( setter, aux_data ){
        super(setter, aux_data);
        this.settings = [{
            "url": "https://ckan2.multimediagdansk.pl/parkingLots",
            "method": "GET",
            "timeout": 0,
        }];
        
    }

    formatAndSetData (data, setter, aux_data) {
        var result = data[0].parkingLots.filter(obj => {
            return obj.parkingId === aux_data.feature.properties.id
          })

        aux_data.feature.properties.occupancy = result[0].availableSpots
        setter(aux_data.feature);
    };
}

export class BikeStandFetchAndFormat extends FetchAndFormat {
    settings = [
    {
        "url": "http://mapa.gdansk.gda.pl/ipg/layer/index?id=parking_rowerowy_maly_zadaszony",
        "method": "GET",
        "timeout": 0,
    },{
        "url": "http://mapa.gdansk.gda.pl/ipg/layer/index?id=parking_rowerowy_maly",
        "method": "GET",
        "timeout": 0,
    },{
        "url": "http://mapa.gdansk.gda.pl/ipg/layer/index?id=parking_rowerowy_duzy_zadaszony",
        "method": "GET",
        "timeout": 0,
    },{
        "url": "http://mapa.gdansk.gda.pl/ipg/layer/index?id=parking_rowerowy_duzy",
        "method": "GET",
        "timeout": 0,
    }];

    formatAndSetData (data, setter, aux_data) {
        var output_data = {
                type: "FeatureCollection",
                name: "bike_stands",
                features: []
        };

        data.forEach( d => {
            d.features.forEach ( feature => {
                output_data.features.push({
                    type: "Feature",
                    properties: {
                        id: feature.properties.dostep + feature.properties.ID
                    },
                    geometry: {
                        type:  feature.geometry.type,
                        coordinates: projectionConverter("EPSG:2177", "WGS84", [feature.geometry.coordinates[1], feature.geometry.coordinates[0]])
                    }  
                }
            )
        })});
        setter(output_data) 
    };
}


export class PoisFetchAndFormat extends FetchAndFormat {
    settings = [{
        "url": "http://mapa.gdansk.gda.pl/ipg/layer/index?id=kultura",
        "method": "GET",
        "timeout": 0,
    },
    {
        "url": "http://mapa.gdansk.gda.pl/ipg/layer/index?id=siedziby_um",
        "method": "GET",
        "timeout": 0,
    }];
    
    formatAndSetData (data, setter, aux_data) {
        var output_data = {
                type: "FeatureCollection",
                name: "pois",
                features: []
        };
        data.forEach( d => {
            d.features.forEach ( feature => {
                output_data.features.push({
                    type: "Feature",
                    properties: {
                        id: feature.properties.ID,
                        name: feature.properties.NAZWA
                    },
                    geometry: {
                        type:  feature.geometry.type,
                        coordinates: projectionConverter("EPSG:2177", "WGS84", [feature.geometry.coordinates[1], feature.geometry.coordinates[0]])
                    }  
                }
            )
        })});
        setter(output_data);
    };
}


export class BusAndTramFetchAndFormat extends FetchAndFormat {
    settings = [{
        "url": "https://ckan.multimediagdansk.pl/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/4c4025f0-01bf-41f7-a39f-d156d201b82b/download/stops.json",
        "method": "GET",
        "timeout": 0,
      }];

    formatAndSetData (data, setter, aux_data) { 
        var output_data = {
                type: "FeatureCollection",
                name: "bus_tram",
                features: data[0][getCurrentDay()].stops.map( feature => {
                    return {
                        type: "Feature",
                        properties: {
                            "id": feature.stopId,
                            "description": feature.stopDesc,
                            "name": feature.stopDesc + " " + feature.subName,
                        },
                        geometry: {
                            type: "Point",
                            coordinates: [ feature.stopLon, feature.stopLat ]
                        }  
                    }
                })
        };

        setter(output_data) 
    };
}

export class BusAndTramDetailsFetchAndFormat extends FetchAndFormat {
    constructor( setter, aux_data ){
        super(setter, aux_data);
        this.settings = [{
            "url": "https://ckan2.multimediagdansk.pl/departures?stopId=" + aux_data.feature.properties.id,
            "method": "GET",
            "timeout": 0,
        }];   
    }

    formatAndSetData(data, setter, aux_data) {
        data[0].departures = data[0].departures.slice(0, 6)
        aux_data.feature.properties.departures = data[0].departures.map(dep => {
            return {
                departure: new Date(new Date(dep.estimatedTime) - timeNowPlusHrs(1)).toTimeString().split(' ')[0],
                destination: dep.headsign,
                lineId: dep.routeId
            }
        })
        setter(aux_data.feature) 
    };
}