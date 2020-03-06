// PARAMETROS COMO REFERENCIA O COMO VALOR

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

function imprimirNombreEnMayusculas3(persona){
    // var persona.nombre.toUpperCase()
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas3(ramon)
imprimirNombreEnMayusculas3(carlos)

// modifica a ramon
function cumpleanos(persona){
    persona.edad += 1
}

// no modifica a ramon ya  que creamos esta funcion
function personaMasVieja(persona){
    return {
        ...persona,
        edad: persona.edad +1
    }
}