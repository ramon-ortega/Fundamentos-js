// Una ultima estructura de control se llama switch. Switch se utiliza para realizar diferentes acciones basadas en múltiples condiciones.
// Prompt, muestra un cuadro de mensaje que le pide al usuario que ingrese algúna información.
// Break, sirve para que el browser se salte un bucle.

var signo = prompt('¿Cuál es su signo zodiacal')

switch (signo){
    case 'cancer':
    case 'cáncer':
        console.log('No deberá sentirse tan seguro respecto a un amigo. Luchará contra un problema íntimo y cambiará de opinión varias veces antes de la decisión definitiva.')
        break
    case 'piscis':
        console.log('Pensamientos inspirados. Se mostrará claro, convincente y tendrá muchas ideas nuevas. Bueno para escritores, comerciantes y conferencistas.')
        break
    case 'aries':
        console.log('En el mes que viene tomará una decisión importante respecto a una relación. Tendrá más tiempo para dedicar a su pareja. Preocupación por una tarea.')
        break
    case 'tauro':
        console.log('Podrá revisar una tarea creativa. Tendrá nuevos puntos de vista. Posibles avances significativos en el mes que viene respecto al trabajo.')
        break
    case 'geminis':
    case 'géminis':
        console.log('Momento para ponerse en comunicación con los demás y para expresarse creativamente. Se mostrará descuidado con relación al dinero por la noche.')
        break
    case 'leo':
        console.log('Podrá encontrar algo especial al ir de compras en las próximas semanas, pero deberá evitar correr riesgos financieros innecesarios. Cuide su dinero.')
        break
    case 'libra':
        console.log('Estará más bien susceptible y se ofenderá con facilidad. No se deje ganar por el mal humor. Una cuestión en su vida amorosa le tendrá preocupado.')
        break
    case 'virgo':
        console.log('Encontrará la forma de mejorar su apariencia en las semanas venideras. En resumen, se cuidará más. Buen momento en lo laboral, aunque con sorpresas.')
        break
    case 'escorpion':
    case 'escorpión':
        console.log('Su pareja estará preocupado y no será la mejor compañía. Algunos planes domésticos quedarán en suspenso. Manténgase en comunicación con los demás.')
        break
    case 'sagitario':
        console.log('Salir con su pareja será buena idea, si no gasta demasiado. Sus perspectivas laborales mejorarán notablemente. Oportunidad de ganancia financiera.')
        break
    case 'capricornio':
        console.log('Hacer sus tareas hogareñas será una de sus prioridades. Más tarde estará de humor para salir a divertirse. Momento muy feliz en el plano del amor.')
        break
    case 'acuario':
        console.log('Tomará algunas decisiones importantes en relación con el hogar. Podrá encontrar algo fuera de lo común al ir de compras. Favorable para lo financiero.')
        break
    default:
        console.log('No entendi tu signo zodiacal')
        break
}