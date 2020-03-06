var edad = 25

/* Incremento
 forma 1: edad = edad +1
 forma 2:
 */

edad += 1

var peso = 75

/* Decremento
 forma 1: peso = peso -1
 forma 2:
 */

peso -= 1

var sandwich = 1

peso += sandwich

var jugarFutbol = 3

peso -= jugarFutbol

console.log(peso)

// Cabe recordar que la variable se actualiza en cada linea.
// ¿Que pasa con numeros con decimales?

var precioDeVino = 200.3

// var total = precioDeVino * 3 -> De esta forma nos dara un numero con decimales que no es tan preciso
// var total = precioDeVino * 100 * 3 /100 -> de esta forma nos da el numero correcto pero no es la mejor forma de hacerlo
// Presentamos la  mejor forma de realizarlo usando el modulo Math y usando round  para redondear

var total = Math.round(precioDeVino * 100 * 3) / 100

//Para mostrar mas decimales despues de la cuenta usamos toFixed(x) donde x es el numero de decimales a mostrar

var totalStr = total.toFixed(2) // Pero esto es un string

// Para pasar totalStr a un numero lo que usamos es la funcion parseFloat(x) x nombre de la variable a pasar a entero

var total2 = parseFloat(totalStr)

// DIVISION

var rebanadasDePizza = 8

var personas = 4

var CantidadDePizzaPorPersonas = rebanadasDePizza / personas