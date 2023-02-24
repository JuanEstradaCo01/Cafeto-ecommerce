
//Almacenando todos los datos que se ingresan en el formulario de convocatoria:

const formulario = document.getElementById("form")

const nombres = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const contacto = document.getElementById("numero")
const correo = document.getElementById("correo")
const ciudad = document.getElementById("residencia")
const fecha = document.getElementById("fecha")
const experiencia = document.getElementById("experiencia")
const estado = document.getElementById("Estado")
const sobreti = document.getElementById("sobreti")


formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    
    console.log("nombres: " + nombres.value)
    console.log("apellidos: " + apellido.value)
    console.log("numero de contacto: " + contacto.value)
    console.log("correo: " + correo.value)
    console.log("ciudad: " + ciudad.value)
    console.log("nacimiento: " + fecha.value)
    console.log("Experiencia: " + experiencia.value + " meses")
    console.log("Estado civil: " + estado.value)
    console.log("Descripcion del aspirante: " + sobreti.value)
})

