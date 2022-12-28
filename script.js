//OBJETIVOS:
//1: CALCULAR EL TOTAL DE LOS PRODUCTOS
//2: CALCULARLE EL IVA AL TOTAL
//3: MOSTRAR CON ALERT EL TOTAL DEL IVA A PARTE DEL TOTAL DE LOS PRODUCTOS
//4: SACAR EL TOTAL DEFINITIVO DE LOS PRODUCTOS CON EL IVA INCLUIDO Y MOSTRARLO
//5: APLICARLE EL DESCUENTO AL TOTAL DE LOS PRODUCTOS
//6: PREGUNTAR SI SE QUIERE SEGUIR COMPRANDO

alert("IMPORTANTE: por cuestiones de disponibilidad solo puedes agregar 5 productos por compra, agradecemos tu comprension")

alert("Ingresa los precios de los productos a comprar")

function sumarTotal(produc1=0, produc2=0, produc3=0, produc4=0, produc5=0){
   return produc1 + produc2 + produc3 + produc4 + produc5
}

const iva = totalSinIva => totalSinIva * 0.19

let producto1 = Number(prompt("1er Producto"))
let producto2 = Number(prompt("2do Producto"))
let producto3 = Number(prompt("3er Producto"))
let producto4 = Number(prompt("4to Producto"))
let producto5 = Number(prompt("5to Producto"))


let totalProductos = sumarTotal(producto1,producto2,producto3,producto4,producto5)

alert("El total de los productos sin el IVA es de= $" + totalProductos)

let descuento = totalProductos * 0.20

let totalDescuento = totalProductos - descuento

alert("Obtienes un descuento del 20%, su monto total es de= $" + totalDescuento)

let ivaProductos = iva(totalDescuento)

alert("El IVA total de la compra es de = $" + ivaProductos)

let totalCompra = totalDescuento + ivaProductos

alert("El total de su compra mas IVA es de= $" + totalCompra)



