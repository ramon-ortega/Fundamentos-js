var ramon = {
    nombre: 'Ramon',
    apellido: 'Ortega',
    edad: 25,
    ingeniero: false,
    fisico: true,
    guitarrista: true,
    cocinero: false,
    dj: false,
}

var carlos = {
    nombre: 'Carlos',
    apellido: 'Ramos',
    edad: 13,
}

// const sirve para declarar constantes

const MAYORIA_EDAD = 18

function esMayorDeEdad(persona){
        return persona.edad >= MAYORIA_EDAD
}

function imprimeSiEsMayorDeEdad(persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es Mayor de Edad`)
    } else {
        console.log(`${persona.nombre} es Menor de Edad`)
    }
}

imprimeSiEsMayorDeEdad(ramon)
imprimeSiEsMayorDeEdad(carlos)