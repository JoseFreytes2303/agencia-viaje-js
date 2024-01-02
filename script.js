import { barcelona, roma, paris, londres } from './ciudades.js';

//Obterner los elementos del DOM
let enlances = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

//Agregar un evento CLICK a cada enlance

enlances.forEach(function (enlance) {
    enlance.addEventListener('click', function () {
        //Remover la clase "Active" de todos los enlances
        enlances.forEach(function (enlance) {
            enlance.classList.remove('active');
        });
        //Agregar el active al enlance actual
        this.classList.add('active');

        //traer informacion del objeto correspondiente a la eleccion
        let contendido = obtenerContenido(this.textContent)
        tituloElemento.innerHTML = contendido.titulo
        subTituloElemento.innerHTML = contendido.subTitulo
        parrafoElemento.innerHTML = contendido.parrafo
        precioElemento.innerHTML = contendido.precio
    })


});
//Funcion para traer la informacion correcta desde cuidades.js
function obtenerContenido(enlance) {
    let contendido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contendido[enlance];
}

