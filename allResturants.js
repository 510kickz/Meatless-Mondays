// TODO
/*
- add websites
*/

// creates map, defines map var and sets up map UI on frontend
const mymap = L.map('mapid').setView([37.8698077,-122.2684016], 16);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYnJhY2VzcHJvdWwiLCJhIjoiY2t1eXRybzloNzZzbjJ2bnozOGVyaTV4ZiJ9.KTx-y48WHzqkLZ6_dl0xcw'
}).addTo(mymap);

const objects = {
    loxBagel: {
        name: "Lox Stock and Bagel",
        location: [37.8693422, -122.2694741],
        website: ""
    }, 
     sliver: {
        name: "Sliver",
        location: [37.8698077,-122.2684016],
        website: ""
    } ,
     toss: {
        name: "Toss",
        location: [37.8680017,-122.2682188],
        website: ""
    } ,
     chipotle: {
        name: "Chipotle",
        location: [37.8688733,-122.2674866],
        website: ""
    } ,
     happy: {
        name: "Happy Hooligans",
        location: [37.8708121,-122.2705408],
        website: ""
    } ,
     tamonTea: {
        name: "Tamon Tea",
        location: [37.8703703,-122.2693723],
        website: ""
    } ,
     topDog: {
        name: "Top Dog",
        location: [37.8704245,-122.2663231],
        website: ""
    } ,
     falafel: {
        name: "Flying Falafel",
        location: [37.8707348,-122.2684359],
        website: ""
    } ,
     ikes: {
        name: "Ike's",
        location: [37.869839,-122.268348],
        website: ""
    } ,
     plearn: {
        name: "Little Plearn",
        location: [37.8679447,-122.2675212],
        website: ""
    } ,
     bsCafe: {
        name: "Bagel Street Cafe",
        location: [37.8703218,-122.2665169],
        website: ""
    } ,
     starbucks: {
        name: "Starbucks",
        location: [37.868791,-122.268212],
        website: ""
    } ,
     peets: {
        name: "Peet's",
        location: [37.868454,-122.26761],
        website: ""
    } ,
     ezStop: {
        name: "EZ Stop",
        location: [37.8687773,-122.2675344],
        website: ""
    } ,
     mcD: {
        name: "McDonalds",
        location: [37.872278,-122.268577],
        website: ""
    } ,
     imm: {
        name: "Imm",
        location: [37.8718993,-122.2691148],
        website: ""
    } ,
     TheButchersSon: {
        name: "The Butchers Son",
        location: [37.8715692, -122.2738167],
        website: ""
    } ,
     arinells: {
        name: "Arinell's",
        location: [37.8709751,-122.2675055],
        website: ""
    } ,
    sushiSecrets: {
        name: "Sushi Secrets",
        location: [37.8708158,-122.2685409],
        website: ""
    } ,
    crave: {
        name: "Crave Subs",
        location: [37.8705457,-122.2684214],
        website: ""
    } ,
    barbarian: {
        name: "Barbarian",
        location: [37.8717299,-122.2686779],
        website: ""
    },
    bhs: {
        name: "Berkeley High School",
        location: [37.8677468,-122.2714278]
    }
}
// objects containing data for each restruant for location of each restruant

const popupLink = (restruantName, siteLink) => {
    const str = `${restruantName} website.`;
    const link = str.link(siteLink);
    return link;
}
const locc = popupLink(objects.loxBagel.name, objects.loxBagel.website);

// creates marker and popup for each marker
function startMap() {
    mymap.setView(objects.loxBagel.location, 16)
    L.marker(objects.bhs.location).addTo(mymap).bindPopup(`Berkeley High School`).openPopup()
    L.marker(objects.loxBagel.location).addTo(mymap).bindPopup(`${popupLink(objects.loxBagel.name, objects.loxBagel.website)}`)
    L.marker(objects.sliver.location).addTo(mymap).bindPopup(`${popupLink(objects.sliver.name, objects.sliver.website)}`)
    L.marker(objects.toss.location).addTo(mymap).bindPopup(`${popupLink(objects.toss.name, objects.toss.website)}`)
    L.marker(objects.chipotle.location).addTo(mymap).bindPopup(`${popupLink(objects.chipotle.name, objects.chipotle.website)}`)
    L.marker(objects.happy.location).addTo(mymap).bindPopup(`${popupLink(objects.happy.name, objects.happy.website)}`)
    L.marker(objects.tamonTea.location).addTo(mymap).bindPopup(`${popupLink(objects.tamonTea.name, objects.tamonTea.website)}`)
    L.marker(objects.topDog.location).addTo(mymap).bindPopup(`${popupLink(objects.topDog.name, objects.topDog.website)}`)
    L.marker(objects.falafel.location).addTo(mymap).bindPopup(`${popupLink(objects.falafel.name, objects.falafel.website)}`)
    L.marker(objects.ikes.location).addTo(mymap).bindPopup(`${popupLink(objects.ikes.name, objects.ikes.website)}`)
    L.marker(objects.plearn.location).addTo(mymap).bindPopup(`${popupLink(objects.plearn.name, objects.plearn.website)}`)
    L.marker(objects.bsCafe.location).addTo(mymap).bindPopup(`${popupLink(objects.bsCafe.name, objects.bsCafe.website)}`)
    L.marker(objects.starbucks.location).addTo(mymap).bindPopup(`${popupLink(objects.starbucks.name, objects.starbucks.website)}`)
    L.marker(objects.peets.location).addTo(mymap).bindPopup(`${popupLink(objects.peets.name, objects.peets.website)}`)
    L.marker(objects.ezStop.location).addTo(mymap).bindPopup(`${popupLink(objects.ezStop.name, objects.ezStop.website)}`)
    L.marker(objects.mcD.location).addTo(mymap).bindPopup(`${popupLink(objects.mcD.name, objects.mcD.website)}`)
    L.marker(objects.imm.location).addTo(mymap).bindPopup(`${popupLink(objects.imm.name, objects.imm.website)}`)
    L.marker(objects.TheButchersSon.location).addTo(mymap).bindPopup(`${popupLink(objects.TheButchersSon.name, objects.TheButchersSon.website)}`)
    L.marker(objects.arinells.location).addTo(mymap).bindPopup(`${popupLink(objects.arinells.name, objects.arinells.website)}`)
    L.marker(objects.sushiSecrets.location).addTo(mymap).bindPopup(`${popupLink(objects.sushiSecrets.name, objects.sushiSecrets.website)}`)
    L.marker(objects.crave.location).addTo(mymap).bindPopup(`${popupLink(objects.crave.name, objects.crave.website)}`)
    L.marker(objects.barbarian.location).addTo(mymap).bindPopup(`${popupLink(objects.barbarian.name, objects.barbarian.website)}`)
}

