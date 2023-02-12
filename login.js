
//Login: (en proceso)

let loginForm = document.getElementById("loginForm")

loginForm.addEventListener("submit", login)

function login(e){
    e.preventDefault()

    let usuario = e.target
    let contrasena = e.target

    console.log("Usuario: " + usuario.children[1].value === usuario)
    console.log("Contraseña: " + contrasena.children[2].value === contrasena)

    if(usuario === false){
        console.log("Usuario incorrecto")
        
    }else{
        
        console.log("Bienvenido " + usuario)
    }

    const usuariosArray = [
        {
            usuario: "pedro@mail.com",
            contrasena: 1234
        },
    
        {
            usuario: "andres@mail.com",
            contrasena: 12345
        },
    
        {
            usuario: "juan@mail.com",
            contrasena: 123456
        },
    
        {
            usuario: "martina@mail.com",
            contrasena: 1234567
        },
    
        {
            usuario: "andrea@mail.com",
            contrasena: 12345678
        }
    ]
    
}





