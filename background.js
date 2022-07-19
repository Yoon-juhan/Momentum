const images = [ "image/0.jpg", "image/1.jpg" ];

const chosenImage =  images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

bgimage.src = `${chosenImage}`;

document.body.appendChild(bgimage);