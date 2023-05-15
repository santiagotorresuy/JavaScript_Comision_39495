const containerCartas = document.getElementById("cuerpoCartas");
let direccionPokeapi= "https://pokeapi.co/api/v2/pokemon/";

function crearCarta(data){
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
        <div class="card-numero-nombre">
            <p>#${data.id}</p>
            <p>${data.name}</p>
        </div>
        <img class="img-pokemon-card" src="${data.sprites.other["official-artwork"].front_default}" alt="${data.sprites.other["official-artwork"].front_default}">
    `;containerCartas.append(div);
}

function cargarCartas(){
    for (let i=1; i<= 151; i++){
        fetch(direccionPokeapi + i)
            .then( (result) => result.json())
            .then( (arrayPokemon) => crearCarta(arrayPokemon));
    }
}

//CODIGO LISTA COMPLETA

cargarCartas();

const btnFiltroPorTipo = document.querySelectorAll(".nav-btn");

btnFiltroPorTipo.forEach((button) => button.addEventListener("click", (e) => {
    const btnId = e.currentTarget.id;
    containerCartas.innerHTML = ``;
    
    for (let i=1; i<= 151; i++){
        fetch(direccionPokeapi + i)
            .then( (result) => result.json())
            .then( (arrayPokemon) => {               
            
                if(btnId === "todos"){
                    crearCarta(arrayPokemon);
                }else{
                    const tiposPokemon = arrayPokemon.types.map(type => type.type.name);
                    if(tiposPokemon.some((tipos) => tipos.includes(btnId))) {
                        crearCarta(arrayPokemon);
                    }
                }
            });
    };
}));







