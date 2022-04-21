function classification(){
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/mHhlJjyOD/model.json", modelReady)
}

function modelReady(){
    classifier.classify(gotResults)
}

function gotResults(error, results){
if (error)
{
    console.error(error)
}
else{
    console.log(results)
    document.getElementById("sound_head").innerHTML = "I can hear "+results[0].label
    document.getElementById("accuracy_head").innerHTML = "Accuracy "+(results[0].confidence*100).toFixed(2)+"%"