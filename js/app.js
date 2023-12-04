function numeroAdivinar() {
    var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    console.log("Entro a la funcion");
    let numeroIngresado = parseInt(prompt('Ingresa tu numero para ver si adivinas(Del 1 al 10): '));

    if (numeroIngresado == numeroAleatorio) {
        alert('El numero ingresado es igual al numero magico, Felicidades!!');
    } else{
        if (numeroIngresado > numeroAleatorio) {
            alert('el numero que ingreso es mayor al número mágico.');
        } else {
            alert('el numero que ingreso es menor al número mágico.');
        }
    }
}