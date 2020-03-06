var nombre = 'Ramon', edad = 25

//Creando una funcion con function
function imprimirDatos(n,e) {
    console.log(`Hola, soy ${n} y tengo ${e} años`)
}

imprimirDatos(nombre, edad)
imprimirDatos('Vicky', 22)
imprimirDatos('Carlos', 34)
imprimirDatos(2,'Victor') // -> Javascript no reconoce las variables, es importante fijarse bien
imprimirDatos() // -> Siempre tenemos que definir los parametros en caso de que la funcion los tenga