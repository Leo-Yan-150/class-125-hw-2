noseX = 0;
noseY = 0;
difference = 0;
rwX = 0;
lwX = 0;
t = ":0"
r = 0;
g = 0;
b = 0;
function preload(){

}
function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(175,275);
    
    canvas=createCanvas(550,400);
    canvas.center();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function draw(){
    background(255);
    document.getElementById("text_side").innerHTML = "width and height of the text will be = " + difference + " px.";

    stroke(0);
    textSize(difference);
    fill(0);
    if(key === "q" && keyIsPressed){
        fill(0,255,0);
    }
    if(key === "w" && keyIsPressed){
        fill(0,0,255);
    }
    if(key === "e" && keyIsPressed){
        fill(255,255,0);
    }
    if(key === "r" && keyIsPressed){
        fill(0,255,255);
    }
    if(key==="t" && keyIsPressed){
        fill(255,0,0);
    }    
    if(key==="y" && keyIsPressed){
        fill(255,150,150);
    }
    if(key==="u" && keyIsPressed){
        fill(150,255,150);
    }
    if(key==="i" && keyIsPressed){
        fill(150,150,255);
    }
    if(key==="o" && keyIsPressed){
        fill(100);
    }
    if(key==="p" && keyIsPressed){
        fill(200);
    }
    if(key==="a" && keyIsPressed){
        t = "(~˘▾˘)~"
    }
    if(key==="s" && keyIsPressed){
        t = "( ͡° ͜ʖ ͡°)"
    }
    if(key==="d" && keyIsPressed){
        t = "(ʘᗩʘ')"
    }
    if(key==="f" && keyIsPressed){
        t = "〆(・∀・＠)"
    }
    if(key==="g" && keyIsPressed){
        t = "☜(⌒▽⌒)☞"
    }
    if(key==="h" && keyIsPressed){
        t = "ლ(´ڡ`ლ)"
    }
    if(key===";" && keyIsPressed){
        t = "(╯°□°)╯︵ ʞooqǝɔɐɟ"
    }
    if(key==="j" && keyIsPressed){
        t = "| (• ◡•)| (❍ᴥ❍ʋ)"
    }
    if(key==="k" && keyIsPressed){
        t = "༼ つ ◕_◕ ༽つ"
    }
    if(key==="l" && keyIsPressed){
        t = "ʕ•ᴥ•ʔ"
    }
    text(t, noseX, noseY);

}
function modelLoaded(){
    console.log("model is loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose X = " + noseX + " nose Y = " + noseY);
        
        lwX = results[0].pose.leftWrist.x;
        rwX = results[0].pose.rightWrist.x;
        difference = floor(lwX - rwX);
        console.log("left wrist x = " + lwX + " right wrist x = " + rwX + " difference = " + difference);
    }
}