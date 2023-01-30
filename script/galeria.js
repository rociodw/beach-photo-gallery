var cuerpoGallery=document.getElementById('cuerpo-gallery')
// var alturaDoc=parseInt(cuerpoGallery.getBoundingClientRect().height)
// var alturaDoc=cuerpoGallery.clientHeight

let alturaDoc = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

//La siguiente acción recargará la página cada vez que el tamaño de la pantalla cambie con el fin de que el valor de los datos sean actualizados.
if (window.screen.width > 570){
 window.addEventListener('resize', function(){
     location.reload()
 }
 )
}
window.onscroll=function(){
    var imagenCentro=document.getElementById('contenedor-imagen-centro')
    var imagenLogo=document.getElementById('logo-centro')
    var pixScroll=window.scrollY
    var anchuraPantalla=window.innerWidth
    var elementoscroll=document.getElementById('gallery-container')
    var altoventana=window.innerHeight
    //Para conocer el scrollY cuando llega al bottom de la ventana sin realizar scroll
    var scrollVertical= alturaDoc-altoventana
    var miniaturas=document.getElementsByClassName('img-miniatura')
    var imagen2=document.getElementById('imagen-2')
    //Anchura de la mitad de las miniaturas
    var mitadMiniaturas=imagen2.clientWidth/2
    var mitadVentana=anchuraPantalla/2
    var imagenIzquierda=document.getElementById('contenedor-imagen-izquierda')
    var imagenDerecha=document.getElementById('contenedor-imagen-derecha')
    var imagen2=(document.getElementById('imagen-2').getBoundingClientRect().right)-mitadMiniaturas
    var imagen13=(document.getElementById('imagen-13').getBoundingClientRect().right)-mitadMiniaturas

    //En el momento que el usuario hace scroll en la pantalla el logo desaparece:
    imagenLogo.style.display='none'

    //Para desplazar el contenedor en posición fixed cuantos pixeles hacen scroll hacia abajo
    elementoscroll.style.left= -pixScroll+'px'

    //Para que corresponsa el fin del scroll con el final del contenedor fixed:
    cuerpoGallery.style.height= (alturaDoc+(alturaDoc-scrollVertical))-anchuraPantalla +'px'

    //Para que la primera imagen aparezca antes de llegar a la mitad de la anchura de la pantalla
    if(imagen2>=mitadVentana){
        imagenCentro.style.backgroundImage='url(/images/gallery/imagen-1.jpg)'
    }else{
        for(i=0; i<=miniaturas.length;i++){
            //Posición del eje x del centro de las miniaturas con respecto a la pantalla. 
            //Para ello restamos la mitad de la anchura de las imágenes con la posición de las mismas.
            var posicionImagen=(miniaturas[i].getBoundingClientRect().right) -mitadMiniaturas


            if(posicionImagen <= mitadVentana){
                if(miniaturas[i]){
                    //Si la posición central de la imagen en miniatura se encuentra en la parte centro-izquierda, ésta aparecerá en la imagen central de la galería. La imagen anterior a ésta se situará en la izquierda y la próxima foto a su derecha.
                    imagenCentro.style.backgroundImage='url(/images/gallery/imagen-'+[i]+'.jpg)';
                    imagenIzquierda.style.backgroundImage='url(/images/gallery/imagen-'+[i-1]+'.jpg)';
                    imagenDerecha.style.backgroundImage='url(/images/gallery/imagen-'+[i+1]+'.jpg)';
                    //Al hacer scroll, el contenedor de la imagen céntrica de la galería tendrá una sombra con los siguientes valores.
                    imagenCentro.style.boxShadow='rgb(0, 0, 0)  0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
                    //Para que esta sombra no aparezca al final de la galería, la eliminamos en el momento que la 'imagen 13' (la cual no contiene ninguna imagen) se muestra en el centro.
                    if (imagen13<=mitadVentana){
                        imagenCentro.style.boxShadow='none'
                    }
                } 
            }
        }
    }
}


