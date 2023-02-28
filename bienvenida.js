



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
