// OBJETOS
// Las llaves declaran que es un objeto


var ramon = {
    apellido : 'Ortega',
    nombre : 'Ramon',
    edad : 25,
}

var carlos = {
    apellido : 'Ramos',
    nombre : 'Carlos',
    edad : 26,
}

/* HAREMOS DOS FUNCIONES SIMILARES/ FORMA 1:


function imprimirNombreEnMayusculas3(persona){
    nombre = persona.nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas3(ramon)
imprimirNombreEnMayusculas3(carlos)

 */

function imprimirNombreEnMayusculas3({nombre}){
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas3(ramon)
imprimirNombreEnMayusculas3(carlos)
imprimirNombreEnMayusculas3({nombre : 'Juan'}) // Accedemos a una variable nombre y le decignamos un valors