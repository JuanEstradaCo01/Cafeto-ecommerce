/*const productos = () => {
    const contenedorCards = document.getElementById("contenedorCards")

    productosTienda.forEach((productosTienda) => {
        const div = document.createElement(`div`)
        div.classList.add(`cardProducto`)
        div.innerHTML += `
            <div class="card cards-nuevas">
                <img src="${productosTienda.img}" alt="dulce-cafe"
                class="card__img">
            
                <p class="card__titulo"> <>${productosTienda.nombre}</    strong> </p>
                <p class="card__descripcion">${productosTienda.categoria}</p>
                <p class="card__precio"> <>$${productosTienda.precio}</del></    strong><strong>- Ahora:$6.4</strong></p>
                <p class="referencia">201</p>
            
                <button id= "${productosTienda.id}" class="card-boton-nuevo">Añadir al carrito</button>
        
            </div>
        `
        contenedorCards.appendChild(div)
    })
}*/

//Agregar al carrito:

const carroDeCompras = []

const contenedorCards = document.getElementById(`contenedorCards`)

contenedorCards.addEventListener(`click`, (e) => {
    agregarCarrito(e.target.id)
})

const agregarCarrito = (agregarId) => {
    const agregar1 = productosTienda.find(productosTienda => productosTienda.id == agregarId)
    carroDeCompras.push(agregar1)
    console.table(carroDeCompras)
}


//Enviar todos los productos al storage:
const enviarStorage = (clave,valor) => {localStorage.setItem(clave,valor)}


for (const producto of productosTienda) {
    enviarStorage(producto.id, JSON.stringify(producto))
}

//Ahora traemos los datos del storage:

const dato1 = JSON.parse(localStorage.getItem("201"))
const dato2 = JSON.parse(localStorage.getItem("202"))
const dato3 = JSON.parse(localStorage.getItem("203"))
const dato4 = JSON.parse(localStorage.getItem("204"))
const dato5 = JSON.parse(localStorage.getItem("205"))
const dato6 = JSON.parse(localStorage.getItem("206"))
const dato7 = JSON.parse(localStorage.getItem("207"))
const dato8 = JSON.parse(localStorage.getItem("208"))
const dato9 = JSON.parse(localStorage.getItem("209"))
const dato10 = JSON.parse(localStorage.getItem("210"))
const dato11 = JSON.parse(localStorage.getItem("211"))
const dato12 = JSON.parse(localStorage.getItem("212"))


const traerDeStorage = []

traerDeStorage.push(dato1,dato2,dato3,dato4,dato5,dato6,dato7,dato8,dato9,dato10,dato11,dato12)
console.log(traerDeStorage)



//Aplicando Toastify:
/*
let boton = document.getElementsByClassName("card-boton")

boton.addEventListener("click", agregando)

function agregando(){

    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "left", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} 
      }).showToast();
    
}*/

