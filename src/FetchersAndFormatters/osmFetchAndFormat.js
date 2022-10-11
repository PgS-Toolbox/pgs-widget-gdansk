import { FetchAndFormat } from "./dataFetchAndFormat";

class OsmFetchAndFormat extends FetchAndFormat {
    keep_containing( data, keywords) {
        data =  data[0].elements
        for (const kwrd of keywords) {
            data =  data.filter(elem => elem.hasOwnProperty(kwrd))
        }
        return data
    };

    get_formatted_bbox() {
        return "54.2749189, 18.4294955, 54.4664485, 18.9502437"
    };
}

export class CarParksFetchAndFormat extends OsmFetchAndFormat {
    settings = [{
        "url": "http://www.overpass-api.de/api/interpreter",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
            "data": "[out:json][timeout:25];" + 
                    "(way[\"amenity\"=\"parking\"][\"parking\"=\"multi-storey\"](" + super.get_formatted_bbox() + ");" +
                    "relation[\"amenity\"=\"parking\"][\"parking\"=\"multi-storey\"](" + super.get_formatted_bbox() + ");)" +
                    ";out;>;out skel qt;"
    }}];

    formatAndSetData (data, setter, aux_data) {
        data = super.keep_containing(data, ["lat", "lon"])
        var output_data = {
            type: "FeatureCollection",
            name: "bus_tram",
            features: data.map( feature => {
                return {
                    type: "Feature",
                    properties: {
                        "id": feature.id,
                        "name": "?",
                        "address": "?",
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [ feature.lon, feature.lat ]
                    }  
                }
            })
        };
        setter(output_data);
    }
}

export class CarParkDetailsFetchAndFormat extends OsmFetchAndFormat {
    formatAndSetData (data, setter, aux_data) {
        aux_data.feature.properties.occupancy = "?"
        setter(aux_data.feature);
    };
}

export class BikeStandFetchAndFormat extends OsmFetchAndFormat {
    settings = [{
        "url": "http://www.overpass-api.de/api/interpreter",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
            "data": "[out:json][timeout:25];" +
                    "(node[\"amenity\"=\"bicycle_parking\"](" + super.get_formatted_bbox() + ");" + 
                    "way[\"amenity\"=\"bicycle_parking\"](" + super.get_formatted_bbox() + ");" + 
                    "relation[\"amenity\"=\"bicycle_parking\"](" + super.get_formatted_bbox() + "););out;>;"
    }}];

    formatAndSetData (data, setter, aux_data) {
        data = super.keep_containing(data, ["tags", "lat", "lon"])
        var output_data = {
            type: "FeatureCollection",
            name: "bike_stands",
            features: []
        };

        data.forEach( d => {
            output_data.features.push({
                type: "Feature",
                properties: {
                    id: d.id
                },
                geometry: {
                    type:  "Point",
                    coordinates: [d.lon, d.lat]
            }})});
        setter(output_data);
    }
}

export class PoisFetchAndFormat extends OsmFetchAndFormat {
    settings = [{
        "url": "http://www.overpass-api.de/api/interpreter",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
            "data": "[out:json][timeout:25];" + 
                    "(node[\"amenity\"=\"hospital\"](" + super.get_formatted_bbox() + ");" + 
                    "node[\"amenity\"=\"cinema\"](" + super.get_formatted_bbox() + ");" + 
                    "node[\"amenity\"=\"planetarium\"](" + super.get_formatted_bbox() + ");" +
                    "node[\"amenity\"=\"theatre\"](" + super.get_formatted_bbox() + ");" + 
                    "node[\"amenity\"=\"courthouse\"](" + super.get_formatted_bbox() + ");" + 
                    "node[\"amenity\"=\"police\"](" + super.get_formatted_bbox() + ");" + 
                    "node[\"amenity\"=\"toilets\"](" + super.get_formatted_bbox() + ");" +
                    "node[\"amenity\"=\"dive_centre\"](" + super.get_formatted_bbox() + ");" + 
                    "node[\"amenity\"=\"grave_yard\"](" + super.get_formatted_bbox() + ");" + 
                    "node[\"amenity\"=\"library\"](" + super.get_formatted_bbox() + ");" + 
                    "node[\"amenity\"=\"atm\"](" + super.get_formatted_bbox() + "););" + 
                    "out;>;out skel qt;"
    }}];

    formatAndSetData (data, setter, aux_data) {
        data = super.keep_containing(data, ["tags", "lat", "lon"])

        var output_data = {
                type: "FeatureCollection",
                name: "pois",
                features: []
        };
        data.forEach( d => {
            output_data.features.push({
                type: "Feature",
                properties: {
                    id: d.id,
                    name: d.tags.amenity
                },
                geometry: {
                    type:  "Point",
                    coordinates: [d.lon, d.lat]
                }
            })
        });

        setter(output_data);
    }
}

export class BusAndTramFetchAndFormat extends OsmFetchAndFormat {
    settings = [{
        "url": "http://www.overpass-api.de/api/interpreter",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
            "data": "[out:json][timeout:25];" + 
                "(node[\"public_transport\"=\"platform\"](" + super.get_formatted_bbox() + ");" +
                "way[\"public_transport\"=\"platform\"](" + super.get_formatted_bbox() + "););out;>;out skel qt;"
    }}];

    formatAndSetData (data, setter, aux_data) {
        data = super.keep_containing(data, ["tags", "lat", "lon"])

        var output_data = {
            type: "FeatureCollection",
            name: "bus_tram",
            features: data.map( feature => {
                return {
                    type: "Feature",
                    properties: {
                        "id": feature.id,
                        "description": feature.tags.name,
                        "name": feature.tags.name,
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [ feature.lon, feature.lat ]
                    }  
                }
            })
        };
        setter(output_data);
    };
}

export class BusAndTramDetailsFetchAndFormat extends FetchAndFormat {}
