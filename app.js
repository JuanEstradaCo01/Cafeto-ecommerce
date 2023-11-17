//Productos:
const productosTienda = [
    {
        id : 201,
        nombre : "Dulce de cafe con leche",
        cantidad : 10 + "unidades",
        img: '../Imagenes/dulce-nuevo.png',
        precio : 800,
        categoria : "Dulce"
    }
,
    {
        id : 202,
        nombre : "Dulce de cafe con leche",
        cantidad : 18 + "unidades",
        img: `../Imagenes/dulce-nuevo.png`,
        precio : 1500,
        categoria : "Dulce"

    }
,
    {
        id : 203,
        nombre : "Dulce de cafe con leche",
        cantidad : 25 + "unidades",
        img: `../Imagenes/dulce-nuevo.png`,
        precio : 2000,
        categoria : "Dulce"

    }
,
    {
        id : 204,
        nombre : "Galleta con trozos de cafe",
        cantidad : 5 + "unidades",
        img: `../Imagenes/galleta-de-cafe.png`,
        precio : 300,
        categoria : "Galleta"

    }
,
    {
        id : 205,
        nombre : "Galleta con trozos de cafe",
        cantidad : 10 + "unidades",
        img: `../Imagenes/galleta-de-cafe.png`,
        precio : 500,
        categoria : "Galleta"

    }
,
    {
        id : 206,
        nombre : "Galleta con trozos de cafe",
        cantidad : 20 + "unidades",
        img: '../Imagenes/galleta-de-cafe.png',
        precio : 900,
        categoria : "Galleta"

    }
,
    {
        id : 207,
        nombre : "Bolsa de cafe instantaneo",
        cantidad : 50 + "g",
        img: '../Imagenes/bolsa-cafe-cards.jpg',
        precio : 1000,
        categoria : "Cafe instantaneo"
    }
,
    {
        id : 208,
        nombre : "Bolsa de cafe instantaneo",
        cantidad : 100 + "g",
        img: '../Imagenes/bolsa-cafe-cards.jpg',
        precio : 2000,
        categoria : "Cafe instantaneo"
    }
,
    {
        id : 209,
        nombre : "Bolsa de cafe instantaneo",
        cantidad : 150 + "g",
        img: '../Imagenes/bolsa-cafe-cards.jpg',
        precio : 3000,
        categoria : "Cafe instantaneo"
    }
,
    {
        id : 210,
        nombre : "Bolsa cafe de filtro",
        cantidad : 50 + "g",
        img: '../Imagenes/bolsa-cafe-cards.jpg',
        precio : 1500,
        categoria : "Cafe de filtro"
    }
,
    {
        id : 211,
        nombre : "Bolsa cafe de filtro",
        cantidad : 100 + "g",
        img: '../Imagenes/bolsa-cafe-cards.jpg',
        precio : 3000,
        categoria : "Cafe de filtro"
    }
,
    {
        id : 212,
        nombre : "Bolsa cafe de filtro",
        cantidad : 150 + "g",
        img: '../Imagenes/bolsa-cafe-cards.jpg',
        precio : 4500,
        categoria : "Cafe de filtro"
    }

]

//Agregando los productos a la tienda:
const contenedorProductos = document.getElementById('contenedorCards')

productosTienda.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img class="card__img" src=${producto.img} alt="">
    <h3 class="card__titulo">${producto.nombre}</h3>
    <p class="card__descripcion">${producto.cantidad}</p>
    <p>${producto.categoria}</p>
    <p class="card__precio">Precio:$ ${producto.precio}</p>
    <a id="add"><button id="agregar${producto.id}" class="card-boton">Agregar al carrito <i class="fas fa-shopping-cart"></i></button></a>
    `

    if(contenedorProductos != null) {
        contenedorProductos.appendChild(div)
        localStorage.setItem('carritoCompras', '');
    }

    const boton1 = document.getElementById(`agregar${producto.id}`)

    if(boton1 != null){
        boton1.addEventListener('click', () => {
            agregarCarrito(producto.id)
        })
    
        boton1.addEventListener("click", agregando)
    }
})


//Agregar al carrito:

const carroDeCompras = []

const agregarCarrito = (agregarId) => {
    const agregar1 = productosTienda.find(productosTienda => productosTienda.id == agregarId)
    carroDeCompras.push(agregar1)    
    console.table(carroDeCompras)
}


//Actualizando el carrito con los productos que se le agregan:

const actualizarCarrito = () => {
    let myJsonString = JSON.stringify(carroDeCompras);
    localStorage.setItem('carritoCompras', myJsonString);
}

const stringCarrito = localStorage.getItem('carritoCompras');

const pintarItems = (prods,eliminar, sumar) => {
    const contenedorCarrito = document.getElementById('productoEnCarrito');
    let total = 0;
    let compraFinal = 0;
    let totalSinIva = 0;
    prods.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio: $${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class= "botonEliminar"><i class="fas fa-trash-alt"</button>
        `
        contenedorCarrito.appendChild(div)

        //Calculo el total de la compra con descuento y le sumo el IVA
        total = total + prod.precio;
        totalSinIva = total * 0.19 //IVA
        let descuento = total * 0.20 //Descuento
        let totalCompraConDescuento = total - descuento
        compraFinal = totalCompraConDescuento + totalSinIva       
})

 //Agrego los valores para mostrarlos en pantalla
 let totalCompras = document.getElementById("precioTotal")
 totalCompras.innerHTML = compraFinal

 let sinIva = document.getElementById("precioSinIva")
 sinIva.innerHTML = totalSinIva   
}
    

let total = 0;
let prueba = ''
if(stringCarrito != ''){
    let jsonArray = JSON.parse(stringCarrito)   
    prueba = jsonArray
    pintarItems(jsonArray, "sumar")
}


const eliminarDelCarrito = (prodId) => {
    const item = prueba.find((prod) => prod.id === prodId)
    const indice = prueba.indexOf(item)
    prueba.splice(indice, 1)
    document.getElementById('productoEnCarrito').innerHTML = '';
    pintarItems(prueba, "eliminar")
}


//Promesa: Solo para la pagina de la tienda 
let desc = document.getElementById("descuento")
function obtenerDescuentos(){
    setTimeout(() => {
        swal({
            title: "¡Descuento valido solo hasta fin de mes!",
            text: "Aqui encontraras los productos de la mas alta calidad",
            icon: "info",
            button: "Continuar en la tienda"
        })
    },1000);
}

desc.addEventListener("click", obtenerDescuentos)


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

function agregando(){

    Toastify({
        text: "Agregado al carrito",
        duration: 2000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "radial-gradient(rgb(8, 208, 223), black)",
        },
        onClick: function(){} 
      }).showToast();
    
}