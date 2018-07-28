const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Guides collection and inserts the guide portions below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/explore"
);

const guideSeed = [
  {
    location: "orlando",
    type: "Entertainment",
    name: "Orlando City SC",
    address: "655 W Church St, Orlando, FL 32805",
    description: "Local top flight soccer team with strong local following. On game days the road in front of the stadium is closed off and food trucks are brought in creating a block party type of atmosphere.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Orlando_city_soccer_stadium.jpg",
    link: "https://www.orlandocitysc.com/"
  },
  {
    location: "orlando",
    type: "Dining/Bars",
    name: "Plant Street Market",
    address: "426 W Plant St, Winter Garden, FL 34787",
    description: "Local community market in Winter Garden featuring hand-craft beer, natural, organic food appealing to all ages. Some of our personal recommendations for dining are Mac’d Out and Jōdo Sushi. If you are interested on enjoying a craft beer Crooked Can Brewing is one of the best craft breweries in the Orlando Area.",
    image: "http://www.trbimg.com/img-559704bb/turbine/os-plant-street-market-20150703",
    link: "https://crookedcan.com/plant-st-market/"
  },
  {
    location: "orlando",
    type: "Dining/Bars",
    name: "Sanaa",
    address: "3701 Osceola Pkwy, Kissimmee, FL 34747",
    description: "Restaurant located at Disney's Animal Kingdom Lodge(AKL) resort. This is a great alternative for those visiting Disney that want to get away from the crowds a bit. Its location near the savana at AKL contributes to its wonderful atmosphere. There are many tables with excellent views of all the animals out on the savana, so be sure to ask for a table near the windows.",
    image: "https://c1.staticflickr.com/5/4107/5028939850_16a4181b72_b.jpg",
    link: "https://disneyworld.disney.go.com/dining/animal-kingdom-villas-kidani/sanaa/"
  },
  {
    location: "orlando",
    type: "Entertainment",
    name: "I-Drive NASCAR",
    address: "5228 Vanguard St, Orlando, FL 32819",
    description: "Indoor kart racing located near Universal and just off Orlando's famous International Drive. The karts go quite fast so it's great fun for families with older kids that enjoy a thrill.",
    image: "https://ssl.tzoo-img.com/images/tzoo.97255.0.654010.I-DriveNASCARIndoorKartRacing-ClientProvided.jpg?width=656&v=2",
    link: "http://www.idrivenascar.com/"
  },
  {
    location: "orlando",
    type: "Dining/Bars",
    name: "Broken Cauldron Taproom",
    address: "1012 W Church St, Orlando, FL 32805",
    description: "Located about two blocks from Orlando City Stadium, this brewery is a hot spot for locals on game day. On a normal day however, it becomes a more intimate evironment with usually only a handful of patrons at any given time. Broken Cauldron is also home to two craft breweries that serve up some of our favorite craft beer in the Orlando area.",
    image: "https://i.ytimg.com/vi/NgCB2cnW120/maxresdefault.jpg",
    link: "http://brokencauldrontaproom.com/"
  },
  {
    location: "orlando",
    type: "Dining/Bars",
    name: "Mikado Sushi",
    address: "6417 Raleigh St, Orlando, FL 32835",
    description: "Small sushi restaurant in the MetroWest area near Universal Studios. Quality food at a reasonable price.",
    image: "http://4.bp.blogspot.com/-qCioOc8wyCI/UCbIHWR291I/AAAAAAAABHM/eMqRVXUA5rg/s1600/DSC08052.JPG",
    link: "https://www.mikadosushigrill.com/"
  },
  {
    location: "the golden circle",
    type: "Adventure/Nature",
    name: "Kvernufoss",
    address: "Skógar, Iceland",
    description: "Smaller waterfall located near one of Iceland's most famous falls, Skógafoss. While smaller, this one is much more secluded and there's a very good chance you could have the whole place to yourself. Parking can be found at the end of the road for the Skógar museum behind the last building.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Kvernufoss.JPG",
    link: "https://guidetoiceland.is/connect-with-locals/regina/the-beautiful-kvernufoss-waterfall-the-less-visited-neighbour-of-skogafoss-waterfall-in-south-iceland"
  },
  {
    location: "the golden circle",
    type: "Adventure/Nature",
    name: "Gljúfrafoss",
    address: "Þórsmerkurvegur, Iceland",
    description: "Another waterfall located near one of Iceland's more popular waterfalls, this alternative to its tourist packed neighbor, is in a cave. It can be found about a half mile down the raod from Seljalandsfoss.",
    image: "https://c1.staticflickr.com/8/7418/27570250811_c1e50258aa_b.jpg",
    link: "https://www.atlasobscura.com/places/gljufrafoss"
  },
  {
    location: "the golden circle",
    type: "Adventure/Nature",
    name: "Vik Church and Cemetery",
    address: "Vik, Iceland",
    description: "The small town of Vik is home to many popular spots such has the abandonded airplane wreck and black sand beach. However the best view of the town can be seen from just outside the cemetery of the church.",
    image: "https://ssl.c.photoshelter.com/img-get2/I0000aGd276FisUA/fit=1000x750/Vik-church-beach-Iceland-1975.jpg",
    link: "https://www.tripadvisor.com/ShowUserReviews-g189978-d7906747-r359831495-Vik_Church-Vik_South_Region.html"
  },
  {
    location: "the golden circle",
    type: "Adventure/Nature",
    name: "Hrunalaug",
    address: "Solheimavegur, Fludir, Iceland",
    description: "This small natural hot spring can be found just off the main road. It's a somewhat popular spot for locals and it features some truely fantastic scenery all around the hot spring.",
    image: "https://pbs.twimg.com/media/ClpBcEuWkAAhDYF.jpg",
    link: "https://www.tripadvisor.com/Attraction_Review-g608871-d12713366-Reviews-Hrunalaug-Fludir_South_Region.html"
  },
  {
    location: "the golden circle",
    type: "Adventure/Nature",
    name: "Sólheimasandur Plane Crash",
    address: "Near Vik, Iceland",
    description: "While, popular with tourists, this plane wreck is still a great place to visit. The wreck is surrounded by miles of nothing but black sand creating a very surreal environment. If you come late in the day you can avoid some of the crowds, but be ready to make the 2.5 mile walk back to the parking lot in the dark.",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/05/ee/ec/37/crashed-dc-3-plane.jpg",
    link: "https://expertvagabond.com/airplane-crash-wreckage-iceland/"
  },
  {
    location: "the golden circle",
    type: "Hotels",
    name: "Vatnsholt Farm",
    address: "Vatnsholt 2, 801 South, Iceland",
    description: "Small hotel located on a local farm. Fresh breakfast included and a beautiful location.",
    image: "https://cdn.discover-the-world.co.uk/media/zoo/images/iceland-accommodation-vatnsholt-northern-lights_3380eeb5589cf33ddf437201fb964a13.jpg",
    link: "http://www.hotelvatnsholt.is/en/"
  }
];

db.Guide
  .remove({})
  .then(() => db.Guide.collection.insertMany(guideSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
