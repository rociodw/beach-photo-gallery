let btnInfo=document.getElementById('info')
let popUp=document.getElementById('pop-up')
let closePopUp=document.getElementById('close-pop-up')
let closeDescripcion=document.getElementById('close-pop-descripcion')
let descripcion=document.getElementById('pop-descripcion')
let btnPlaya=document.getElementById('btn-playa')

//Según el botón pulsado abriremos o cerraremos los correspondientes contenedores informativos

btnInfo.addEventListener('click',()=> {
    popUp.style.display='block'
})

closePopUp.addEventListener('click', ()=>{
    popUp.style.display='none'
})

closeDescripcion.addEventListener('click',()=> {
    descripcion.style.display='none'
})

btnPlaya.addEventListener('click',()=> {
    descripcion.style.display='block'
})

