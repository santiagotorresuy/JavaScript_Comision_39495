const containerCartas = document.getElementById("cuerpoCartas");
let direccionPokeapi= "https://pokeapi.co/api/v2/pokemon/";

function cargarCartas(){
    for (let i=1; i<151; i++){
        fetch(direccionPokeapi + i)
            .then( (result) => result.json())
            .then( (arrayPokemon) => crearCarta(arrayPokemon));
    }
}

function crearCarta(arrayPokemon){
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
        <div class="card-numero-nombre">
            <p>#${arrayPokemon.id}</p>
            <p>${arrayPokemon.name}</p>
        </div>
        <img class="img-pokemon-card" src="${arrayPokemon.sprites.other["official-artwork"].front_default}" alt="${arrayPokemon.sprites.other["official-artwork"].front_default}">
    `;containerCartas.append(div);
}

//CODIGO LISTA COMPLETA

cargarCartas();

const btnFiltroPorTipo = document.querySelectorAll(".nav-btn");

btnFiltroPorTipo.forEach((button) => button.addEventListener("click", (e) => {
    let listaClases = e.currentTarget.classList;
    
    for (let i=1; i<151; i++){
        fetch(direccionPokeapi + i)
            .then( (result) => result.json())
            .then( (arrayPokemon) => {
                const arrayTipos = arrayPokemon.types.map(type => type.type.name);
                console.log(arrayTipos); //me da un array de cada tipo
                
                if (arrayTipos.includes())
            });
    }

}));







