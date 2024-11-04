function iniciarCompra() {
  const presupuesto = document
    .getElementById("presupuesto")
    .value.replace(/\D/g, "");
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const tipoEntrega = document.getElementById("tipoEntrega").value;

  if (presupuesto && cantidad > 0 && cantidad <= 20) {
    localStorage.setItem("presupuestoMaximo", presupuesto);
    localStorage.setItem("cantidadMaxima", cantidad);
    localStorage.setItem("tipoEntrega", tipoEntrega);
    window.location.href = "/html/producto.html";
  } else {
    alert(
      "Por favor, revisa que los campos de presupuesto y cantidad de artículos sean válidos."
    );
  }
}
