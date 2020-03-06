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

function esMayorDeEdad(persona){
    if (persona.edad >= 18){
        console.log(`${persona.nombre} es Mayor de Edad`)
    } else {
        console.log(`${persona.nombre} es Menor de Edad`)
    }
}

esMayorDeEdad(ramon)