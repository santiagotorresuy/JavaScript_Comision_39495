const containerCartas = document.querySelector("#containerCartas");

let  objetosPokemonCartas = [];

function traerObjetos(data){
    data.forEach((objeto) => objetosPokemonCartas.push(objeto))

    containerCartas.innerHTML = ``;

    for(let i=0; i <= 51; i++){
        const div = document.createElement("div");
        div.classList.add("carta-producto");
    
        div.innerHTML = `
            <p class="titulo-carta">${objetosPokemonCartas[i].nombre}</p>
            <img src="${objetosPokemonCartas[i].img}" alt="">
            <p class="carta-precio">${objetosPokemonCartas[i].precio} ¥</p>
            <form action="" class="form-agregar-carrito">
                <input type="text" class="input-agregar-carrito">
                <button class="btn-agregar-carrito">Agregar al carrito</button>
            </form>
        `;containerCartas.appendChild(div);
    }
};

function mostrarObjetos(){
    fetch("../objetosPokemon.json")
        .then( (Response) => Response.json())
        .then( (objetosPokemon) => traerObjetos(objetosPokemon))
};

mostrarObjetos();
