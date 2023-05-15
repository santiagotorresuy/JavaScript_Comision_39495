//ELEMENTOS DEL DOM
const containerCartas = document.querySelector("#containerCartas");
const btnFiltroCategoria = document.querySelectorAll(".nav-tienda-ul-li");
const inputNavBar = document.getElementById("navBarPokedex");
const btnPokedex = document.getElementById("btnPokedex");

//ARRAYS
let  objetosPokemonCartas = [];

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
            <form action="" class="form-agregar-carrito">
                <input type="text" class="input-agregar-carrito">
                <button class="btn-agregar-carrito">Agregar al carrito</button>
            </form>
        `;containerCartas.appendChild(div);
    })
}

function crearCartasObjetos(data){
    data.forEach((objeto) => objetosPokemonCartas.push(objeto))
    cuerpoCarta(objetosPokemonCartas)
};

async function mostrarObjetos(){
    objetosPokemonCartas = await fetch("../objetosPokemon.json")
        .then((response) => {
            if (response.ok){
                return response.json();
            }
        })
        .then((objetos) => crearCartasObjetos(objetos))  
};


    



//CODIGO

document.addEventListener("DOMContentLoaded", () =>{
    mostrarObjetos();
    cargarCartaPokemon();
})


btnFiltroCategoria.forEach((btn) => btn.addEventListener("click", (e) =>{
    e.preventDefault();

    const btnNombre = e.currentTarget.nombre;
    containerCartas.innerHTML = ``
    
    if(btnNombre === "todos"){
        mostrarObjetos()
    }else{
        const objetosFiltrados = objetosPokemonCartas.filter(objeto => objeto.nombre === btnNombre)
        cuerpoCarta(objetosFiltrados);
    }
}));


function cargarCartaPokemon(){
    inputNavBar.addEventListener("change", (e) => {
        let nombreObjeto = e.value.toLowerCase();
        return nombreObjeto;
    })
}


