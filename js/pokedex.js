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

function mostrarUnPokemon() {
    const pantallaPokedex = document.getElementById("pokedex_cuerpo");
    pantallaPokedex.innerHTML = ` `;

    pokedex.forEach((Pokemon) => {
        let {numero, nombre, tipo, altura, peso} = Pokemon;  //APLICANDO DESTRUCTURING
        pantallaPokedex.innerHTML = `
                <img src="./img/${nombre}.png" class="img-pokemon"alt="img_pokemon">
                <div class="datos-pokemon">
                    <div class="nombre-pokemon">
                        <p class="numero-pokemon">#${numero}</p>
                        <p class="nombre">${nombre}</p>
                    </div>
                    <div class="tipo-pokemon">
                        <p class="tipo ${(tipo).toLowerCase()}">${tipo}</p>
                    </div>
                    <div class="altura-peso">
                        <div class="altura">
                            <p>${altura}</p>
                        </div>
                        <div>
                            <p>${peso}</p>
                        </div>
                    </div>
                </div>`;
    })
}

/*function mostrarDato(listaGenerica){                     //SOLO SE UTILIZA PARA EL CONSOLE.LOG
    for (const dato in listaGenerica){
        console.log(dato + ": " + listaGenerica[dato]);
    }
}

function cargarUnPokemon() {
    let i = indexPokemon; 
    mostrarDato(listaPokemons[i]);          //SOLO PARA EL CONSOLE.LOG
    pokedex.push(listaPokemons[i]);
    mostrarUnPokemon();
}



//COMIENZO DE LA PARTE INTERACTIVA, LE PIDO UN NOMBRE AL USUARIO

/*alert("Bienvenido a la PokeDex de iniciales! :)" + "\n\n" + "NOTA: Esta PokeDex solo funciona con los pokemon iniciales de la 1ra a la 5ta generación");


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

/*if (!pokemonEncontrado) {
    alert("El pokemon que ingreso no es correcto!");
}else {
    cargarUnPokemon();     
}*/


let pokedex = [];

localStorage.setItem("listaPokemon",JSON.stringify(listaPokemons));

let navBarPokedex = document.getElementById("navBarPokedex");
let formPokedex = document.getElementById("formPokedex");

navBarPokedex.addEventListener("change", cargarPokemon);

function cargarPokemon(){
    let buscador = navBarPokedex.value.toLowerCase();
    let i = listaPokemons.indexOf(listaPokemons.find((Pokemon) => Pokemon.nombre.includes(buscador.toLowerCase())));
    return i;
}

formPokedex.addEventListener("submit", (e) => {
    e.preventDefault();
    cargarPokemon();
    let i = cargarPokemon();
    
    if (!listaPokemons[i]){
        console.log("El pokemon que ingreso no es correcto!");
    }else {    
        pokedex.push(listaPokemons[i]);
        console.log(pokedex);
    
        sessionStorage.setItem("PokeDex", JSON.stringify(pokedex));
        mostrarUnPokemon();
    };    
})


























