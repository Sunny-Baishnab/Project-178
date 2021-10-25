mapboxgl.accessToken = "pk.eyJ1Ijoic3VubnktYmFpc2huYWIiLCJhIjoiY2t2MmJjd3pkMDF2YjJybDdleXI5bmtkaCJ9.n-WUtJnxWmEFnbgenS5E9w"
let latitude = 22.7868542 , longitude = 88.3643296;

var map = new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    center:[longitude,latitude],
    zoom:4
});

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);

var img1 = document.querySelector("#amber")
//Create a Amber Palace , Jaipur Marker and add it to the map.
var matker1 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([75.8513,26.9855])
.addTo(map);

var img2 = document.querySelector("#gateway")
//Create a Gateway of India , Mumbai Marker and add it to the map.
var matker2 = new mapboxgl.Marker({
    element:img2
})
.setLngLat([72.8347,18.9220])
.addTo(map);

var img3 = document.querySelector("#gate")
//Create a India Gate , Delhi Marker and add it to the map.
var matker3 = new mapboxgl.Marker({
    element:img3
})
.setLngLat([77.2295,28.6129])
.addTo(map);

var img4 = document.querySelector("#lotus")
//Create a Lotus Temple , New Delhi Marker and add it to the map.
var matker4 = new mapboxgl.Marker({
    element:img4
})
.setLngLat([77.2588,28.5535])
.addTo(map);

var img5 = document.querySelector("#victoria")
//Create a Victoria Memorial , Kolkata Marker and add it to the map.
var matker5 = new mapboxgl.Marker({
    element:img5
})
.setLngLat([88.3426,22.5448])
.addTo(map);