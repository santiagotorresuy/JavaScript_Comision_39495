//PRIMERA GENERACION
const charmander = new Pokemon("charmander", "Primera generación", "Fuego", "0.6m", "8.5kg", "Mar Llamas", "Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la cola.");
const squirtle = new Pokemon("squirtle", "Primera generación", "Agua", "0.5m", "9kg", "Torrente", "Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.");
const bulbasaur = new Pokemon("bulbasaur", "Primera generación", "Planta", "0.7m", "6.9kg", "Espesura", "Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo");

//SEGUNDA GENERACION
const cyndaquil = new Pokemon("cyndaquil", "Segunda generación", "Fuego", "0.5m", "7.9kg", "Mar Llamas", "Cyndaquil se protege soltando llamas por el lomo. Cuando está enfadado, las llamas son fieras, pero, si está cansado, solo consigue echar algunas chispas que no llegan a cuajar en una completa combustión.");
const totodile = new Pokemon("totodile", "Segunda generación", "Agua", "0.6m", "9.5kg", "Torrente", "Totodile tiene cuerpo pequeño, pero fuertes mandíbulas. A veces, piensa que solo está dando un mordisquito y hace unas heridas bastante considerables.");
const chikorita = new Pokemon("chikorita", "Segunda generación", "Planta", "0.9m", "6.4kg", "Espesura", "Al luchar, Chikorita agita la hoja que tiene para mantener a raya al rival. Pero, al mismo tiempo, libera una suave fragancia que apacigua el encuentro y crea un ambiente agradable y de amistad.");

//TERCERA GENERACION
const torchic = new Pokemon("torchic", "Tercera generación", "Fuego", "0.4m", "2.5kg", "Mar Llamas", "Torchic no se separa de su Entrenador. Siempre va tras él con sus pasitos inseguros. Este Pokémon escupe bolas de fuego que pueden alcanzar los 1000 °C y carbonizar al enemigo.");
const mudkip = new Pokemon("mudkip", "Tercera generación", "Agua", "0.4m", "7.6kg", "Torrente", "La aleta que tiene Mudkip en la cabeza actúa de radar y es muy sensible. Puede captar movimientos que se produzcan en el agua y en el aire, y todo lo que ocurra a su alrededor, sin necesidad de abrir los ojos.");
const treecko = new Pokemon("treecko", "Tercera generación", "Planta", "0.5m", "5kg", "Espesura", "Treecko tiene unos ganchos pequeños en las plantas de los pies con los que puede escalar superficies verticales. Este Pokémon ataca dando un golpetazo con la cola.");

//CUARTA GENERACION
const chimchar = new Pokemon("chimchar", "Cuarta generación", "Fuego", "0.5m", "6.2kg", "Mar Llamas", "El gas de su panza alimenta el fuego de su parte trasera, que ni la lluvia puede extinguir.");
const piplup = new Pokemon("piplup", "Cuarta generación", "Agua", "0.4m", "5.2kg", "Torrente", "No le gusta que lo cuiden. Como no aprecia el apoyo de su Entrenador, le cuesta coger confianza con él.");
const turtwig = new Pokemon("turtwig", "Cuarta generación", "Planta", "0.4m", "10.2kg", "Espesura", "Realiza la fotosíntesis al bañarle los rayos de sol. Su concha está formada por tierra endurecida.");

//QUINTA GENERACION
const tepig = new Pokemon("tepig", "Quinta generación", "Fuego", "0.5m", "9.9kg", "Mar Llamas", "Evita con agilidad los ataques enemigos. Lanza bolas de fuego por su hocico y tuesta bayas del bosque para comer.");
const oshawott = new Pokemon("oshawott", "Quinta generación", "Agua", "0.5m", "5.9kg", "Torrente", "La vieira de su ombligo no solo sirve como arma, sino también como instrumento para cortar las bayas que estén duras.");
const snivy = new Pokemon("snivy", "Quinta generación", "Planta", "0.6m", "8.1kg", "Espesura", "Cuando recibe los rayos de sol, se mueve mucho más rápido que de costumbre. Usa mejor sus lianas que sus manos.");

