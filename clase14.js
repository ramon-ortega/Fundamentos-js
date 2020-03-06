var ramon = {
    nombre: 'Ramon',
    apellido: 'Ortega',
    edad: 25,
    peso: 75
}

console.log (`Al inicio del año ${ramon.nombre} pesa ${ramon.peso}kg`)

const PESO = 0.3
const DIAS_DEL_ANIO = 365

//function subirDePeso(persona){
//    return persona.peso += 0.3
//}
const subirDePeso = persona => persona.peso += PESO
const bajarDePeso = persona => persona.peso -= PESO
const seAlimento = () => Math.random() < 0.25
const haceEjercicio = () => Math.random() < 0.4

const META = ramon.peso -3

var dias = 0

while (ramon.peso > META){
    if (seAlimento()){
        subirDePeso(ramon)
    } else if (haceEjercicio()){
        bajarDePeso(ramon)
    }
    dias += 1
}

/* En ocasiones nuestro código puede fallar por errores de syntaxis o errores lógicos.
 En caso de que quieras verificar tu código, debes utilizar un debugger.
 El código se detiene cada vez que lee esta palabra. */

console.log (`Al final pasaron ${dias} dias para que ${ramon.nombre} pesara ${ramon.peso.toFixed(2)}kg`)