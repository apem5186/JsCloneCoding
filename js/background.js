const images = ["1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

console.log(chosenImage);

const bgimage = document.createElement("img");

bgimage.src = `img/${chosenImage}`;

console.log(bgimage);

document.body.appendChild(bgimage);
