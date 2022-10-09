Webcam.set({
    width:400,
    height:340,
    image_format:`png`,
    png_quality:120
});
camera=document.getElementById("camera");
Webcam.attach(`#camera`);

function take_snapshot(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML=`<img id="captured_image" src="`+data_url+`">`;

    });

}

console.log("ml5 version :",ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zblxU9CTc/',modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}