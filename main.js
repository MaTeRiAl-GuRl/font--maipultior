leftWristX = 0;
rightWristX = 0;
noseX = 0;
noseY = 0;
difference = 0;
function setup(){
    canvas = createCanvas(550,500);
    canvas.position(560,150);
    video = createCapture(VIDEO);
    video.size(550,500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('black');
    textSize(difference);
    fill("white");
    text("Prisha", noseX, noseY);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results){
   if(results.length > 0)
   {
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    difference = floor(leftWristX - rightWristX);
   }
}