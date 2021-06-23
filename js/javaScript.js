
/******* Arreglo & Objeto para Datos Formulario ********/

var datos = [];
var datosBusqueda = [];
var formulario = new Object();
var formularioBusqueda = new Object();

/*******************************************************/
/********************** Validaciones *******************/
/*******************************************************/

function validaOrigen() {
    var origen = document.getElementById('origen').value;
    let regex_letras = /^[A-Za-z]+$/;

    if (origen.length <= 0 || !regex_letras.test(origen)) {
        alert('Debe Ingresar Origen Valido');
    } else if (nombre.length <= 1) {
        alert('Origen no encontrado');
    } else {
        formularioBusqueda['Origen'] = origen;
        datosBusqueda.push(formularioBusqueda);
    }
}

function validaDestino() {
    var destino = document.getElementById('destino').value;
    let regex_letras = /^[A-Za-z]+$/;

    if (destino.length <= 0 || !regex_letras.test(destino)) {
        alert('Debe Ingresar destino Valido');
    } else if (nombre.length <= 1) {
        alert('Destino no encontrado');
    } else {
        formularioBusqueda['Destino'] = destino;
        datosBusqueda.push(formularioBusqueda);
    }
}

function validaFechaDesde() {
    var desde = document.getElementById('desde').value;
    var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;

    if ( desde== null || desde.length == 0 || !(date_regex.test(desde))){
        alert('No se ha indicado la fecha Desde');
    } else {
        formularioBusqueda['Desde'] = desde;
        datosBusqueda.push(formularioBusqueda);
    }
}

function validaFechaHasta() {
    var hasta = document.getElementById('hasta').value;
    var date_regex = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;

    if ( hasta== null || desde.length == 0 || !(date_regex.test(hasta))){
        alert('No se ha indicado la fecha Hasta');
    } else {
        formularioBusqueda['Hasta'] = hasta;
        datosBusqueda.push(formularioBusqueda);
    }
}

function validaNombre() {
    var nombre = document.getElementById('nombre').value;
    let regex_letras = /^[A-Za-z]+$/;

    if (nombre.length <= 0 || !regex_letras.test(nombre)) {
        alert('Debe Ingresar Nombre Valido');
    } else if (nombre.length <= 1) {
        alert('Nombre no valido');
    } else {
        formulario['Nombre'] = nombre;
        datos.push(formulario);
    }
}

function validaPaterno() {
    var paterno = document.getElementById('paterno').value;
    let regex_letras = /^[A-Za-z]+$/;


    if (paterno.length <= 0 || !regex_letras.test(paterno)) {
        alert('Debe Ingresar Apellido Paterno Valido');
    } else {
        formulario['ApellidoPaterno'] = paterno;
        datos.push(formulario);
    }

}

function validaMaterno() {
    var materno = document.getElementById('materno').value;
    let regex_letras = /^[A-Za-z]+$/;

    if (materno.length <= 0 || !regex_letras.test(materno)) {
        alert('Debe Ingresar Apellido Materno Valido');
    } else {
        formulario['ApellidoMaterno'] = materno;
        datos.push(formulario);
    }
}

function validaCorreo() {
    var correo = document.getElementById('email').value;
    let regex_correo = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

    if (!regex_correo.test(correo)) {
        alert('Ingrese Correo Valido!');
    } else {
        formulario['Email'] = correo;
        datos.push(formulario);
    }
}

function validaTelefono() {
    var telefono = document.getElementById('telefono').value;
    let regex_celulares = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (!regex_celulares.test(telefono)) {
        alert('Ingrese Telefono Valido!');
    } else {
        formulario['Telefono'] = telefono;
        datos.push(formulario);
    }

}

/********************************************************************/
/********************** Muestra Contenido Arreglo *******************/
/********************************************************************/

function buscaFormulario() {
    datosBusquedaos.push(formularioBusqueda);
    console.log(datosBusqueda);
}

function guardaFormulario() {
    formulario['Dirección'] = document.getElementById('direccion').value;
    datos.push(formulario);
    console.log(datos);
}