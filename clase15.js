var contador = 0

const llueve = () => Math.random() < 0.25

do {
    contador++
} while (!llueve())

if (contador === 1){
    console.log(`fui ${contador} vez para ver si llueve`)
} else {
    console.log(`fui ${contador} veces para ver si llueve`)
}
