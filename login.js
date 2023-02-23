



//Objeto constructor para los usuarios:
 class Usuarios {
    constructor(usuario,contrasena){
        this.usuario = Number(usuario)
        this.contrasena = Number(contrasena)
    }
 }

 const arrayUsuarios =[]

//Login:

let loginForm = document.getElementById("loginForm")

loginForm.addEventListener("submit", login)

function login(e){
    e.preventDefault()
    
    //Traer los datos de los botones

    let usuario = e.target
    //console.log(usuario.children[1].value)
    let contrasena = e.target
    //console.log(contrasena.children[2].value)


    let verificarLoginUsuario = usuario.children[1].value
    let verificarLoginContrasena = contrasena.children[2].value
    
    arrayUsuarios.push(new Usuarios(verificarLoginUsuario,verificarLoginContrasena))

    //Verificando usuario:
    const usuarioFind = arrayUsuarios.find((Usuarios) => Usuarios.usuario === verificarLoginUsuario.value)
    console.log(usuarioFind)
    const contrasenaFind = arrayUsuarios.find((Usuarios) => Usuarios.contrasena === verificarLoginContrasena.value)
    console.log(contrasenaFind)


    if((usuarioFind === verificarLoginUsuario) && (contrasenaFind === verificarLoginContrasena)){
        console.log("!Bienvenido¡ " + verificarLoginUsuario) 
    }else{
        console.log("Usuario o contraseña incorrectos, intenta de nuevo.")
    }
    
    
    //Verificando Contraseña:


    /*console.log(verificarLoginContrasena)
    if( contrasenaFind === verificarLoginContrasena){
        console.log("Contraseña correcta")
    }else{
        console.log("Contraseña incorrecta")
    }*/

}

