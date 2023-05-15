//ELEMENTOS DEL DOM
const containerCartas = document.querySelector("#containerCartas");
const btnFiltroCategoria = document.querySelectorAll(".nav-tienda-ul-li");
const inputNavBar = document.getElementById("navBarPokedex");
const btnPokedex = document.getElementById("btnPokedex");
console.log(inputNavBar)
console.log(btnPokedex)

//ARRAYS

let objetosPokemonCartas;

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

async function mostrarObjetos(){
    objetosPokemonCartas = await fetch("../objetosPokemon.json")
        .then((response) => {
            if (response.ok){
                return response.json();
            }
        })
        cuerpoCarta(objetosPokemonCartas);
};

//CODIGO

document.addEventListener("DOMContentLoaded", () =>{
    mostrarObjetos();
})

/*
const inputNavBar = document.getElementById("navBarPokedex");
const btnPokedex = document.getElementById("btnPokedex"); 
*/

btnFiltroCategoria.forEach((btn) => btn.addEventListener("click", (e) =>{    
    const btnId = e.currentTarget.id;
    const objetosFiltradosCategoria = objetosPokemonCartas.filter(objeto => objeto.categoria == btnId)

    if(btnId === "todos"){
        mostrarObjetos()
    }else{
        cuerpoCarta(objetosFiltradosCategoria);
    }
}));

console.log(objetosPokemonCartas)

inputNavBar.addEventListener("change", () => {
    let nombrePokemon = inputNavBar.value;
    return nombrePokemon
}); 










