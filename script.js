


class Producto {
   constructor(nombre,referencia,precio,tamaño){
      this.nombre = nombre.toUpperCase()
      this.referencia = Number(referencia)
      this.precio = Number(precio)
      this.tamaño = Number(tamaño)
      this.descuento = Number(this.precio * 0.20)
      this.compraSinIva = Number(this.precio - this.descuento)
      this.Iva = Number(this.precio * 0.19)
      this.totalCompra = Number(this.compraSinIva + this.Iva)
   }
   sumarIva(){
      this.precio *= 1.19
   }
}


let seguirComprando = 0;

const arrayProductos = []


alert("¡Bienvenido a la seccion de compras!")
alert("Recomendacion abrir la consola antes para visualizar los datos")

do{

let agregando  = "Fin"
do{
   let agregando = prompt ("Ingresa el nombre del producto o ingresa Fin para terminar de agregar")
   if(agregando === "FIN" || agregando === "Fin" || agregando === "fin"){
      break;
   }else{
      productoNombre = agregando
      let producReferencia = (prompt("Ingrese la referencia del producto"))
      let producPrecio = (prompt("Ingrese el precio del producto"))
      let producTamaño = (prompt("Ingrese el tamaño o la cantidad del producto"))
      
      arrayProductos.push(new Producto (productoNombre,producReferencia,producPrecio,producTamaño))
   }
}while(agregando === "FIN" || agregando === "Fin" || agregando === "fin")


console.log(arrayProductos)

for(let producto of arrayProductos){

   console.log("Referencia: " + producto.referencia)
   console.log("Nombre: " + producto.nombre)
   console.log("Tamaño: " + producto.tamaño)
   console.log("Precio: $" + producto.precio)
   console.log("El total de la compra es: $" + producto.totalCompra)
   alert("¡Felicidades! Obtuviste el 20% de descuento de tu compra")

   alert("El total de tu compra con IVA es de: $" + producto.totalCompra)
}

const nombresProductosSeleccionados = arrayProductos.map((Producto) => Producto.nombre.toUpperCase())

alert("Los productos que agregaste a tu carrito de compras: " + nombresProductosSeleccionados)

let filtrar = prompt("Para filtrar el contenido de tu carrito de compras ingresa: \n 1) Para filtrar por nombres. \n 2) Para filtrar por referencia.  \n 3) Para filtrar por precio.  \n 4) Para filtrar por tamaño.")


switch(filtrar){
   case "1":
      const nombreFiltrar = arrayProductos.filter((Producto) => Producto.nombre.includes("CAFE"))
      console.log("Productos: " + nombreFiltrar)
      break;
   case "2":
      const referenciaFiltrar = arrayProductos.filter((Producto) => Producto.referencia <= 300)
      console.log("Referencias: " + referenciaFiltrar)
      break;
   case "3":
      const precioFiltrar = arrayProductos.filter((Producto) => Producto.totalCompra <= 100)
      console.log("Precios: " + precioFiltrar)
      break;
   case "4":
      const tamanofiltrar = arrayProductos.filter((Producto) => Producto.tamaño <= 150)
      console.log("Tamaños: " + tamanofiltrar)
      break;
   default:
      alert("Error: Valor invalido.")
      break;
}

let metodoPago = prompt("Selecciona el metodo de pago: \n 1-Pago en efectivo  \n 2-Pago con tarjeta")


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
         prompt("Error: Valor invalido, vuelve a intentarlo (Ingresa ESC para salir)").toUpperCase()
         break;
   }
   break;
}

seguirComprando = prompt("¿Quieres seguir comprando? \n 1: Para continuar  \n No: Para cancelar")

}while(parseInt(seguirComprando))

alert("Antes de irte te dejamos con una breve encuesta de tu experiencia con nosotros")

function encuesta(satisfaccion=0,calidad=0){
   return satisfaccion + calidad
}

let satisfaccion1 = Number(prompt("Del 1 al 5 ¿Que tan satisfactorio fue tu proceso de compra?"))
let calidad1 = Number(prompt("Del 1 al 5 ¿Que tal te parecio la calidad del producto?"))

let comentario = prompt("Te dejamos este espacio para que ingreses comentarios al respecto:")

let resultadoEncuesta = encuesta(satisfaccion1,calidad1)

console.log("Calificacion satisfaccion/calidad: " + resultadoEncuesta + "/10")

console.log("Comentarios: " + comentario)

alert("Muchas gracias ¡Hasta pronto!")
