function setup() {
    video = createCapture(VIDEO);
    video.size(800, 500);

    canvas = createCanvas(550, 650);
    canvas.position(990,120);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#E8C277');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}