var livePalmera=document.getElementById('live-palmera')
var livePaseo=document.getElementById('live-paseo')
var liveCastillo=document.getElementById('live-castillo')
var liveSky=document.getElementById('live-sky')
var videoCentro=document.getElementById('video')
var imagenCentro=document.getElementById('contenedor-imagen-centro')


//Cuando el ratón se mantiene pulsado en los botones con la clase 'live', se mostrará un vídeo, cuando se deje de pulsar, éste desaparecerá.

livePalmera.addEventListener('mousedown', function(){
    videoCentro.innerHTML='<video autoplay muted loop><source src="/video/palmera.mov" type="video/mp4"></video>'
    videoCentro.style.display='block'
    imagenCentro.style.opacity='0.2'
})

livePalmera.addEventListener('mouseup', function(){
    videoCentro.style.display='none'
    imagenCentro.style.opacity='1'
})

livePalmera.addEventListener('touchstart', function(){
    videoCentro.innerHTML='<video autoplay muted loop><source src="/video/palmera.mov" type="video/mp4"></video>'
    videoCentro.style.display='block'
    imagenCentro.style.opacity='0.2'
})

livePalmera.addEventListener('touchend', function(){
    videoCentro.style.display='none'
    imagenCentro.style.opacity='1'
})

livePaseo.addEventListener('mousedown', function(){
    videoCentro.innerHTML='<video autoplay muted loop><source src="/video/paseoCastillo.mp4" type="video/mp4"></video>'
    videoCentro.style.display='block'
    imagenCentro.style.opacity='0.2'
})

livePaseo.addEventListener('mouseup', function(){
    videoCentro.style.display='none'
    imagenCentro.style.opacity='1'
})

livePaseo.addEventListener('touchstart', function(){
    videoCentro.innerHTML='<video autoplay muted loop><source src="/video/paseoCastillo.mp4" type="video/mp4"></video>'
    videoCentro.style.display='block'
    imagenCentro.style.opacity='0.2'
})

livePaseo.addEventListener('touchend', function(){
    videoCentro.style.display='none'
    imagenCentro.style.opacity='1'
})


liveCastillo.addEventListener('mousedown', function(){
    videoCentro.innerHTML='<video autoplay muted loop><source src="/video/castillo.mp4" type="video/mp4"></video>'
    videoCentro.style.display='block'
    imagenCentro.style.opacity='0.2'
})

liveCastillo.addEventListener('mouseup', function(){
    videoCentro.style.display='none'
    imagenCentro.style.opacity='1'
})

liveCastillo.addEventListener('touchstart', function(){
    videoCentro.innerHTML='<video autoplay muted loop><source src="/video/castillo.mp4" type="video/mp4"></video>'
    videoCentro.style.display='block'
    imagenCentro.style.opacity='0.2'
})

liveCastillo.addEventListener('touchend', function(){
    videoCentro.style.display='none'
    imagenCentro.style.opacity='1'
})

liveSky.addEventListener('mousedown', function(){
    videoCentro.innerHTML='<video autoplay muted loop><source src="/video/sky.mp4" type="video/mp4"></video>'
    videoCentro.style.display='block'
    imagenCentro.style.opacity='0.2'
})

liveSky.addEventListener('mouseup', function(){
    videoCentro.style.display='none'
    imagenCentro.style.opacity='1'
})

liveSky.addEventListener('touchstart', function(){
    videoCentro.innerHTML='<video autoplay muted loop><source src="/video/sky.mp4" type="video/mp4"></video>'
    videoCentro.style.display='block'
    imagenCentro.style.opacity='0.2'
})

liveSky.addEventListener('touchend', function(){
    videoCentro.style.display='none'
    imagenCentro.style.opacity='1'
})

window.addEventListener('load', function() {
    console.log('La página ha terminado de cargarse!!');
});
document.oncontextmenu = function(){return false} 


