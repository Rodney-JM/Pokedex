const state = {
    view: {
        pokemonBox: document.querySelector(".pokemons"),
    }
};

const pathImage = "./assets/images/";

const pokemonsData = {
    ivysaur: {
        number: "#002",
        name: "Ivysaur",
        type: ["Grass", "Poison"],
        image: `${pathImage}Ivysaur.png`,
        background: "",
    },
    Venusaur: {
        number: "#003",
        name: "Venusaur",
        type: ["Grass", "Poison"],
        image: `${pathImage}Venusaur.png`,
        background: "",
    },
    Charmander: {
        number: "#004",
        name: "Charmander",
        type: ["Fire"],
        image: `${pathImage}Charmander.png`,
        background: "#FF6265",
        colorTypes: "#BC484A"
    },
    Charmeleon:{
        number:"#005",
        name:"Charmeleon", 
        type:  ["Fire"],
        image: `${pathImage}Charmeleon.png`,
        background: "#FF6265",
        colorTypes: "#BC484A"
    },
    Charizard:{
        number:"#005",
        name:"Charmeleon", 
        type:  ["Fire", "Flying"],
        image: `${pathImage}Charizard.png`,
        background: "#FF6265",
        colorTypes: "#BC484A"
    },
    Squirtle:{
        number:"#006",
        name:"Squirtle", 
        type:  ["Water"],
        image: `${pathImage}Squirtle.png`,
        background: "#0A66C2",
        colorTypes: "#074A8D"
    },
    Wartortle:{
        number:"#007",
        name:"Wartortle", 
        type:  ["Water"],
        image: `${pathImage}Wartotle.png`,
        background: "#0A66C2",
        colorTypes: "#074A8D"
    },
    Blastoise:{
        number:"#008",
        name:"Blastoise", 
        type:  ["Water"],
        image: `${pathImage}blastoise.png`,
        background: "#0A66C2",
        colorTypes: "#074A8D"
    },
    Geodude:{
        number:"#009",
        name:"Geodude", 
        type:  ["Rock", "Ground"],
        image: `${pathImage}Geodude.png`,
        background: "#C5B77D",
        colorTypes: "#E2C56E"
    },
    Graveler:{
        number:"#010",
        name:"Graveler", 
        type:  ["Rock", "Ground"],
        image: `${pathImage}Graveler.png`,
        background: "#C5B77D",
        colorTypes: "#E2C56E"
    },
};

function showCards(numberPokemons) {
    for (let i = 0; i < numberPokemons; i++) {
        const pokemon = pokemonsData[Object.keys(pokemonsData)[i]]; // Obtenha o Pokémon pela posição

        const card = document.createElement("li");
        const numberSpan = document.createElement("span");
        const nameSpan = document.createElement("span");
        const detailsDiv = document.createElement("div");
        const typesOl = document.createElement("ol");

        card.className = "pokemon";
        numberSpan.className = "number";
        nameSpan.className = "name";
        detailsDiv.className = "detail";

        numberSpan.textContent = pokemon.number;
        nameSpan.textContent = pokemon.name;

        const image = document.createElement("img");
        image.src = pokemon.image;
        image.alt = pokemon.name;

        typesOl.className = "types";
        pokemon.type.forEach((type) => {
            const typeLi = document.createElement("li");
            typeLi.className = "type";
            typeLi.textContent = type;
            typeLi.style.backgroundColor = pokemon.colorTypes;
            typesOl.appendChild(typeLi);
        });

        detailsDiv.appendChild(typesOl);
        detailsDiv.appendChild(image);

        card.appendChild(numberSpan);
        card.appendChild(nameSpan);
        card.appendChild(detailsDiv);

        state.view.pokemonBox.appendChild(card);

        card.style.backgroundColor = pokemon.background;
        
    }
}

// Exemplo de uso:
showCards(33);
// Adicione mais chamadas de showCards para outros Pokémon...
