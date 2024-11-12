let productosMostrados = 0;
const productosPorPagina = 15;

//scroll infinito y cargar los productos
function cargarProductos() {
    const container = document.getElementById("productos-container");
    const productosRestantes = productos.slice(productosMostrados, productosMostrados + productosPorPagina);

    productosRestantes.forEach(producto => {
        const productCard = document.createElement("div");
        productCard.classList.add("producto");
        productCard.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p>Disponible: ${producto.disponible}</p>
            <p>Precio: $${producto.precio}</p>
        `;
        //Al clickear un producto llama la funcion de mostrar detalle
        productCard.addEventListener("click", () => mostrarDetalleProducto(producto));
        container.appendChild(productCard);
    });
    //Se actualiza el contador y si se mostraron todos los productos muestra el mensaje
    productosMostrados += productosPorPagina;
    if (productosMostrados >= productos.length) {
        document.getElementById("fin-productos").style.display = "block";
        window.removeEventListener("scroll", handleScroll);
    }
}
//Scroll infinito
function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        cargarProductos();
    }
}

//detalles
function mostrarDetalleProducto(producto) {
    const detalleContainer = document.getElementById("detalle-producto");
    detalleContainer.innerHTML = `
        <button class="close-button" onclick="ocultarDetalleProducto()">×</button>
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <p>Disponible: ${producto.disponible}</p>
        <p>Marca: ${producto.marca}</p>
        <p>Precio: $${producto.precio}</p>
        <p>Tipo: ${producto.tipo}</p>
        <label for="cantidad">Cantidad:</label>
        <input type="number" id="cantidad-${producto.id}" min="1" value="1" oninput="validarCantidad(this)">
        <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
    `;
    detalleContainer.style.display = "block";
}

function ocultarDetalleProducto() {
    const detalleContainer = document.getElementById("detalle-producto");
    detalleContainer.style.display = "none";
}


function validarCantidad(input) {
    input.value = input.value < 1 ? 1 : input.value; //Coloca 1 si es menor
}


function agregarAlCarrito(id) {
    const cantidad = parseInt(document.getElementById(`cantidad-${id}`).value);
    const producto = productos.find(p => p.id === id);
    
    if (producto) {
        if (cantidad > producto.disponible) {
            alert(`No se puede agregar al carrito. La cantidad solicitada (${cantidad}) excede la cantidad disponible (${producto.disponible}).`);
            return;
        }

        const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.push({ ...producto, cantidad: cantidad });
        localStorage.setItem("carrito", JSON.stringify(carrito));
        alert("Producto agregado al carrito");
    }
}


function completarCompra() {
    window.location.href = "carrito.html";
}


function cancelarCompra() {
    window.location.href = "../login.html";
}

//filtros
function aplicarFiltros() {
    const marcaInput = document.getElementById("filter-marca").value.toLowerCase();
    const tipo = document.getElementById("filter-tipo").value;

    productosMostrados = 0;
    document.getElementById("productos-container").innerHTML = ""; 
    const productosFiltrados = productos.filter(producto => 
        (!marcaInput || producto.marca.toLowerCase().includes(marcaInput)) && 
        (!tipo || producto.tipo === tipo)
    );

    productosMostrados += productosFiltrados.length;
    productosFiltrados.forEach(producto => {
        const productCard = document.createElement("div");
        productCard.classList.add("producto");
        productCard.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p>Marca: ${producto.marca}</p>
            <p>Precio: $${producto.precio}</p>
        `;
        productCard.addEventListener("click", () => mostrarDetalleProducto(producto));
        document.getElementById("productos-container").appendChild(productCard);
    });
}


function limpiarFiltros() {
    document.getElementById("filter-marca").value = "";
    document.getElementById("filter-tipo").value = "";
    productosMostrados = 0;
    document.getElementById("productos-container").innerHTML = "";
    cargarProductos();
}

document.addEventListener("DOMContentLoaded", () => {
    cargarProductos();
    window.addEventListener("scroll", handleScroll);
});
