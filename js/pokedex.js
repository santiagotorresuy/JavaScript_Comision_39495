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

const main = document.getElementById("main");
const navBarPokedex = document.getElementById("navBarPokedex");
const formPokedex = document.getElementById("formPokedex");

let direccionPokeapi= "https://pokeapi.co/api/v2/pokemon/";

navBarPokedex.addEventListener("change", cargarNombrePokemon);

formPokedex.addEventListener("submit", (e) => {
    e.preventDefault();
    cargarNombrePokemon();
    let nombrePokemon = cargarNombrePokemon();
    
    fetch(direccionPokeapi + nombrePokemon)
        .then((result) => {
            if(result.ok){
               return result.json()
            }else {
                throw new Error ("Hubo un problema en el servidor!");
            }
        }).catch((error) => {
            Toastify({
            text: error,
            duration: 2000,
            gravity: "top",
            position: "right", 
            style: {
                background: "linear-gradient(rgba(206, 85, 85, 0.795), rgba(145, 31, 31, 0.747))",
                marginTop: "6rem"
            },
          }).showToast();
        }
        )
        .then((arrayPokemon) => 
            mostrarUnPokemon(arrayPokemon),
        )
})




























