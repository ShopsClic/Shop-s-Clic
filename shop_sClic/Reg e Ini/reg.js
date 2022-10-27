let nombre, correo, contraseña, contraseña2, edad;

let formulario = document.querySelector('#registro')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    LeerDatos()
})

function LeerDatos() {
    nombre = document.getElementById('name').value
    correo = document.getElementById('email').value
    contraseña = document.getElementById('password').value
    contraseña2 = document.getElementById('password2').value
    edad = document.getElementById('year').value

    ValidarDatos(nombre, correo, contraseña, contraseña2, edad)

    guardarLocalStorage(nombre, correo, contraseña, contraseña2, edad)

}

function ValidarDatos(nombre, correo, contraseña, contraseña2, edad) {
    if (nombre.length == 0 || correo.length == 0 || contraseña.length == 0 || contraseña2.length == 0 || edad.length == 0 || edad <= 14 || contraseña != contraseña2) {
        Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: '¡Algo salió mal!',
        })
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Buen trabaj...',
            text: '¡Ya te registraste!',
        })
    }
}

function guardarLocalStorage(nombre, correo, contraseña, contraseña2, edad) {
    localStorage.setItem('Nombre', nombre)
    localStorage.setItem('Correo', correo)
    localStorage.setItem('Contraseña', contraseña)
    localStorage.setItem('Contraseña2', contraseña2)
    localStorage.setItem('Edad', edad)
}