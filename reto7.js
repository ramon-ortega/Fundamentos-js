// RETO 7

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

function ImprimeNombreYEdad(persona){
    // Hola me llamo Ramon y tengo 25 años
    // Hola me llamo Carlos y tengo 26 años
    var { nombre } = persona, { edad } = persona
    // tambien puedes hacer, {nombre, edad} = persona
    console.log(`Hola, me llamo  ${nombre} y tengo ${edad}`)
}

ImprimeNombreYEdad(ramon)
ImprimeNombreYEdad(carlos)