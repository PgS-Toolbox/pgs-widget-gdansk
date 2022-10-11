import { FetchAndFormat } from "./dataFetchAndFormat";

export class PgsCarParksFetchAndFormat extends FetchAndFormat {
    settings = [{
        "url": "http://" + process.env.REACT_APP_HUB_ADDRESS + "/public/v1/parking_area/",
        "method": "GET",
        "timeout": 0,
    }];
}

export class PgsCarParkDetailsFetchAndFormat extends FetchAndFormat {
    constructor( setter, aux_data ){
        super(setter, aux_data);
        this.settings = [{
            "url": "http://" + process.env.REACT_APP_HUB_ADDRESS + "/public/v1/parking_area_statistics/" + aux_data.id + "/",
            "method": "GET",
            "timeout": 0,
        }];
    }

    formatAndSetData (data, setter, aux_data) {
        setter({
            name: "TODO: " + aux_data.id,
            payment: "TODO: Cash, Card",
            occupancy: data.current_parking_count + "/" + aux_data.properties.capacity_estimate,
            distance: "TODO distance"
        });
    };
}
