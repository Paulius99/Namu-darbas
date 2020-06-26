var images = [
  "https://raw.githubusercontent.com/zigmantasvcs/resources/master/images/offers/bycycle.jpg",
  "https://raw.githubusercontent.com/zigmantasvcs/resources/master/images/offers/chess.jpg",
  "https://raw.githubusercontent.com/zigmantasvcs/resources/master/images/offers/jump.jpg",
  "https://raw.githubusercontent.com/zigmantasvcs/resources/master/images/offers/kiting.jpg",
  "https://raw.githubusercontent.com/zigmantasvcs/resources/master/images/offers/lion.jpg",
  "https://raw.githubusercontent.com/zigmantasvcs/resources/master/images/offers/onwater.jpg",
  "https://raw.githubusercontent.com/zigmantasvcs/resources/master/images/offers/para.jpg",
  "https://raw.githubusercontent.com/zigmantasvcs/resources/master/images/offers/photographer.jpg",
  "https://raw.githubusercontent.com/zigmantasvcs/resources/master/images/offers/pieva.jpg",
  "https://raw.githubusercontent.com/zigmantasvcs/resources/master/images/offers/supynes.jpg"
];

for (i = 0; i < images.length; i++) {
  var x = document.createElement("IMG");
  x.setAttribute("src", images[i]);
  document.querySelector('.container').appendChild(x);
}