var text = ["Hola, soy Adrián González, un desarrollador de aplicaciones web nacido en Ponferrada"];
var textPosition = 0;
var speed = 60;

typewriter = () => {
    document.querySelector("#message").innerHTML = text[0].substring(0, textPosition) + '<span>\u25AE</span>';
    console.log(text);
    if(textPosition++ != text[0].length){
      setTimeout(typewriter, speed);
    } 
}

window.addEventListener("load", typewriter)