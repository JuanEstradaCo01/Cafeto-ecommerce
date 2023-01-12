//OBJETIVOS:
//1: Pedir nombre
//2: Pedir edad y validar

alert("Ingresaste a nuestra seccion de contacto, responde a las siguientes preguntas:")

let nombre = prompt("Ingresa tu nombre")

if(nombre == ""){
    alert("No ingresaste tu nombre")
}
else{
    alert("Hola " + nombre)
}



let edad = Number(prompt("Para continuar debes ser mayor de edad, ingresa tu edad:"))

if(edad == ""){
    alert("No ingresaste tu edad")
}
else if(edad >= 18){
    alert("¡Felicidades! Cumples con los requisitos minimos, continua diligenciando el siguiente formulario.")
}
else if(edad < 18){
    alert("No cumples con el requisito")
}
else if(edad !== 18){
    alert("Error: Ingresa el valor en numeros")
}
else{
    alert("Sigue intentando")
}