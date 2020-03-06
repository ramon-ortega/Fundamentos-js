// Los arrays son estructuras que nos permiten organizar elementos dentro de una collección. []
// Estos elementos pueden ser números, strings, booleanos, objetos, etc.

var raundy = {
  nombre: "Raundy",
  apellido: "Ibarras",
  edad: 30,
  peso: 60,
  altura: 1.7
};

var randy = {
  nombre: "Randy",
  apellido: "Ibarras",
  edad: 8,
  peso: 20,
  altura: 1
};

var omaira = {
  nombre: "Omaira",
  apellido: "Ibarras",
  edad: 50,
  peso: 50,
  altura: 1.5
};

var jorli = {
  nombre: "Jorli",
  apellido: "Ibarras",
  edad: 8,
  peso: 25,
  altura: 1.1
};

var ramon = {
    nombre: 'Ramon',
    apellido: 'Ortega',
    edad: 25,
    peso: 75,
    altura: 1.71
};

var carlos = {
    nombre: 'Carlos',
    apellido: 'Ramos',
    edad: 25,
    peso: 40,
    altura: 1.65
};

personas = [raundy, randy, omaira, jorli, ramon, carlos]

for (var i = 0; i < personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts `)
}