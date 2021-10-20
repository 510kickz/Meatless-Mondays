const ChaYa = [37.8768111, -122.2714101]
const KaffaEthiopianCuisine = [37.8535885, -122.2810185]
const TimelessCoffee = [37.8568439, -122.2550952]
const TheButchersSon = [37.8715692, -122.2738167]

const chayaLink = () => {
    const str = "Cha Ya! website link";
    const link = str.link("https://www.chaya-berkeley.com/");
    return link;
}
const kecLink = () => {
    const str = "Kaffa Ethiopian Cuisine website link";
    const link = str.link("https://www.yelp.com/biz/kaffa-ethiopian-cuisine-berkeley-2");
    return link;
}
const timeLink = () => {
    const str = "Timeless Coffee & Bakery website link";
    const link = str.link("https://timelesscoffee.com/");
    return link;
}
const butcherLink = () => {
    const str = "The Butchers Son website link";
    const link = str.link("https://www.thebutchersveganson.com/");
    return link;
}

window.open

const mymap = L.map('mapid').setView([51.505, -0.09], 16);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYnJhY2VzcHJvdWwiLCJhIjoiY2t1eXRybzloNzZzbjJ2bnozOGVyaTV4ZiJ9.KTx-y48WHzqkLZ6_dl0xcw'
}).addTo(mymap);

function startMap() {
    mymap.setView(ChaYa, 12.5)

    L.marker(ChaYa).addTo(mymap).bindPopup(`${chayaLink()}`)
    L.marker(KaffaEthiopianCuisine).addTo(mymap).bindPopup(`${kecLink()}`)
    L.marker(TimelessCoffee).addTo(mymap).bindPopup(`${timeLink()}`)
    L.marker(TheButchersSon).addTo(mymap).bindPopup(`${butcherLink()}`)
}

startMap()


const btn1 = document.getElementById('ChaYa')
const btn2 = document.getElementById('KaffaEthiopianCuisine')
const btn3 = document.getElementById('TimelessCoffee')
const btn4 = document.getElementById('TheButchersSon')

btn1.addEventListener('click', function(e) {
    console.log('chaya button clicked')
    e.preventDefault();
    mymap.flyTo(ChaYa, 16);
})

btn2.addEventListener('click', function(e) {
    console.log('KaffaEthiopianCuisine button clicked')
    e.preventDefault();
    mymap.flyTo(KaffaEthiopianCuisine, 16);
})

btn3.addEventListener('click', function(e) {
    console.log('TimelessCoffee button clicked')
    e.preventDefault();
    mymap.flyTo(TimelessCoffee, 16);
})

btn4.addEventListener('click', function(e) {
    console.log('TheButchersSon button clicked')
    e.preventDefault();
    mymap.flyTo(TheButchersSon, 16);
})



