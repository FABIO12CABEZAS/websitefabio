const imagenes = document.querySelectorAll("img-galeria")
const imagenneslight = document.querySelector("agregar-imagen")
const contenedorlight = document.querySelector (".imagen-light")
const hamburguer1 = document.querySelector(".hamburguer")

imagenes.forEach(imagen =>{
    imagen.addEventListener("click" ()=>){
        aparecerImagen(imagen.getAttribute("src");)
    }

})

contenedorlight.addEventListener("click", (e)=>{
    if(e.target !== imagenneslight){
        contenedorlight.classList.toggle("show")
        imagenneslight.classList.toggle("showImage")
        hamburguer1.style.opacity = "1"
    }

})

const aparecerImagen = (imagen)=>{
    imagenneslight.src =imagen;
    contenedorlight.classList.toggle("show")
    imagenneslight.classList.toggle("showImage")
    hamburguer1.style.opacity = "0"



}