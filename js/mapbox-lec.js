"use strict";

/***
 * geocode is a method to search for coordinates based on a physical address and return
 * @param {string} search is the address to search for the geocoded coordinates
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the latitude and longitude as a two element array
 *
 * EXAMPLE:
 *
 *  geocode("San Antonio", API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}


/***
 * reverseGeocode is a method to search for a physical address based on inputted coordinates
 * @param {object} coordinates is an object with properties "lat" and "lng" for latitude and longitude
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the string of the closest matching location to the coordinates provided
 *
 * EXAMPLE:
 *
 *  reverseGeocode({lat: 32.77, lng: -96.79}, API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function(data) {
            return data.features[0].place_name;
        });
}



/**********************************************
 * 			CUSTOMIZING THE MAP
 *********************************************/
/**********************************************
 * 			SETTING UP KEYS.JS
 *********************************************/
// TODO TOGETHER: Open .gitignore and add keys.js. Add keys.js file and import to mapbox html file. Your api keys are stored in keys.js and are added to the .gitignore so they are protected


// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map
// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]
// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).
//TODO TOGETHER: Set map to san antonio area using the coordinates [-98.4916, 29.4252]


var mapOptions = {
    accessToken: mapboxToken,
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-98.4916, 29.4252], // starting position [lng, lat]
    zoom: 5 ,// starting zoom
    logoPosition: 'top-left',
    keyboard: true,
    doubleClickZoom: true
}

var map = new mapboxgl.Map(mapOptions);

map.on('load', function () {
    map.loadImage(
        'https://upload.wikimedia.org/wikipedia/commons/7/7c/201408_cat.png',
        function (error, image) {
            if (error) throw error;
            map.addImage('cat', image);
            map.addSource('point', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-86.3077, 32.3792]
                            }
                        }
                    ]
                }
            });
            map.addLayer({
                'id': 'points',
                'type': 'symbol',
                'source': 'point',
                'layout': {
                    'icon-image': 'cat',
                    'icon-size': 0.25
                }
            });
        }
    );
});

//TODO: Experiment with different map styles, zoom levels, and centers. You will need to reference the mapbox docs. (~10 minutes)


/**********************************************
 * 					MARKERS
 *********************************************/
// Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
// Markers are specific locations on a map
//Use the .setLngLat() and .addTo() methods to add marker to the map


// TODO TOGETHER: Add a marker to the map using the following coordinates [-98.4916, 29.4260]. This marker will mark the Alamo on our map.
var markerOptions = {
    color: '#ff0000',
    draggable: true
}
var alamoMarker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-98.4861, 29.4260])
    .addTo(map);


// TODO TOGETHER: Change the color of the marker


// TODO: Experiment with the color, and setting the LngLat
// TODO: Update the marker object to make the marker draggable. *Hint: reference the docs!


/**********************************************
 * 					POPUPS
 *********************************************/
// Popups are the info boxes that appear on a map and may describe a given location.
// Popup docs --> https://docs.mapbox.com/mapbox-gl-js/api/#popup


// TODO TOGETHER: Add a popup to the map over codeup. Set the html as a paragraph that says "Codeup Rocks!"

var popup = new mapboxgl.Popup()
    .setLngLat([-98.489615, 29.426827])
    .setHTML("<p>Codeup Rocks!</p>")
    .addTo(map);

// TODO TOGETHER: Comment out the popup we just added. Add a popup to the alamo marker.

var alamoPopupOptions = {
    maxWidth: 'none',
}

var alamoPopup = new mapboxgl.Popup(alamoPopupOptions)
    .setHTML("<p>Remember the Alamo</p>")
    .addTo(map);

    alamoMarker.setPopup(alamoPopup)

// TODO: Review the popup docs. What are some additional options we can pass to the popup?
// TODO: Try setting the text by using ".setText()" instead of ".setHTML()"



/**********************************************
 * 					Geocoder
 *********************************************/
// Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding


// TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup.
//https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setcenter

// geocode("600 Navarro St #350, San Antonio, TX 78205", mapboxToken).then(function(result){
//     console.log(result);
//     map.setCenter(result);
//     map.setZoom(20)
// })


//TODO: Using the geocode method above, add a marker at Codeup to the map

geocode("600 Navarro St #350, San Antonio, TX 78205", mapboxToken).then(function(result){
    console.log(result);
    map.setCenter(result);
    map.setZoom(15)

    new mapboxgl.Marker()
        .setLngLat(result)
        .addTo(map)
})



//TODO: Instead of setCenter try using map.jumpTo()
//TODO: Instead of setCenter try using map.flyTo()



// TODO TOGETHER: Reverse Geocoding: Using the reverse geocoding method, enter the coordinates {lng: -98.4861, lat: 29.4260} to get a physical address for the alamo

reverseGeocode({lat: 29.426827, lng: -98.489615}, mapboxToken).then(function(result){
    console.log(result);
})








// TODO: Reverse geocode coordinates of your choice using the reverse geocode method


