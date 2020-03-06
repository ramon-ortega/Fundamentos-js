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

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} tiene las siguientes profesiones:`)
    if (persona.ingeniero){
        console.log('Ingeniero')
    }else{
        console.log('No es ingeniero')
    }

    if (persona.fisico){
        console.log('Fisico')
    }
    if (persona.guitarrista){
        console.log('Guitarrista')
    }
    if (persona.cocinero){
        console.log('Cocinero')
    }
    if (persona.dj){
        console.log('DJ')
    }
}

imprimirProfesiones(ramon)