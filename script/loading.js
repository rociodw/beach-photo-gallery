var arrayFrases=['Marcando pisadas en la arena', 'Tomando fotos del atardecer', 'Dando un paseo entre dos aguas', 'Escuchando las olas romper', 'Sintiendo la brisa del mar']
var frases=document.getElementById('frases')
var contenedorFrases= document.getElementById('contenedorFrases')
var boton=document.getElementById('boton-descubrir')


arrayFrases.forEach(function (element, index) {
    setTimeout(function(){
    frases.innerHTML=element
    if(index==arrayFrases.length-1){
        contenedorFrases.classList.add('last-frase-animacion')
        setTimeout(function () {
            boton.style.display='block'
        }, 800)
    }
   }, index*1000);
})

