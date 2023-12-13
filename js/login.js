const formulario = document.getElementById('formulario');
const adminLogueado = JSON.parse(localStorage.getItem('adminLogueado')) || false;
const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado')) || false;

if(adminLogueado){
  Swal.fire({
      icon: 'error',
      text: 'Ya estas logueado',
      showConfirmButton: false
  })
  let interval = setInterval(()=>{
      window.location.href='../index.html'
  },2000)
}

if(usuarioLogueado == 'usuarioValido'){
  Swal.fire({
      icon: 'error',
      text: 'Ya estas logueado',
      showConfirmButton: false
  })
  let interval = setInterval(()=>{
      window.location.href='../index.html'
  },2000)
}


formulario.addEventListener('submit', (e)=>{
  e.preventDefault();

  const email = document.getElementById('correo').value;
  const password = document.getElementById('password').value;

  if(email === "admin@admin.com" && password === "admin1234"){
    localStorage.setItem('adminLogueado', true);
    Swal.fire({
      icon: 'success',
      text: `Bienvenido`,
      showConfirmButton: false
    })
    let interval = setInterval(()=>{
      window.location.href= '../index.html'
    },2000)
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem('listaUsuarios')) || [];

  const usuarioValido = usuarios.find(usuario => usuario.email === email && usuario.password === password);

  if(!usuarioValido){
    Swal.fire({
      icon: 'error',
      text: 'El e-mail y/o contraseña ingresado son invalidas',
      timer: 2000,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      showClass: {
        popup: 'animate__bounceIn'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    return;
  }

  localStorage.setItem('usuarioLogueado', JSON.stringify('usuarioValido'));
  Swal.fire({
    icon: 'success',
    text: `Bienvenido`,
    showConfirmButton: false
  })
  let interval = setInterval(()=>{
    window.location.href= '../index.html'
  },2000)
})