//ARREGLOS, UNO PARA CONFIRMAR QUE EL NOMBRE ESTA (listaPokemonsTrue), DESPUES DE CONFIRMAR QUE ESTA NECESITAMOS UNA CON LOS DATOS (listPokemons)

const listaPokemonsTrue = ["charmander", "squirtle", "bulbasaur", "cyndaquil", "totodile", "chikorita", "torchic", "mudkip", "treecko", "chimchar", "piplup", "turtwig", "tepig", "oshawott", "snivy"];

const listaPokemons = [charmander, squirtle, bulbasaur, cyndaquil, totodile, chikorita, torchic, mudkip, treecko, chimchar, piplup, turtwig, tepig, oshawott, snivy];

//FUNCION PARA MOSTRAR CADA ATRIBUTO DEL POKEMON DE listaPOKEMON QUE SE DESEE

function mostrarDato(listaGenerica){
    for (const dato in listaGenerica){
        console.log(dato + ": " + listaGenerica[dato]);
    }
}

function cargarUnPokemon() {
    let i = indexPokemon; 
    mostrarDato(listaPokemons[i]);
}

function mostrarUnPokemon() {
    const pantallaPokedex = document.getElementById("pokedex_cuerpo");
    pantallaPokedex.innerHTML = ` `;

    pokedex.forEach((pokemon) => {
        pantallaPokedex.innerHTML = `
        <div class="pokemon" id="pokedex_cuerpo">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png" class="img-pokemon"alt="img_pokemon">
            <div class="datos-pokemon">
                <div class="nombre-pokemon">
                    <p class="numero-pokemon">#132</p>
                    <p class="nombre">${pokemon.nombre}</p>
                </div>
                <div class="tipo-pokemon">
                    <p class="tipo ${(pokemon.tipo).toLowerCase()}">${pokemon.tipo}</p>
                </div>
                <div class="altura-peso">
                    <div class="altura">
                        <p>${pokemon.altura}</p>
                    </div>
                    <div>
                        <p>${pokemon.peso}</p>
                    </div>
                </div>
            </div>         
        </div>`
    })
}

function pushPokemon() {
    pokedex.push(listaPokemons[i]);
    mostrarUnPokemon();
}


//COMIENZO DE LA PARTE INTERACTIVA, LE PIDO UN NOMBRE AL USUARIO

alert("Bienvenido a la PokeDex de iniciales! :)" + "\n\n" + "NOTA: Esta PokeDex solo funciona con los pokemon iniciales de la 1ra a la 5ta generación");


let nombrePokemon = prompt("Cuál es el nombre del pokemon que buscas?").toLowerCase();
let pokemonEncontrado = listaPokemons.find((Pokemon) => Pokemon.nombre.toLowerCase() == nombrePokemon);
let indexPokemon = listaPokemonsTrue.indexOf(nombrePokemon);

/*if (nombrePokemonTrue != true){
    alert("El nombre que ingresó no es correcto");
}else {
    let i = indexPokemon;
    mostrarDato(listaPokemons[i]);
    
    do{
        seguir = prompt("Deseas buscar otro pokemon? Si/No").toLowerCase();
        nombrePokemon = prompt("Cual es el nombre del nuevo pokemon?").toLowerCase();
        nombrePokemonTrue = listaPokemonsTrue.includes(nombrePokemon);
        indexPokemon = listaPokemonsTrue.indexOf(nombrePokemon);

        let i = indexPokemon;
        mostrarDato(listaPokemons[i]);
    }while (seguir === "si");
};*/

let pokedex = [];

if (!pokemonEncontrado) {
    alert("El pokemon que ingreso no es correcto!");
}else {
    cargarUnPokemon();
    i= indexPokemon;
    pushPokemon();
}

/*FALTA LOGRAR EL BUCLE, AJUSTAR LA PAGINA PARA QUE NO SE ROMPA CUANDO SE BUSCA UN POKEMON Y LOGRAR APLICAR EL .find EN nombrePokemonTrue*/














