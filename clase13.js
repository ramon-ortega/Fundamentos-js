var ramon = {
    nombre: 'Ramon',
    apellido: 'Ortega',
    edad: 25,
    peso: 75
}

console.log (`Al inicio del año ${ramon.nombre} pesa ${ramon.peso}kg`)

const PESO = 0.2
const DIAS_DEL_ANIO = 365

//function subirDePeso(persona){
//    return persona.peso += 0.2
//}
const subirDePeso = persona => persona.peso += PESO
const bajarDePeso = persona => persona.peso -= PESO

for (var i = 1; i <= DIAS_DEL_ANIO; i++){
    var random = Math.random()
    if (random < 0.25) {
        // Bajar de peso
        bajarDePeso(ramon)
    } else if (random < 0.5) {
        // Sube de peso
        subirDePeso(ramon)
    }
}

console.log (`Al final del año ${ramon.nombre} pesa ${ramon.peso.toFixed(2)}kg`)