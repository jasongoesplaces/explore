const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Guides collection and inserts the guide portions below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/explore"
);

const guideSeed = [
  {
    location: "Orlando",
    type: "Restaurant",
    name: "Mikado Sushi",
    address: "6417 Raleigh St, Orlando, FL 32835",
    description: "Small sushi restaurant in the MetroWest area near Universal Studios. Quality food at a reasonable price.",
    image: "http://4.bp.blogspot.com/-qCioOc8wyCI/UCbIHWR291I/AAAAAAAABHM/eMqRVXUA5rg/s1600/DSC08052.JPG",
    link: "http://www.mikadosushiorlando.com/"
  },
  {
    location: "Orlando",
    type: "Entertainment",
    name: "Orlando City SC",
    address: "655 W Church St, Orlando, FL 32805",
    description: "Local top flight soccer team with strong local following. On game days the road in front of the stadium is closed off and food trucks are brought in creating a block party type of atmosphere.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Orlando_city_soccer_stadium.jpg",
    link: "https://www.orlandocitysc.com/"
  },
  {
    location: "Orlando",
    type: "Entertainment",
    name: "I-Drive NASCAR",
    address: "5228 Vanguard St, Orlando, FL 32819",
    description: "Indoor kart racing located near Universal and just off Orlando's famous International Drive. The karts go quite fast so it's great fun for families with older kids that enjoy a thrill.",
    image: "https://ssl.tzoo-img.com/images/tzoo.97255.0.654010.I-DriveNASCARIndoorKartRacing-ClientProvided.jpg?width=656&v=2",
    link: "http://www.idrivenascar.com/"
  },
  {
    location: "Orlando",
    type: "Restaurant",
    name: "Sanaa",
    address: "3701 Osceola Pkwy, Kissimmee, FL 34747",
    description: "Restaurant located at Disney's Animal Kingdom Lodge(AKL) resort. This is a great alternative for those visiting Disney that want to get away from the crowds a bit. Its location near the savana at AKL contributes to its wonderful atmosphere. There are many tables with excellent views of all the animals out on the savana, so be sure to ask for a table near the windows.",
    image: "https://c1.staticflickr.com/5/4107/5028939850_16a4181b72_b.jpg",
    link: "https://disneyworld.disney.go.com/dining/animal-kingdom-villas-kidani/sanaa/"
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
