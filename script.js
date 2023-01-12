//OBJETIVOS:
//1: CALCULAR EL TOTAL DE LOS PRODUCTOS
//2: APLICARLE EL DESCUENTO AL TOTAL DE LOS PRODUCTOS Y SUMARLE EL IVA
//3: PREGUNTAR SI SE QUIERE SEGUIR COMPRANDO


let seguirComprando = 0;
do{

alert("IMPORTANTE: por cuestiones de disponibilidad solo puedes agregar 5 productos por compra, agradecemos tu comprension")

alert("Ingresa los precios de los productos a comprar")

function sumarTotal(produc1=0, produc2=0, produc3=0, produc4=0, produc5=0){
   return produc1 + produc2 + produc3 + produc4 + produc5
}

let producto1 = Number(prompt("1er Producto"))
let producto2 = Number(prompt("2do Producto"))
let producto3 = Number(prompt("3er Producto"))
let producto4 = Number(prompt("4to Producto"))
let producto5 = Number(prompt("5to Producto"))


let totalProductos = sumarTotal(producto1,producto2,producto3,producto4,producto5)

let descuento = totalProductos * 0.20

let totalDescuento = totalProductos - descuento

alert("Obtienes un descuento del 20%, su monto total es de: $" + totalDescuento)

let productosConIva = totalDescuento * 1.19

alert("El total de su compra con IVA es de: $" + productosConIva)

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

alert("¡Hasta pronto!")
