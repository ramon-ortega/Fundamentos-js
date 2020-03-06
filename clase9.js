var x = 4, y = '4'

// Al comparar en consola (==) con doble igual, este iguala las variables
// Al comparar con (===) es la mejor forma de realizar operaciones ya que no iguala el tipo de variable

// De esta forma los objetos son distintos ya que se guardan en distintos lugares
var ramon = {
    nombre: 'ramon'
}

var otraPersona = {
    nombre: 'ramon'
}

// De esta forma los objetos son iguales ya que estan entrelazados

var ramon = {
    nombre: 'ramon'
}

var otraPersona = ramon