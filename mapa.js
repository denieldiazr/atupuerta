var map;
var mapcanvas;

let coordenadas = []

function initMap(){
    var location  = new google.maps.LatLng(34.921400, 57.954153);
    mapOptions = {
        zoom:12,
        center: location,
        mapTypeId:google.maps.MapTypeId.RoadMap
    }

    map = new google.maps.Map(document.getElementById("map"),mapOptions)
}