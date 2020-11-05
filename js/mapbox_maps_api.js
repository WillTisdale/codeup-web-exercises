'use strict';

var userZoom = document.getElementById('zoom');

userZoom.addEventListener('input', function(){
    map.setZoom(userZoom.value)
})

var mapOptions = {
    accessToken: mapboxToken,
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-86.243011, 32.366181], // starting position [lng, lat]
    zoom: 12
}

var map = new mapboxgl.Map(mapOptions);

// var leksMarker = new mapboxgl.Marker()
//
// var leksPopup = new mapboxgl.Popup()
//
// geocode('7020 Eastchase Pkwy, Montgomery, AL, 36117', mapboxToken).then(function(result){
//     console.log(result);
//     map.setCenter(result)
//     leksMarker.setLngLat(result)
//         .addTo(map);
//
//     leksPopup.setHTML("<p>Lek's Railroad Thai</p>")
//         .addTo(map);
//
//     leksMarker.setPopup(leksPopup)
// })

var restaurantArray = [{
    name: "Lek's Railroad Thai",
    address: "300 Water St B, Montgomery, AL, 36104",
    coordinates: [-86.314071, 32.380467],
    description: "This place has amazing Thai food! Ever since I have eaten here, I am always searching different cities for the best Pad Thai.",
    image: '<img src="img/leks.jpg" width="100%" height="120px">'
}, {
    name: "Joe's Again",
    address: "654 W Fairview Ave, Montgomery, AL, 36105",
    coordinates: [-86.318147, 32.351895],
    description: "This is, hands down, the best burger/wings spot in Montgomery! The TRIPLE BURGER is a must!",
    image: '<img src="img/joes.jpeg" width="100%" height="120px">'
}, {
    name: "Bonefish Grill",
    address: "7020 Eastchase Pkwy, Montgomery, AL, 36117",
    coordinates: [-86.167875, 32.359026],
    description: "I love this restaurant because when my wife and I first met, she worked here. We got good discounts and the food and drinks are great!",
    image: '<img src="img/bonefish.jpg" width="100%" height="120px">'
}]

var markerArr = [];

var colorArr = ['green', 'red', 'blue', 'purple']
var random = Math.floor(Math.random() * 4)


restaurantArray.forEach(function(restaurant){
    var colorArr = ['green', 'red', 'blue', 'purple', 'orange', 'pink', 'yellow']
    var random = Math.floor(Math.random() * 7)
    var popupOptions = {
        maxWidth: "200px"
    }
    var markerOptions = {
        color: colorArr[random]
    }
    geocode(restaurant.address, mapboxToken).then(function(result){
        var newMarker = new mapboxgl.Marker(markerOptions)
            .setLngLat(result)
            .addTo(map)
            .setPopup(
        new mapboxgl.Popup(popupOptions)
            .setHTML("<h4 style='text-decoration: underline'>" + restaurant.name + "</h4>" + restaurant.image + "<p style='color: blue'>" + restaurant.description + "</p>")
    )
        markerArr.push(newMarker)
    })
})

userZoom.addEventListener('input', function(){
    mapOptions.zoom = Number(userZoom.value);

})

document.getElementById("go").onclick  = function() {
    var address = document.getElementById("address").value;
    geocode(address, mapboxToken).then(function(result){
        map.setCenter(result)
    })
}

var hide = document.getElementById('hide')
var show = document.getElementById('show')

hide.addEventListener('click', function(){
    markerArr.forEach(function(marker){
        marker.remove()
    })
    hide.style.display = 'none'
    show.style.display = 'block'
})

show.addEventListener('click', function(){
    markerArr.forEach(function(marker){
        marker.addTo(map)
    })
    hide.style.display = 'block'
    show.style.display = 'none'
})

