let correo;


let formulario = document.querySelector('#olv')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    LeerDatos()
})

function LeerDatos() {
    correo = document.getElementById('email').value

    ValidarDatos(correo)

}

function ValidarDatos(correo) {
    if (correo.length == 0 ) {
    }

    ListarDatos(correo)
}


function ListarDatos(correo) {
    let correoUs = localStorage.getItem('Correo')

    if (correo === correoUs) {
      Swal.fire({
        title: 'Escribe el codigo de verificación.',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Cambiar contraseña',
        showLoaderOnConfirm: true,
        preConfirm: (codigo) => {
          return fetch(`12345 ${codigo}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(response.statusText)
              }
              return response.json()
            })
            .catch(error => {
              Swal.showValidationMessage(
                `Codigo incorrecto: ${error}`
              )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url
          })
        }
      })
      
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: '¡Algo salió mal!',
        })
    }
}