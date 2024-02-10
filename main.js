function preload() {
}
function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = '';
}

function draw(){
    image(video, 0, 0, 640, 480);
    rect(100, 30, 500, 55)
    rect(35, 30, 55, 400)
    rect(100, 400, 500, 55)
    rect(550, 30, 55, 400)
    circle(60, 60, 100);
    fill(100,0,100)
    circle(575, 60, 100);
    fill(100,0,100)
    circle(60, 425, 100);
    fill(100,0,100)
    circle(575, 425, 100);
    fill(100,0,100)
    
}

function take_snapshot(){
    save('student_name.png')
}

