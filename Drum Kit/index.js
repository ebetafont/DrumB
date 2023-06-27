function getSonido(nombreTecla){
    var rutaAudio;
    switch (nombreTecla) {
        case "w":
            rutaAudio = "./sounds/tom-1.mp3";
            break;
        case "a":
            rutaAudio = "./sounds/tom-2.mp3";
            break;
        case "s":
            rutaAudio = "./sounds/tom-3.mp3";
            break;
        case "d":
            rutaAudio = "./sounds/tom-4.mp3";
            break;   
        case "j":
            rutaAudio = "./sounds/crash.mp3";
            break; 
        case "k":
            rutaAudio = "./sounds/kick-bass.mp3";
            break; 
        case "l":
            rutaAudio = "./sounds/snare.mp3";
            break;                
        default:
            break;
    }
  
    var audio = new Audio(rutaAudio);
    audio.play();
}

function animacionBoton(nombreTecla){
    var miBoton = document.querySelector("." + nombreTecla);
    miBoton.classList.add("pressed");
    setTimeout(() => {
        miBoton.classList.remove("pressed");
    }, "100");
    
}

for(let i=0; i < document.querySelectorAll(".drum").length; i++){
    //document.querySelectorAll(".drum")[i].addEventListener("click", function(){alert(document.querySelectorAll(".drum")[i].className);});
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        this.style.color = "#fff";
        
        getSonido(document.querySelectorAll(".drum")[i].innerHTML);
    });
}

document.addEventListener("keydown", function(event){
    var teclaPresionada = event.key;
    getSonido(teclaPresionada);
    animacionBoton(teclaPresionada);
});

