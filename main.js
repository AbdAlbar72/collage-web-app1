function speak() {
    setTimeout(function () {
        var img_id = 'selfie1';
        take_snapshot(); 
        var speak_data = "Capturing first selfie in 5 seconds.";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000); 

    setTimeout(function () {
        var img_id = 'selfie2';
        take_snapshot(); 
        var speak_data = "Capturing second selfie in 5 seconds.";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000);
    
    
    setTimeout(function () {
        var img_id = 'selfie3';
        take_snapshot(); 
        var speak_data = "Capturing last selfie in 5 seconds.";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000); 

}



function take_snapshot() {
    console.log('Currently captured image id: ' + img_id);

    Webcam.snap(function (data_uri) {
        
        if (img_id === 'selfie1') {
            document.getElementById('result1').innerHTML = '<img src="' + data_uri + '" alt="Selfie 1">';
        } else if (img_id === 'selfie2') {
            document.getElementById('result2').innerHTML = '<img src="' + data_uri + '" alt="Selfie 2">';
        } else if (img_id === 'selfie3') {
            document.getElementById('result3').innerHTML = '<img src="' + data_uri + '" alt="Selfie 3">';
        }
    });

    
    img_id = 'selfie2'; 
}
