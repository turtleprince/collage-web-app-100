var SpeechRecognition = window.webkitSpeechRecognition;

var my_recognition = new SpeechRecognition();

function Start() {
    document.getElementById("message_box").innerHTML = "";
    my_recognition.start();

}

my_recognition.onresult = function run(event) {
    console.log(event);
    my_content = event.results[0][0].transcript;
    document.getElementById("message_box").innerHTML = my_content;
    if(my_content == "take my selfie"){
        console.log("taking selfie ------");
        Speak();
    }
  

}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
      
   });
   
   my_camera = document.getElementById("camera");


function Save_selfie(){
    mylink = document.getElementById("link");
    my_img = document.getElementById("selfie_img").src;    
    mylink.href = my_img;
    mylink.click();
    
}



function take_selfie(){
    Webcam.snap(function(selfie){
    document.getElementById("output").innerHTML = "<img id='selfie_img' src='"+selfie+ "'>";  
    });
}




function Speak(){
    var synth = window.speechSynthesis;
    speak_data =  "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(my_camera);
    
    setTimeout(function(){
        take_selfie();
        Save_selfie();
    },5000 );
    
    
}



