function obtenerUsuario() {
    let input;
    do {
        input = prompt("Ingrese la cantidad de pesos argentinos:");
    } while (input === null || input.trim() === ""); // Se sigue pidiendo hasta que se ingrese algo
    return parseFloat(input);
}

function convertirPesosADolares() {
    const tipoCambio = 0.011; // Tipo de cambio actual (1 peso argentino = 0.011 dólares)
    const pesosArgentinos = obtenerUsuario();
    
    if (!isNaN(pesosArgentinos)) {
        const dolares = pesosArgentinos * tipoCambio;
        mostrarResultado(pesosArgentinos, dolares);
    } else {
        alert("Por favor, ingrese un número válido.");
    }
}

function mostrarResultado(pesos, dolares) {
    alert(`${pesos} pesos argentinos equivalen a ${dolares.toFixed(2)} dólares.`);
}

convertirPesosADolares();