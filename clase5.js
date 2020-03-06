nombre = 'Ramon' //Variable global

/*
// Toma la variable nombre como variable global y se modificar la variable global
function imprimirNombreEnMayusculas(){
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas()
*/

/*
// Definimos una variable local n para la funcion y seguimos teniendo la variable global nombre sin modificar
function imprimirNombreEnMayusculas2(n){
    n = nombre.toUpperCase()
    console.log(n)
}

imprimirNombreEnMayusculas2(nombre)
*/

// Podemos usar la variable global nombre sin modificarla haciendola variable local en la funcion
function imprimirNomnreEnMayusculas3(nombre){
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNomnreEnMayusculas3(nombre)