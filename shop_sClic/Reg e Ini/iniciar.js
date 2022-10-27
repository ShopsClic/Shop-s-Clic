let nombre, contraseña;


let formulario = document.querySelector('#iniciar')

//modal
let cliente, empresario;


const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');



formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    LeerDatos()
})

function LeerDatos() {
    nombre = document.getElementById('name').value
    contraseña = document.getElementById('password').value

    ValidarDatos(nombre, contraseña)

}



function ValidarDatos(nombre, contraseña) {
    if (nombre.length == 0 || contraseña.length == 0) {
    }

    ListarDatos(nombre, contraseña)
}



function ListarDatos(nombre, contraseña) {
    let nombreUs = localStorage.getItem('Nombre')
    let contraseñaUs = localStorage.getItem('Contraseña')

    if (nombre === nombreUs && contraseña === contraseñaUs) {
        open.addEventListener('click', () => {
            modal_container.classList.add('show');
        });

        close.addEventListener('click', () => {
            modal_container.classList.remove('show');
           self.location.href = '../lobby/lobby.html';
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: '¡Algo salió mal!',
        })
    }
}

