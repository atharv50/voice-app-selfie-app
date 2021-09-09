var SpeechRecognition = window.webkitSpeechRecognition;

var reccognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    reccognition.start();
}

reccognition.onresult = function run (event) {

    console.log(event);

    var Content = event.result[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
}