function cargarProductos() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const tablaBody = document.querySelector("#tabla-productos tbody");
  tablaBody.innerHTML = "";

  let totalProductos = 0;
  let totalCompra = 0;

  carrito.forEach((producto) => {
    const subtotal = producto.precio * producto.cantidad;
    totalProductos += producto.cantidad;
    totalCompra += subtotal;

    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.cantidad}</td>
            <td>$${producto.precio}</td>
            <td>$${subtotal}</td>
            <td><button class="eliminar-btn" onclick="eliminarProducto(${producto.id})">Eliminar</button></td>
        `;
    tablaBody.appendChild(row);
  });

  document.getElementById(
    "total-productos"
  ).innerText = `Total de productos: ${totalProductos}`;

  const tipoEntrega = localStorage.getItem("tipoEntrega");
  const totalCompraElemento = document.getElementById("total-compra");
  const domicilioElemento = document.getElementById("domicilio-info");

  if (tipoEntrega === "domicilio") {
    totalCompra += 10000;
    domicilioElemento.style.display = "block";
    totalCompraElemento.innerText = `Total de la compra (incluye domicilio): $${totalCompra}`;
  } else {
    domicilioElemento.style.display = "none";
    totalCompraElemento.innerText = `Total de la compra: $${totalCompra}`;
  }

  window.totalProductosSeleccionados = totalProductos;
  window.totalCompraActual = totalCompra;
}

function eliminarProducto(id) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito = carrito.filter((producto) => producto.id !== id);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  cargarProductos();
}

function completarCompra() {
  const numeroTarjeta = document.getElementById("numero-tarjeta").value;
  const fechaExpiracion = document.getElementById("fecha-expiracion").value;
  const cvv = document.getElementById("cvv").value;

  const cantidadMaxima = parseInt(localStorage.getItem("cantidadMaxima"), 10);
  const presupuestoMaximo = parseInt(
    localStorage.getItem("presupuestoMaximo"),
    10
  );

  const retraso = Math.floor(Math.random() * 1000) + 2000;

  alert("Procesando la compra...");

  setTimeout(() => {
    if (window.totalProductosSeleccionados > cantidadMaxima) {
      alert(
        "No se pudo completar la compra. La cantidad de productos seleccionados excede el límite permitido."
      );
      return;
    }

    if (window.totalCompraActual > presupuestoMaximo) {
      alert(
        "No se pudo completar la compra. El valor total de la compra excede el presupuesto máximo."
      );
      return;
    }

    if (
      numeroTarjeta.length === 16 &&
      fechaExpiracion.length === 5 &&
      cvv.length === 3
    ) {
      alert("¡Compra Completada!");
      localStorage.removeItem("carrito");
    } else {
      alert("Por favor, ingresa información de tarjeta válida.");
    }
  }, retraso);
}

function cancelarCompra() {
  localStorage.removeItem("carrito");
  window.location.href = "../login.html";
}

function continuarComprando() {
  window.location.href = "producto.html";
}

document
  .getElementById("numero-tarjeta")
  .addEventListener("input", function (e) {
    e.target.value = e.target.value.replace(/\D/g, "");
  });

document
  .getElementById("fecha-expiracion")
  .addEventListener("input", function (e) {
    e.target.value = e.target.value
      .replace(/[^0-9\/]/g, "")
      .replace(/^(\d{2})(\d{1,2})$/, "$1/$2");
  });

document.getElementById("cvv").addEventListener("input", function (e) {
  e.target.value = e.target.value.replace(/\D/g, "");
});

document.addEventListener("DOMContentLoaded", cargarProductos);
