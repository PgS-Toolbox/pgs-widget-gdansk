import $ from "jquery";

export function geocodeLocation(latlng, callback) {
    $.ajax({
            "url": "https://nominatim.openstreetmap.org/reverse?lat=" + latlng.lat + "&lon=" + latlng.lng + "&format=geojson",
            "method": "GET",
            "timeout": 0,
      }).done(function (response) {
            callback(response.features[0].properties.address)
      });
}

export function getCityBbox(cityname){
      var settings = {
            "url": "https://nominatim.openstreetmap.org/?q="+ cityname + "&format=json&limit=1&extratags=1&addressdetails=1",
            "method": "GET",
            "timeout": 0,
          };
          
      return $.ajax(settings)
}