startMap()

// function for flying to each spot for requested location
const listiner = (btnID, locationn, StoreName, website) => {
    btn = document.getElementById(btnID);
    let storeName = btnID
    btn.addEventListener('click', function(e) {
        console.log('Button clicked');
        e.preventDefault();
        L.marker(locationn).addTo(mymap).bindPopup(`${popupLink(StoreName, website)}`).openPopup();
        mymap.flyTo(locationn, 18)
    });
}

// list for all markers, makes popup appear on click
listiner('loxBagel', objects.loxBagel.location, objects.loxBagel.name, objects.loxBagel.website);
listiner('sliver', objects.sliver.location, objects.sliver.name, objects.sliver.website);
listiner('toss', objects.toss.location, objects.toss.name, objects.toss.website);
listiner('chipotle', objects.chipotle.location, objects.chipotle.name, objects.chipotle.website);
listiner('happy', objects.happy.location, objects.happy.name, objects.happy.website);
listiner('tamonTea', objects.tamonTea.location, objects.tamonTea.name, objects.tamonTea.website);
listiner('topDog', objects.topDog.location, objects.topDog.name, objects.topDog.website);
listiner('falafel', objects.falafel.location, objects.falafel.name, objects.falafel.website);
listiner('ikes', objects.ikes.location, objects.ikes.name, objects.ikes.website);
listiner('plearn', objects.plearn.location, objects.plearn.name, objects.plearn.website);
listiner('bsCafe', objects.bsCafe.location, objects.bsCafe.name, objects.bsCafe.website);
listiner('starbucks', objects.starbucks.location, objects.starbucks.name, objects.starbucks.website);
listiner('peets', objects.peets.location, objects.peets.name, objects.peets.website);
listiner('ezStop', objects.ezStop.location, objects.ezStop.name, objects.ezStop.website);
listiner('mcD', objects.mcD.location, objects.mcD.name, objects.mcD.website);
listiner('imm', objects.imm.location, objects.imm.name, objects.imm.website);
listiner('TheButchersSon', objects.TheButchersSon.location, objects.TheButchersSon.name, objects.TheButchersSon.website);
listiner('arinells', objects.arinells.location, objects.arinells.name, objects.arinells.website);
listiner('sushiSecrets', objects.sushiSecrets.location, objects.sushiSecrets.name, objects.sushiSecrets.website);
listiner('ezcraveStop', objects.crave.location, objects.crave.name, objects.crave.website);
listiner('barbarian', objects.barbarian.location, objects.barbarian.name, objects.barbarian.website);


// function for making link for popup





/*
// funcs to make links in popups
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
*/

/*


// buttons for going requested restruant
const btn1 = document.getElementById('loxBagel')
const btn2 = document.getElementById('KaffaEthiopianCuisine')
const btn3 = document.getElementById('TimelessCoffee')
const btn4 = document.getElementById('TheButchersSon')

btn1.addEventListener('click', function(e) {
    console.log('chaya button clicked')
    e.preventDefault();
    mymap.flyTo([37.8705457,-122.2684214], 16);
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
*/


/*
const locc = popupLink(objects.loxBagel.name, objects.loxBagel.website);
popupLink(objects.sliver.name, objects.sliver.website);
popupLink(objects.toss.name, objects.toss.website);
popupLink(objects.chipotle.name, objects.chipotle.website);
popupLink(objects.happy.name, objects.happy.website);
popupLink(objects.tamonTea.name, objects.tamonTea.website);
popupLink(objects.topDog.name, objects.topDog.website);
popupLink(objects.falafel.name, objects.falafel.website);
popupLink(objects.ikes.name, objects.ikes.website);
popupLink(objects.plearn.name, objects.plearn.website);
popupLink(objects.bsCafe.name, objects.bsCafe.website);
popupLink(objects.starbucks.name, objects.starbucks.website);
popupLink(objects.peets.name, objects.peets.website);
popupLink(objects.ezStop.name, objects.ezStop.website);
popupLink(objects.mcD.name, objects.mcD.website);
popupLink(objects.imm.name, objects.imm.website);
popupLink(objects.TheButchersSon.name, objects.TheButchersSon.website);
popupLink(objects.arinells.name, objects.arinells.website);
popupLink(objects.sushiSecrets.name, objects.sushiSecrets.website);
popupLink(objects.crave.name, objects.crave.website);
popupLink(objects.barbarian.name, objects.barbarian.website);
*/

// objects for each restruant that stores location, name and website

