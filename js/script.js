var text = ["Hola, soy Adrián González, un principio de desarrollador de aplicaciones web nacido en Ponferrada. Actualmente me encuentro realizando prácticas en SoftwareOne."];
var textPosition = 0;
var speed = 65;

typewriter = () => {
    document.querySelector("#message").innerHTML = text[0].substring(0, textPosition) + '<span>\u25AE</span>';
    console.log(text);
    if(textPosition++ != text[0].length){
      setTimeout(typewriter, speed);
    } 
}

window.addEventListener("load", typewriter)