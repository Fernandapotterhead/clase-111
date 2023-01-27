Webcam.set({
    width: 350,
    heght: 300,
    image_format:'png',
    png_quality: 90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function tomar_captura(){
    Webcam.snap(function (data_uri){
        document.getElementById("resultado").innerHTML='<img id="captura" src="'+data_uri+'">';
    });
}
 console.log(ml5.version);
 clasificador=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zkCR_7H_m/model.json',cargar_modelo);
 function cargar_modelo(){
    console.log("modelo_cargado");
 }

 function checar(){
    img=document.getElementById("captura");
    clasificador.classify(img,got_result);
 }
 function got_result(error,result){
if(error){
    console.error(error);
} else{
    console.log(result);
    document.getElementById("resultado_objeto").innerHTML=result[0].label;
    document.getElementById("resultado_precision").innerHTML=result[0].confidence.toFixed(2);
}
 }
