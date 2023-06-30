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

var btnEnviar = document.getElementById('btnEnviar').addEventListener('click', enviar);


// RegEx
var alfNumRegEx = /^[a-zA-Z0-9]+$/;
var alNuSpRegEx = /^[a-zA-Z0-9_ ]*$/;
var numRegEx = /^[0-9]+$/;
var alfRegEx = /^[a-zA-Z]+$/;
var mailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Funciones

function enviar()
{
	alert('¡Datos enviados!')
}

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
	}
}

contra.addEventListener('blur', checkContra);
contra.addEventListener('focus', hide);

function checkContra()
{
	if (!(contra.value.length >= 8 && alfNumRegEx.test(contra.value)))
	{
		show(contraAlert);
	}
}

recontra.addEventListener('blur', checkRecontra);
recontra.addEventListener('focus', hide);

function checkRecontra()
{
	if (recontra.value !== contra.value)
	{
		show(recontraAlert);
	}
}

edad.addEventListener('blur', checkEdad);
edad.addEventListener('focus', hide);

function checkEdad()
{
	if(edad.value < 18)
	{
		show(edadAlert);
	}
}

tel.addEventListener('blur', checkTel);
tel.addEventListener('focus', hide);

function checkTel()
{
	if (!(tel.value.length >= 7 && numRegEx.test(tel.value)))
	{
		show(telAlert);
	}
}

dir.addEventListener('blur', checkDir);
dir.addEventListener('focus', hide);

function checkDir()
{
	if (!(dir.value.length >= 5 && alNuSpRegEx.test(dir.value)))
	{
		show(dirAlert);
	}
}

ciudad.addEventListener('blur', checkCiudad);
ciudad.addEventListener('focus', hide);

function checkCiudad()
{
	if (ciudad.value.length < 3)
	{
		show(ciudadAlert);
	}
}


codPost.addEventListener('blur', checkCodPost);
codPost.addEventListener('focus', hide);

function checkCodPost()
{
	if (codPost.value.length < 3)
	{
		show(codPostAlert);
	}
}

dni.addEventListener('blur', checkDNI);
dni.addEventListener('focus', hide);

function checkDNI()
{
	if (!(dni.value.length >= 5 && numRegEx.test(dni.value)))
	{
		show(dniAlert);
	}
}
