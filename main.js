function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 150, 100, 300, 280);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(80, 100, 50);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(80, 380, 50);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(500, 380, 50);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(500, 100, 50);
}

function take_snapshot(){
    save('ishaan.png');
}