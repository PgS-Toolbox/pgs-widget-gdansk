# PICTEC's multimodal widget

This is a Multimodal open source widget 

## Data Sources 


![Overview](public/Graph.png)

## 
Widget uses Geojson format with particular set of properties to pass information around the system.

### Parkings location

Stores data on parking's location in the city.Ma

#### CarParksFetchAndFormat
<pre>
{
    type: "<b>FeatureCollection</b>",
    name: "<b>parking_areas</b>",
    features: [ {
        type: "<b>Feature</b>",
        properties: {
            "id": <b><i>Number</b></i>,
            "name": <b><i>String</b></i>,
            "address": <b><i>String</b></i>,
        },
    geometry: {
        type: "<b>Point</b>",
        coordinates: [<b><i>Number</b></i>, <b><i>Number</b></i>]
        }
    }, ... ] 
}
</pre>

### Parking's live occupancy
#### CarParkDetailsFetchAndFormat
<pre>
{
    type: "<b>FeatureCollection</b>",
    name: "<b>parking_areas</b>",
    features: [ {
        type: "<b>Feature</b>",
        properties: {
            "id": <b><i>Number</b></i>,
            "name": <b><i>String</b></i>,
            "address": <b><i>String</b></i>,
            "occupancy":  <b><i>Number</b></i>
        },
    geometry: {
        type: "<b>Point</b>",
        coordinates: [<b><i>Number</b></i>, <b><i>Number</b></i>]
        }
    }, ... ]
}
</pre>

### Bike stands location
#### BikeStandFetchAndFormat
<pre>
{
    type: "<b>FeatureCollection</b>",
    name: "<b>bike_stands</b>",
    features: [ { 
        type: "<b>Feature</b>",
        properties: {
            id: <b><i>String</b></i>,
        },
        geometry: {
            type: "<b>Point</b>",
            coordinates: [<b><i>Number</b></i>, <b><i>Number</b></i>]
        }
    }, ...  ]
}
</pre>

### POIs Location
#### PoisFetchAndFormat

<pre>
{
    type: "<b>FeatureCollection</b>",
    name: "<b>pois</b>",
    features: [ {                    
        type: "<b>Feature</b>",
        properties: {
            id: <b><i>feature.properties.ID</b></i>,
            name: <b><i>feature.properties.NAZWA</b></i>
        },
        geometry: {
            type:  <b><i>geojson_type</b></i>,
            coordinates: [<b><i>Number</b></i>, <b><i>Number</b></i>]
        }  
    }, ... ]
}
</pre>

### Platforms location
#### BusAndTramFetchAndFormat
<pre>
{
    type: "<b>FeatureCollection</b>",
    name: "<b>bus_tram</b>",
    features: [ {
        type: "<b>Feature</b>",
        properties: {
            id: <b><i>String</b></i>,
            name: <b><i>String</b></i>,
            description: <b><i>String</b></i>,
            },
        geometry: {
            type: "<b>Point</b>",
            coordinates: [ <b><i>Number</b></i>, <b><i>Number</b></i> ]
        } 
    }, ... ]
}
</pre>


### Live departures
#### BusAndTramDetailsFetchAndFormat

<pre>
{
    type: "<b>FeatureCollection</b>",
    name: "<b>bus_tram</b>",
    features: [ {
        type: "<b>Feature</b>",
        properties: {
            id: <b><i>String</b></i>,
            name: <b><i>String</b></i>,
            description: <b><i>String</b></i>,
            departures: [ {
                departure: <b><i>Date</b></i>,
                destination: <b><i>String</b></i>,
                lineId: <b><i>String</b></i>,
            }, ... ] 
        },
        geometry: {
            type: "<b>Point</b>",
            coordinates: [ <b><i>Number</b></i>, <b><i>Number</b></i> ]
        }  
    }, ... ]
}
</pre>

## Available Scripts
