//ELEMENTOS DEL DOM
const containerCartas = document.querySelector("#containerCartas");
const btnFiltroCategoria = document.querySelectorAll(".nav-tienda-ul-li");
const inputNavBar = document.getElementById("navBarPokedex");
const formTienda = document.getElementById("formPokedex");


//CARRITO

let carritoCompras = [];

//FUNCIONES
cargarObjetoCarrito = (e) => {
    if(e.target.classList.contains("btn-agregar-carrito")){
        e.preventDefault();
        const cartaObjeto = e.target.parentElement.parentElement;
        agregarObjetoCarrito(cartaObjeto);
    }
}

agregarObjetoCarrito = (elemento) =>{
    let nombreObjeto = elemento.querySelector("h4").textContent.toUpperCase();
    let cantidadAComprar = elemento.querySelector("#objetoTiendaCantidad").value;
    let objetoFiltrado = objetosPokemon.filter(objeto => objeto.nombre.toUpperCase() == nombreObjeto);

    if(cantidadAComprar <= 99){
        carritoCompras.push(objetoFiltrado);
        localStorage.setItem("carrito", carritoCompras);

        alert("Objeto agregado exitosamente!");
    }else{
        alert("No hay más unidades en stock");
    }
};

cargarNombreObjeto = () => {
    let nombreObjeto = inputNavBar.value.toUpperCase();
    return nombreObjeto
};

filtrarObjetosPorNombre = () => {
    cargarNombreObjeto();
    nombreObjeto = cargarNombreObjeto();  
    let objetosFiltradosNombre = objetosPokemon.filter(objeto => objeto.nombre.toUpperCase() == nombreObjeto);

    cuerpoCarta(objetosFiltradosNombre);
}

function cuerpoCarta(lista){
    containerCartas.innerHTML = ``;

    lista.forEach(obj =>{
        const div = document.createElement("div");
        div.classList.add("carta-producto");
    
        div.innerHTML = `
            <h4 class="titulo-carta">${obj.nombre}</h4>
            <img src="${obj.img}" alt="">
            <p class="carta-precio">${obj.precio} ¥</p>
            <form action="" class="form-agregar-carrito" id="formAgregarAlCarrito">
                <input type="text" class="input-agregar-carrito" id="objetoTiendaCantidad" value="1">
                <button class="btn-agregar-carrito" id="btnAgregarAlCarrito">Agregar al carrito</button>
            </form>
        `;containerCartas.appendChild(div);
    })
}

async function mostrarObjetos(){
    objetosPokemon = await fetch("../objetosPokemon.json")
        .then((response) => {
            if (response.ok){
                return response.json();
            }
        });
        cuerpoCarta(objetosPokemon);

    //EVENTOS PARA FILTROS Y NAVBAR
    inputNavBar.addEventListener("change", cargarNombreObjeto); 
    formTienda.addEventListener("submit", (e) => {
        e.preventDefault();
        filtrarObjetosPorNombre();
    });
};

//CODIGO TIENDA

document.addEventListener("DOMContentLoaded", () =>{
    mostrarObjetos();

    btnFiltroCategoria.forEach((btn) => btn.addEventListener("click", (e) =>{    
        const btnId = e.currentTarget.id;
        let objetosFiltradosCategoria = objetosPokemon.filter(objeto => objeto.categoria == btnId)

        if(btnId === "todos"){
            mostrarObjetos()
        }else{
            cuerpoCarta(objetosFiltradosCategoria);
        }
    }));

    containerCartas.addEventListener("click", cargarObjetoCarrito);
});



















