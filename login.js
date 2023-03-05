
//Objeto constructor para los usuarios:
class Usuarios {
    constructor(usuario,contrasena){
        this.usuario = usuario
        this.contrasena = Number(contrasena)
    }
 }

 const arrayUsuarios =[]

//Login: registro

let loginForm = document.getElementById("loginForm")

loginForm.addEventListener("submit", loginRegistro)

function loginRegistro(e){
    e.preventDefault()
    
    //Traer los datos de los botones

    let usuario = e.target
    //console.log(usuario.children[0].value)
    let contrasena = e.target
    //console.log(contrasena.children[1].value)


    let verificarLoginUsuario = usuario.children[1].value
    
    let verificarLoginContrasena = Number(contrasena.children[2].value)
    
    
    arrayUsuarios.push(new Usuarios(verificarLoginUsuario,verificarLoginContrasena))

    

    //traer datos almacenados en el array:
    
    const usuarioFind = arrayUsuarios.find((Usuarios) => Usuarios.usuario === verificarLoginUsuario)
    console.log(usuarioFind)
    const contrasenaFind = arrayUsuarios.find((Usuarios) => Usuarios.contrasena === verificarLoginContrasena)

}



//Login: sign in (Ingresar con un usuario registrado)

let signIn = document.getElementById("loginIngreso")

signIn.addEventListener("submit", loginIngresar)

function loginIngresar(e){
    e.preventDefault()

    let usuarioIngresar = e.target
    let contrasenaIngresar = e.target

    let validarUsuario = usuarioIngresar.children[1].value
 
    let validarContrasena = Number(contrasenaIngresar.children[2].value)
    

    //Validamos si los datos ingresados estan registrados en el array
    arrayUsuarios.filter((itemProduct) => {
        if(validarUsuario == itemProduct.usuario && validarContrasena == itemProduct.contrasena){
            swal({
                title: "¡Bienvenido " + validarUsuario + "!",
                text: "Iniciaste sesion",
                icon: "success",
            })

        }else{
            swal({
                title: "oops, ha ocurrido un error",
                text: "Usuario y/o contraseña incorrectos",
                icon: "error",
            })
        }   
        });      
}