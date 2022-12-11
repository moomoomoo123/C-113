function preload() {
}

function setup() {
    canvas = createCanvas(700, 500);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 125, 50, 450, 400);
    circle(70, 70, 85);
    circle(630, 430, 85);
    circle(70, 430, 85);
    circle(630, 70, 85);
    rect(112.5, 60, 475, 20);
    rect(112.5, 420, 475, 20);
    c = color(77, 145, 255);
    fill(c);
}

function take_snapshot() {
    save('student_name.png');
}



