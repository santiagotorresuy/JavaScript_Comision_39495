//ELEMENTOS DEL DOM
const containerCartas = document.querySelector("#containerCartas");
const btnFiltroCategoria = document.querySelectorAll(".nav-tienda-ul-li");
const inputNavBar = document.getElementById("navBarPokedex");
const formTienda = document.getElementById("formPokedex");

//CARRITO

let carritoCompras = [];

//FUNCIONES

function cuerpoCarta(lista){
    containerCartas.innerHTML = ``;

    lista.forEach(obj =>{
        const div = document.createElement("div");
        div.classList.add("carta-producto");
    
        div.innerHTML = `
            <p class="titulo-carta">${obj.nombre}</p>
            <img src="${obj.img}" alt="">
            <p class="carta-precio">${obj.precio} ¥</p>
            <form action="" class="form-agregar-carrito" id="formAgregarAlCarrito">
                <input type="text" class="input-agregar-carrito">
                <button class="btn-agregar-carrito" id="btnAgregarAlCarrito">Agregar al carrito</button>
            </form>
        `;containerCartas.appendChild(div);
    })
}

cargarNombreObjeto = () => {
    let nombreObjeto = inputNavBar.value.toUpperCase();
    return nombreObjeto
}

async function mostrarObjetos(){
    objetosPokemonCartas = await fetch("../objetosPokemon.json")
        .then((response) => {
            if (response.ok){
                return response.json();
            }
        })

    cuerpoCarta(objetosPokemonCartas);

    inputNavBar.addEventListener("change", cargarNombreObjeto); 

    console.log(objetosPokemonCartas)

    formTienda.addEventListener("submit", (e) => {
        e.preventDefault();
        cargarNombreObjeto();
        nombreObjeto = cargarNombreObjeto();
        console.log(nombreObjeto)
  
        let objetosFiltradosNombre = objetosPokemonCartas.filter(objeto => objeto.nombre.toUpperCase() == nombreObjeto)
        cuerpoCarta(objetosFiltradosNombre)
    })
};

//CODIGO 

document.addEventListener("DOMContentLoaded", () =>{
    mostrarObjetos();

    btnFiltroCategoria.forEach((btn) => btn.addEventListener("click", (e) =>{    
        const btnId = e.currentTarget.id;
        let objetosFiltradosCategoria = objetosPokemonCartas.filter(objeto => objeto.categoria == btnId)

        if(btnId === "todos"){
            mostrarObjetos()
        }else{
            cuerpoCarta(objetosFiltradosCategoria);
        }
    }));
})




let btnCarrito = document.getElementById("btnCarrito")
















