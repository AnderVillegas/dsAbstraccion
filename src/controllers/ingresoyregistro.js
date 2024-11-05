

document.addEventListener('DOMContentLoaded', function() {
    // Manejador para el registro
    document.getElementById('ButtonR').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el envío del formulario 
      // Obtener los valores del formulario de registro
      const username = document.getElementById('name1').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password1').value;
      // Crear un objeto de usuario
      const user = {
        username,
        email, 
        password,
        saldo: 0, 
        movimientos: []
     };
      // Obtener la lista de usuarios del localStorage o inicializar una lista vacía 
      let users = JSON.parse(localStorage.getItem('users')) || []; 
      // Añadir el nuevo usuario a la lista 
      users.push(user);
      // Almacenar el usuario en localStorage
      localStorage.setItem('users', JSON.stringify(users));
       Swal.fire({
                     title: "Good job!",
                    text: "Registro Exitoso!",
                    icon: "success"
                });
    });
    // Manejador para el inicio de sesión
    document.getElementById('ButtonI').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el envío del formulario
      // Obtener los valores del formulario de inicio de sesión
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      // Obtener los datos de usuario del localStorage
      const users = JSON.parse(localStorage.getItem('users')) || []; 
      // Verificar si algún usuario en la lista tiene las credenciales proporcionadas 
      const user = users.find(user => user.username === username && user.password === password);
      // Verificar los datos de usuario
      if (user) {
        Swal.fire({
                         title: "Good job!",
                         text: "Inicio exitoso",
                         icon: "success"
                      });
             localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'dasboards.html' // Redirigir a la página de destino
      } else {
        Swal.fire({
                         icon: "error",
                         title: "Oops...",
                         text: "Nombre de usuario o contraseña incorrectos!",
                        
                      });
        
                    }
  });
})

//mostar nombre
document.addEventListener('DOMContentLoaded', function() { 
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
     if (currentUser) { document.getElementById('nombreUsuario').textContent = currentUser.username;
     } });

















  