//alerta de bienvenida

swal({
    title: "Bienvenido a la tienda",
    text: "Aqui encontraras los productos de la mas alta calidad",
    icon: "info",
    button: "Continuar a la tienda"
})



//Consumiendo API jsonplaceholder
let list = document.getElementById("list")


fetch("https://jsonplaceholder.typicode.com/comments")
.then((resp)=> resp.json())
.then((data)=> console.log(data)/*{
    data.forEach( info => {
        const mostrarDatos = document.createElement("li")
        mostrarDatos.innerHTML = `
        <h3>Nombre: ${info.name}</h3>
        <h3>Email: ${info.email}</h3>
        <h3>Comentario: ${info.body}</h3>
        `
        list.appendChild(mostrarDatos)
    }*/)

.catch((error)=> console.log("Error",error))


//Enviar datos con el metodo post

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'post',
  body: JSON.stringify({
    title: 'Hola soy un dato nuevo',
    body: 'Soy un dato nuevo',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
    .then((resp)=> resp.json())
    .then((data)=> console.log(data))
    .catch((error)=> console.log("Error",error))


    


//Array de objetos donde almaceno los productos:
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
    contenedorProductos.appendChild(div)

    const boton1 = document.getElementById(`agregar${producto.id}`)


    boton1.addEventListener('click', () => {
        agregarCarrito(producto.id)
    })

    boton1.addEventListener("click", agregando)

})


//Agregar al carrito:

const carroDeCompras = []

const agregarCarrito = (agregarId) => {
    const agregar1 = productosTienda.find(productosTienda => productosTienda.id == agregarId)
    carroDeCompras.push(agregar1)
    console.table(carroDeCompras)
}

//Eligiendo metodo de pago:
/*let metodoPago = prompt("Selecciona el metodo de pago: \n 1-Pago en efectivo  \n 2-Pago con tarjeta")

while(metodoPago != "ESC"){
   switch(metodoPago){
      case "1":
         alert("Seleccionaste efectivo")
         alert("¡Gracias por tu compra!")
         break;
      case "2":
         alert("Seleccionaste tarjeta")
         alert("¡Gracias por tu compra!")
         break;
      default:
         //prompt("Error: Valor invalido, vuelve a intentarlo (Ingresa ESC para salir)").toUpperCase()
         break;
   }
   break;
}*/

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

