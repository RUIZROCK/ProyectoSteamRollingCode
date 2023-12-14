const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, 
	password: /^.{4,12}$/, 
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
	nombre: false,
	password: false,
	correo: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
			break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
			break;
		case "password2":
			validarPassword2();
			break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
			break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)) {
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if (inputPassword1.value !== inputPassword2.value) {
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	const nombre = document.getElementById('nombre').value;
	const email = document.getElementById('correo').value;
	const password = document.getElementById('password').value;

	const usuarios = JSON.parse(localStorage.getItem('listaUsuarios')) || [];
	const emailRegistrado = usuarios.find(usuario => usuario.email === email);

	if (emailRegistrado || email === "admin@admin.com") {
		Swal.fire({
			icon: 'error',
			text: 'El email ingresado ya se encuentra registrado',
			timer: 2000,
			toast: true,
			position: 'bottom-left',
			showConfirmButton: false,
			showClass: {
				popup: 'animate__animated animate__fadeInLeft'
			},
			hideClass: {
				popup: 'animate__animated animate__fadeOutLeft'
			}
		})
		return;
	}

	const terminos = document.getElementById('terminos');
	if (campos.nombre && campos.password && campos.correo && terminos.checked) {
		formulario.reset();

		usuarios.push({ nombre: nombre, email: email, password: password });
		localStorage.setItem('listaUsuarios', JSON.stringify(usuarios));

		Swal.fire({
			icon: 'success',
			title: 'Registro exitoso!',
			showConfirmButton: false,
			allowOutsideClick: false
		})
		let interval = setInterval(() => {
			window.location.href = "../index.html"
		}, 2000)

	} else {
		Swal.fire({
			icon: 'error',
			text: 'Por favor, complete los campos correctamente',
			timer: 2000,
			toast: true,
			position: 'bottom-left',
			showConfirmButton: false,
			showClass: {
				popup: 'animate__animated animate__fadeInLeft'
			},
			hideClass: {
				popup: 'animate__animated animate__fadeOutLeft'
			}
		})
	}
});