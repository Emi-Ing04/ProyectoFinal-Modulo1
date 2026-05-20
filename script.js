// 1. Conectamos con el tablero HTML
let inputLibro = document.getElementById('inputLibro');
let btnAgregar = document.getElementById('btnAgregar');
let listaLibros = document.getElementById('listaLibros');

// 2. Activamos el sensor del botón
btnAgregar.addEventListener('click', function() {
    
    let textoLibro = inputLibro.value;
    
    // Compuerta de seguridad para no agregar registros vacíos
    if (textoLibro === "") {
        alert("Por favor, escribe el nombre del libro o un comentario.");
        return; 
    }

    // 3. Fabricamos el nuevo bloque de registro
    let nuevoRegistro = document.createElement('div');
    
    // Obtenemos la fecha exacta
    let fechaHora = new Date().toLocaleString();

    // 4. Ensamblamos las piezas (Texto, Fecha y Botón de eliminar)
    nuevoRegistro.innerHTML = `
        <p><strong>[Agregado el: ${fechaHora}]</strong> 📖 ${textoLibro}</p>
        <button class="btnEliminar" style="color: red;">Eliminar registro</button>
        <hr>
    `;

    // 5. Configuramos el botón de eliminar de esta pieza específica
    let botonEliminar = nuevoRegistro.querySelector('.btnEliminar');
    botonEliminar.addEventListener('click', function() {
        nuevoRegistro.remove(); 
    });

    // 6. Atornillamos el bloque a la lista principal en la pantalla
    listaLibros.appendChild(nuevoRegistro);

    // 7. Limpiamos la banda de entrada para el próximo libro
    inputLibro.value = "";
});