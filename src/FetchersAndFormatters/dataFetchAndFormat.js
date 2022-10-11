import $ from "jquery";

export class FetchAndFormat {
    constructor (setter, aux_data) {
        this.setter = setter;
        this.aux_data = aux_data
    }

    arrayOfPromises = []
    
    fetchData = function(callback, setter, aux_data) {
        if (typeof this.settings !== 'undefined' && this.settings.length > 0) {
            this.arrayOfPromises = this.settings.map( setting => {
                return $.ajax(setting)
            })

            Promise.all(this.arrayOfPromises).then(function(arrayOfResults) {
                callback(arrayOfResults, setter, aux_data)
            });
        } 
        else {
            callback(null, setter, aux_data)
        }
    };

    getData = function () {
        this.fetchData(this.formatAndSetData, this.setter, this.aux_data);
    };

    formatAndSetData (data, setter, aux_data) {
        setter(data);
    };
};
