//Selectores
var nombre = document.getElementById('nombreC');
var nombreAlert = document.getElementById('nombreAlert');

var email = document.getElementById('email');
var emailAlert = document.getElementById('emailAlert');

var contra = document.getElementById('contraseña');
var contraAlert = document.getElementById('contraAlert');

var recontra = document.getElementById('reContraseña');
var recontraAlert = document.getElementById('recontraAlert');

var edad = document.getElementById('edad');
var edadAlert = document.getElementById('edadAlert');

var tel = document.getElementById('telefono');
var telAlert = document.getElementById('telAlert');

var dir = document.getElementById('direccion');
var dirAlert = document.getElementById('dirAlert');

var ciudad = document.getElementById('ciudad');
var ciudadAlert = document.getElementById('ciudadAlert');

var codPost = document.getElementById('codPost');
var codPostAlert = document.getElementById('codPostAlert');

var dni = document.getElementById('DNI');
var dniAlert = document.getElementById('dniAlert');

var hola = document.getElementById('hi');

var btnEnviar = document.getElementById('Enviar');
var modal = document.getElementById('modal');
var btnCerrar = document.getElementById('cerrar');
var mensaje = document.getElementById('mensajeModal');


// RegEx
var alfNumRegEx = /^[a-zA-Z0-9]+$/;
var alNuSpRegEx = /^[a-zA-Z0-9_ ]*$/;
var numRegEx = /^[0-9]+$/;
var alfRegEx = /^[a-zA-Z]+$/;
var mailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Funciones

function hide(id)
{
	var next = id.currentTarget.nextElementSibling;
	if (next.style.visibility !== 'hidden')
	{
		next.style.visibility = 'hidden';
	}
}

function show(id)
{
	id.style.visibility = 'visible';
}

nombre.addEventListener('blur', checkNombre);
nombre.addEventListener('focus', hide);

function checkNombre()
{
	if (!(nombre.value.length > 6 && nombre.value.includes(' ')))
	{
		show(nombreAlert);
		return false;
	}
	else
	{
		return true;
	}
}

nombre.addEventListener('input', updateHi);

function updateHi()
{
	if (nombre.value === '')
	{
		hola.textContent = '¡Hola!'
	}
	else
	{
		hola.textContent = '¡Hola ' + nombre.value + '!';
	}	
}

email.addEventListener('blur', checkEmail);
email.addEventListener('focus', hide);

function checkEmail()
{
	if (!(mailRegEx.test(email.value)))
	{
		show(emailAlert);
		return false;
	}
	else
	{
		return true;
	}
}

contra.addEventListener('blur', checkContra);
contra.addEventListener('focus', hide);

function checkContra()
{
	if (!(contra.value.length >= 8 && alfNumRegEx.test(contra.value)))
	{
		show(contraAlert);
		return false;
	}
	else
	{
		return true;
	}
}

recontra.addEventListener('blur', checkRecontra);
recontra.addEventListener('focus', hide);

function checkRecontra()
{
	if (recontra.value !== contra.value)
	{
		show(recontraAlert);
		return false;
	}
	else
	{
		return true;
	}
}

edad.addEventListener('blur', checkEdad);
edad.addEventListener('focus', hide);

function checkEdad()
{
	if(edad.value < 18)
	{
		show(edadAlert);
		return false;
	}
	else
	{
		return true;
	}
}

tel.addEventListener('blur', checkTel);
tel.addEventListener('focus', hide);

function checkTel()
{
	if (!(tel.value.length >= 7 && numRegEx.test(tel.value)))
	{
		show(telAlert);
		return false;
	}
	else
	{
		return true;
	}
}

dir.addEventListener('blur', checkDir);
dir.addEventListener('focus', hide);

function checkDir()
{
	if (!(dir.value.length >= 5 && alNuSpRegEx.test(dir.value)))
	{
		show(dirAlert);
		return false;
	}
	else
	{
		return true;
	}
}

ciudad.addEventListener('blur', checkCiudad);
ciudad.addEventListener('focus', hide);

function checkCiudad()
{
	if (ciudad.value.length < 3)
	{
		show(ciudadAlert);
		return false;
	}
	else
	{
		return true;
	}
}


codPost.addEventListener('blur', checkCodPost);
codPost.addEventListener('focus', hide);

function checkCodPost()
{
	if (codPost.value.length < 3)
	{
		show(codPostAlert);
		return false;
	}
	else
	{
		return true;
	}
}

dni.addEventListener('blur', checkDNI);
dni.addEventListener('focus', hide);

function checkDNI()
{
	if (!(dni.value.length >= 5 && numRegEx.test(dni.value)))
	{
		show(dniAlert);
		return false;
	}
	else
	{
		return true;
	}
}

btnEnviar.addEventListener('click', enviar);
btnCerrar.addEventListener('click', cerrar);

var alerta;
function enviar()
{
	if (checkNombre() && checkEmail() && checkContra() && checkRecontra() && checkEdad() && checkTel() && checkDir() && checkCiudad() && checkCodPost() && checkDNI())
	{
		
		alerta = 'Nombre: ' + nombre.value + "\nEmail: " + email.value + '\nContraseña: ' + contra.value + '\nEdad: ' + edad.value + '\nTelefono: ' + tel.value + '\nDireccion: ' 
		+ dir.value + '\nCiudad: ' + ciudad.value + '\nCodigo Postal: ' + codPost.value + '\nDNI: ' + dni.value;
		console.log(alerta);
		fetch('https://jsonplaceholder.typicode.com/todos', 
		{
			method: 'GET',
		})
		.then(response => {
		if (!response.ok) {
			throw new Error('¡El servidor no responde!');
			}
			console.log(response);
			return response;
		})
		.then(data => {
			console.log('Correcto:');
			mensaje.textContent ='¡Suscripción Exitosa!\n\n' + alerta;
			modal.style.display = 'block'; // Mostrar el modal
		})
        .catch(error => {
            // Mostrar mensaje de error en el modal
            mensaje.textContent = 'Ocurrió un error al procesar la solicitud' + error;
            modal.style.display = 'block'; // Mostrar el modal
        });
    }else{
        alert("Por favor, complete todos los campos correctamente antes de enviar el formulario.");
    }
}

function cerrar()
{
	modal.style.display = 'none';
}
