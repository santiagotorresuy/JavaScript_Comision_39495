const carrito = localStorage.getItem("carrito");
let avisoIconoCarrito = document.querySelector("#avisoCarrito")

if(carrito == []){
    avisoIconoCarrito.classList.add("d-none");
}