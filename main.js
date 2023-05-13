window.onload = function() {
    cargarEntradas();
}

function agregarEntrada() {
    var fecha = document.getElementById('fecha').value;
    var ubicacion = document.getElementById('ubicacion').value;
    var precio = document.getElementById('precio').value;

    // Validar que todos los campos estén completos
    var fechaInput = document.getElementById('fecha');
    var ubicacionInput = document.getElementById('ubicacion');
    var precioInput = document.getElementById('precio');

    if (!fechaInput.checkValidity() || !ubicacionInput.checkValidity() || !precioInput.checkValidity()) {
        // Si hay campos vacíos, mostrar un mensaje de error
        alert('Por favor complete todos los campos');
        return;
    }

    var entrada = {
        fecha: fecha,
        ubicacion: ubicacion,
        precio: precio
    };

    var entradas = JSON.parse(localStorage.getItem('entradas')) || [];

    entradas.push(entrada);

    localStorage.setItem('entradas', JSON.stringify(entradas));

    document.getElementById('fecha').value = '';
    document.getElementById('ubicacion').value = '';
    document.getElementById('precio').value = '';

    cargarEntradas();
}

function cargarEntradas() {
    var entradas = JSON.parse(localStorage.getItem('entradas')) || [];

    var tarjetasContainer = document.getElementById('tarjetas-container');

    tarjetasContainer.innerHTML = '';

    for (var i = 0; i < entradas.length; i++) {
        var entrada = entradas[i];

        var tarjeta = document.createElement('div');
        tarjeta.className = 'card mb-3';
        tarjeta.style.marginRight = '20px'; // Agrega margen derecho
        tarjeta.style.marginTop = '20px'; // Agrega margen arriba
        tarjeta.innerHTML = `
            <div class="card-body" style="margin: 20px">
                <h5 class="card-title">Fecha: ${entrada.fecha}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Ubicación: ${entrada.ubicacion}</h6>
                <p class="card-text">Precio: ${"$" + entrada.precio}</p>
                <a href="https://www.ejemplo.com/compra?entrada=${i}" class="btn btn-primary">Comprar</a>
            </div>
        `;

        tarjetasContainer.appendChild(tarjeta);
    }
}

function comprarEntrada(index) {
    // Aquí puedes agregar la lógica para la compra de la entrada
    // Puedes acceder a la entrada específica utilizando el índice proporcionado
    // por ejemplo: var entrada = entradas[index];
    console.log('Comprar entrada:', index);
}

function eliminarEntrada(index) {
    var entradas = JSON.parse(localStorage.getItem('entradas')) || [];

    entradas.splice(index, 1);

    localStorage.setItem('entradas', JSON.stringify(entradas));

    cargarEntradas();
}

function limpiarLocalStorage() {
    localStorage.removeItem('entradas');

    cargarEntradas();
}
