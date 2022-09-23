var img;
function preload() {
    img = loadImage('https://openprocessing-usercontent.s3.amazonaws.com/files/user29958/visual1637050/hbc4063c82f012e71b5653cc5d2e24884/Screen%20Shot%202022-09-03%20at%207.17.06%20PM.png');
}
function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    image(img, 0, 0, width, height);
}