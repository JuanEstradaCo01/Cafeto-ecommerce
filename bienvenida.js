//alerta de bienvenida

swal("Antes de empezar dinos tu nombre", {
  content: "input",
})
.then((value) => {
  swal(`¡Hola ${value}!`);
});



//Enviar datos con el metodo post

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'post',
  body: JSON.stringify({
    title: 'Hola',
    body: 'Dato',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
    .then((other)=> other.json())
    .then((another)=> console.log(another))
    .catch((error)=> console.log("Error",error))



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
