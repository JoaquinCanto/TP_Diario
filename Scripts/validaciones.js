//Selectores
window.addEventListener('DOMContentLoaded', () => {
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


	var btnEnviar = document.getElementById('btnEnviar').addEventListener('click', enviar);
})

// Funciones

var enviar = function()
{

}

nombre.addEventListener('blur', checkNombre);

var checkNombre = function()
{
	if (!(nombre.value.lenght < 6 && nombre.value.includes(' ')))
	{
		nombreAlert.style.display(' ');
		nombreAlert.value = 'testing';
	}
}

email.addEventListener('blur', checkEmail);

var checkEmail = function()
{

}

contra.addEventListener('blur', checkContra);

var checkContra = function()
{

}

recontra.addEventListener('blur', checkRecontra);

var checkRecontra = function()
{

}

edad.addEventListener('blur', checkEdad);

var checkEdad = function()
{

}

tel.addEventListener('blur', checkTel);

var checkTel = function()
{

}

dir.addEventListener('blur', checkDir);

var checkDir = function()
{

}

ciudad.addEventListener('blur', checkCiudad);

var checkCiudad = function()
{

}


codPost.addEventListener('blur', checkCodPost);

var checkCodPost = function()
{

}

dni.addEventListener('blur', checkDNI);

var checkDNI = function()
{

}