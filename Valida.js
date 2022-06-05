const usuario = document.getElementById("user");
const contraseña = document.getElementById("password");
const boton= document.getElementById("button");

boton.addEventListener('click', (e) =>{
    e.preventDefault()

    const date= {
        usuario:  usuario.value,
        contraseña:  contraseña.value
    }

    if (date.usuario=="admin@mail.com" && date.contraseña=="admin"){
            location.href='Succesfull.html';
    }
    else if (date.usuario=="" && date.contraseña==""){
        alert("Por favor, rellene los campos")
    }
    else if (date.usuario==""){
        alert("Por favor, ingrese un usuario valido")
    }
    else if(date.contraseña=="" ){
        alert("Por favor, ingrese una contraseña valida")
    }
    else{
        alert("Datos ingresados no válidos")
    }            
})