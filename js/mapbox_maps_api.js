var mapOptions = {
    accessToken: mapboxToken,
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-86.3077, 32.3792], // starting position [lng, lat]
    zoom: 15 // starting zoom
}

var map = new mapboxgl.Map(mapOptions);

var zoomFive = document.getElementById('five')
function fiveZoom(){
    mapOptions.zoom = 5;
    map = new mapboxgl.Map(mapOptions)
}
zoomFive.addEventListener('click', fiveZoom)

var zoomFifteen = document.getElementById('fifteen')
function fifteenZoom(){
    mapOptions.zoom = 15;
    map = new mapboxgl.Map(mapOptions)
}
zoomFifteen.addEventListener('click', fifteenZoom)

var zoomTwenty = document.getElementById('twenty')
function twentyZoom(){
    mapOptions.zoom = 20;
    map = new mapboxgl.Map(mapOptions)
}
zoomTwenty.addEventListener('click', twentyZoom)


var leksMarker = new mapboxgl.Marker()
    .setLngLat([-86.31443, 32.379996])
    .addTo(map);

var leksPopup = new mapboxgl.Popup()
    .setHTML("<p>Lek's Railroad Thai</p>")
    .addTo(map);

leksMarker.setPopup(leksPopup)
