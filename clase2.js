var nombre = 'Ramon', apellido = 'Ortega'

/* La funcion toUpperCase() cambia a mayusculas el string */
var nombreEnMayusculas = nombre.toUpperCase()

/* La funcion toLowerCase() cambia a minusculas el string */
var apellidoEnMinusculas = apellido.toLowerCase()

/* La funcion chartAt(x) nos da la letra donde x es la posicion donde se ubica la letra, empezando de 0*/
var primeraLetraNombre = nombre.charAt(0)

/* El atributo length nos ayuda para saber la cantidad de letras en un string */
var cantidadDeLetrasNombre = nombre.length

/* Concatenar texto /Existen dos formas, primera forma
* var nombreCompleto = nombre + ' ' + apellido -> Esta forma ya la vimos en la clase 1
* segunda forma (Algo importante de esta forma es que dentro de las llaves puede llevar codigo javascript: */

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

/* Accedemos a un substring dentro de un string con la funcion substr(x,y) donde x es donde empieza el string
* y la letra y es el numero de caracteres que tomara */

var str = nombre.substr(1, 2)


