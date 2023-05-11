//PRIMERA GENERACION
const charmander = new Pokemon("0004","charmander", "Primera generación", "Fuego", "0.6m", "8.5kg", "Mar Llamas", "Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la cola.");
const squirtle = new Pokemon("0007","squirtle", "Primera generación", "Agua", "0.5m", "9kg", "Torrente", "Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.");
const bulbasaur = new Pokemon("0001","bulbasaur", "Primera generación", "Planta", "0.7m", "6.9kg", "Espesura", "Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo");

//SEGUNDA GENERACION
const cyndaquil = new Pokemon("0155","cyndaquil", "Segunda generación", "Fuego", "0.5m", "7.9kg", "Mar Llamas", "Cyndaquil se protege soltando llamas por el lomo. Cuando está enfadado, las llamas son fieras, pero, si está cansado, solo consigue echar algunas chispas que no llegan a cuajar en una completa combustión.");
const totodile = new Pokemon("158","totodile", "Segunda generación", "Agua", "0.6m", "9.5kg", "Torrente", "Totodile tiene cuerpo pequeño, pero fuertes mandíbulas. A veces, piensa que solo está dando un mordisquito y hace unas heridas bastante considerables.");
const chikorita = new Pokemon("0152","chikorita", "Segunda generación", "Planta", "0.9m", "6.4kg", "Espesura", "Al luchar, Chikorita agita la hoja que tiene para mantener a raya al rival. Pero, al mismo tiempo, libera una suave fragancia que apacigua el encuentro y crea un ambiente agradable y de amistad.");

//TERCERA GENERACION
const torchic = new Pokemon("0255","torchic", "Tercera generación", "Fuego", "0.4m", "2.5kg", "Mar Llamas", "Torchic no se separa de su Entrenador. Siempre va tras él con sus pasitos inseguros. Este Pokémon escupe bolas de fuego que pueden alcanzar los 1000 °C y carbonizar al enemigo.");
const mudkip = new Pokemon("0258","mudkip", "Tercera generación", "Agua", "0.4m", "7.6kg", "Torrente", "La aleta que tiene Mudkip en la cabeza actúa de radar y es muy sensible. Puede captar movimientos que se produzcan en el agua y en el aire, y todo lo que ocurra a su alrededor, sin necesidad de abrir los ojos.");
const treecko = new Pokemon("0252","treecko", "Tercera generación", "Planta", "0.5m", "5kg", "Espesura", "Treecko tiene unos ganchos pequeños en las plantas de los pies con los que puede escalar superficies verticales. Este Pokémon ataca dando un golpetazo con la cola.");

//CUARTA GENERACION
const chimchar = new Pokemon("0390","chimchar", "Cuarta generación", "Fuego", "0.5m", "6.2kg", "Mar Llamas", "El gas de su panza alimenta el fuego de su parte trasera, que ni la lluvia puede extinguir.");
const piplup = new Pokemon("0393","piplup", "Cuarta generación", "Agua", "0.4m", "5.2kg", "Torrente", "No le gusta que lo cuiden. Como no aprecia el apoyo de su Entrenador, le cuesta coger confianza con él.");
const turtwig = new Pokemon("0387","turtwig", "Cuarta generación", "Planta", "0.4m", "10.2kg", "Espesura", "Realiza la fotosíntesis al bañarle los rayos de sol. Su concha está formada por tierra endurecida.");

//QUINTA GENERACION
const tepig = new Pokemon("0498","tepig", "Quinta generación", "Fuego", "0.5m", "9.9kg", "Mar Llamas", "Evita con agilidad los ataques enemigos. Lanza bolas de fuego por su hocico y tuesta bayas del bosque para comer.");
const oshawott = new Pokemon("0501","oshawott", "Quinta generación", "Agua", "0.5m", "5.9kg", "Torrente", "La vieira de su ombligo no solo sirve como arma, sino también como instrumento para cortar las bayas que estén duras.");
const snivy = new Pokemon("0495","snivy", "Quinta generación", "Planta", "0.6m", "8.1kg", "Espesura", "Cuando recibe los rayos de sol, se mueve mucho más rápido que de costumbre. Usa mejor sus lianas que sus manos.");

//ARREGLOS

//const listaPokemonsTrue = ["charmander", "squirtle", "bulbasaur", "cyndaquil", "totodile", "chikorita", "torchic", "mudkip", "treecko", "chimchar", "piplup", "turtwig", "tepig", "oshawott", "snivy"];

const listaPokemons = [charmander, squirtle, bulbasaur, cyndaquil, totodile, chikorita, torchic, mudkip, treecko, chimchar, piplup, turtwig, tepig, oshawott, snivy];

//FUNCIONES

function cargarNombrePokemon(){
    let buscador = navBarPokedex.value.toLowerCase();
    return buscador
}

function mostrarUnPokemon(arrayPokemon) {
    let tipos = arrayPokemon.types.map((type) => `<p class="tipo ${type.type.name}">${type.type.name}</p>`);
    tipos = tipos.join("");
    
    const div = document.createElement("div");
    div.classList.add("pokemon");
    main.innerHTML= ``;
    div.innerHTML = `
            <img src="${arrayPokemon.sprites.other["official-artwork"].front_default}" class="img-pokemon"alt="${arrayPokemon.name}">
            <div class="datos-pokemon">
                <div class="nombre-pokemon">
                    <p class="numero-pokemon">#${arrayPokemon.id}</p>
                    <p class="nombre">${arrayPokemon.name}</p>
                </div>
                <div class="tipos-pokemon">    
                    ${tipos} 
                </div>
                <div class="altura-peso">
                    <div class="altura">
                        <p>${arrayPokemon.height} mts</p>
                    </div>
                    <div>
                        <p>${arrayPokemon.weight} kg</p>
                    </div>
                </div>
            </div>`;
            main.append(div);
}


//CODIGO DE INDEX

const main = document.querySelector("#main");
let direccionPokeapi= "https://pokeapi.co/api/v2/pokemon/";

navBarPokedex.addEventListener("change", cargarNombrePokemon);

formPokedex.addEventListener("submit", (e) => {
    e.preventDefault();
    cargarNombrePokemon();
    let nombrePokemon = cargarNombrePokemon();
    
    fetch(direccionPokeapi + nombrePokemon)
        .then((result) => result.json())
        .then((arrayPokemon) => 
            mostrarUnPokemon(arrayPokemon),
        )
})




























