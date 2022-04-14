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
    my_img = document.getElementById("selfie_img3").src;    
    mylink.href = my_img;
    mylink.click();
    
}

var img_id = "";

function take_selfie(){
    Webcam.snap(function(selfie){

        if (img_id == "s1"){
            document.getElementById("result1").innerHTML = "<img id='selfie_img1' src='"+selfie+ "'>"; 
        }
        else if (img_id == "s2"){
            document.getElementById("result2").innerHTML = "<img id='selfie_img2' src='"+selfie+ "'>"; 
        }
        else if (img_id == "s3"){
            document.getElementById("result3").innerHTML = "<img id='selfie_img3' src='"+selfie+ "'>"; 
        }

     });
}



function Speak(){
    var synth = window.speechSynthesis;
    speak_data =  "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(my_camera);
    
    setTimeout(function(){

        img_id = "s1";
        take_selfie();
       
        speak_data =  "Taking another selfie in next 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);   


    },5000);

    setTimeout(function(){

        img_id = "s2";

        take_selfie();
       
        speak_data =  "Taking another selfie in next 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);   


    },10000);

    setTimeout(function(){

        img_id = "s3";
        take_selfie(); 
        Save_selfie(); 

    },15000);
    
    
}
