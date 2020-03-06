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

// // a diferencia de la clase 11, aqui definiremos una funcion anonima
//const esMayorDeEdad = function (persona){
//        return persona.edad >= MAYORIA_EDAD
//}

// // una forma equivalente de escribir la funcion de arriba es con => donde este simbolo representa que es una funcion
//const esMayorDeEdad = persona => {
//    return persona.edad >= MAYORIA_EDAD
//}

// // OTRAS FORMAS EQUIVALENTES DE ESCRIBIR LO MISMO
//const esMayorDeEdad = persona => persona.edad >= MAYORIA_EDAD

const esMayorDeEdad = ({edad}) => edad >= MAYORIA_EDAD

function imprimeSiEsMayorDeEdad(persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es Mayor de Edad`)
    } else {
        console.log(`${persona.nombre} es Menor de Edad`)
    }
}

function accesoEdad(persona){
    if (!esMayorDeEdad(persona)){
        console.log('ACCESO DENEGADO')
    } else {
        console.log('ACCESO APROBADO')
    }
}

imprimeSiEsMayorDeEdad(ramon)
imprimeSiEsMayorDeEdad(carlos)
accesoEdad(ramon)
accesoEdad(carlos)

// Crear la function esMenorDeEdad que regrese la negacion a la llamada de esMayorDeEdad