sound="";

statuse=" ";
object=[];

function preload(){
    
}

function setup(){
    canvas=createCanvas(450,350);
    canvas.position(450,220);
    video=createCapture(VIDEO)
    video.hide()

    object_detector=ml5.objectDetector("cocossd",modelLoaded);
}


function modelLoaded(){
    console.log("Model is working");
    statuse=true;
}

function start(){
    document.getElementById("Identify").innerHTML="Status:Detecting Objects"
    object_detector.detect(video,gotResults);
    }

function gotResults(error, results){
if (error){
    console.log(error);
}
else{
console.log(results);

object=results;
}
}


function draw(){
    image(video,0,0,450,350);

    if (statuse !=" "){

        for(i = 0; i < object.length; i++){
            document.getElementById("Identify").innerHTML="Status: Looking for Object";
            stroke("#ff0000");
            noFill();
            rect(object[i].x,object[i].y, object[i].width,object[i].height);
            fill("#ff0000");
            multiply=floor(object[i].confidence*100);
            text(object[i].label+" "+multiply+"%", object[i].x+15,object[i].y+14);
            console.log("yes");
}


    }
}