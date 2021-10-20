// ISS Tracker
// API from: https://wheretheiss.at/

// Tutorial from The Coding Train's Data and APIs YouTube course.
// Course link: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X

// links mymap var to html, sets starting view point for map
const mymap = L.map('map').setView([37.8715, -122.2730], 12);

// sets marker
const ChaYa = L.marker([37.8768111, -122.2714101]).addTo(mymap);
const KaffaEthiopianCuisine = L.marker([37.8535885, -122.2810185]).addTo(mymap);
const TimelessCoffee = L.marker([37.8568439, -122.2550952]).addTo(mymap);
const TheButchersSon = L.marker([37.8715692, -122.2738167]).addTo(mymap);

const loc1LatLon;
const loc2LatLon;
const loc3LatLon;
const loc4LatLon;

const btn1 = document.getElementById('ChaYa')
const btn2 = document.getElementById('KaffaEthiopianCuisine')
const btn3 = document.getElementById('TimelessCoffee')
const btn4 = document.getElementById('TheButchersSon')

btn1.addEventListener('click', function() {
    console.log('chaya button clicked')
    mymap.flyTo([37.8768111, -122.2714101], 15);
})

btn2.addEventListener('click', function() {
    console.log('KaffaEthiopianCuisine button clicked')
    mymap.flyTo([37.8768111, -122.2714101], 15);
})

btn3.addEventListener('click', function() {
    console.log('TimelessCoffee button clicked')
    mymap.flyTo([37.8768111, -122.2714101], 15);
})

btn4.addEventListener('click', function() {
    console.log('TheButchersSon button clicked')
    mymap.flyTo([37.8768111, -122.2714101], 15);
})
//.onclick()


// makes map with tags etc
const attribution =
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const tiles = L.tileLayer(tileUrl, { attribution })
tiles.addTo(mymap);

 
// comment out to stop from running
//setInterval(getISS, 1000);