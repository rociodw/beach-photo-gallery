var btnSound = document.getElementById("btn-sound");
let sound = document.createElement("audio");
let circulo = document.getElementById("circulo");

sound.setAttribute("src", "/audio/sea-waves.mp3");

btnSound.addEventListener("click", () => {
    //Si el audio no se encuentra pausado, al pulsar el botón el audio se pausará y viceversa. 
    //El color del círculo a si derecha cambiará respectivamente de color.
    sound.paused == true ? sound.play() : sound.pause();
    sound.paused == true
        ? (circulo.style.backgroundColor = "#a5a5a5")
        : (circulo.style.backgroundColor = "white");

    //En caso de que el audio llegara a su fin, volvería a reproducirse automáticamente
    sound.addEventListener("ended", function () {
        this.currentTime = 0;
        this.play();
    });
});
