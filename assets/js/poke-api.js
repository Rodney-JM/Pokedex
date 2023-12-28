
const pokeApi = {};

function convertPokeAPIDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon();
    pokemon.number = pokeDetail.id;
    pokemon.name = pokeDetail.name;

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const type1 = types[0];  // Correção aqui

    pokemon.types = types;
    pokemon.type = type1;

    pokemon.image = pokeDetail.sprites.other.dream_world.front_default;

    return pokemon;
}

pokeApi.getPokemonsDetails = (pokemon)=>{
    return fetch(pokemon.url)
        .then((response)=> response.json())//Puxa os detalhes das listas
        .then(convertPokeAPIDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 6)=>{
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then((response)=> response.json())//nos fornece um objeto convertendo a lista de pokemons para json
        .then((jsonBody)=> jsonBody.results) //pega as listas dentro do json
        .then((pokemons)=> pokemons.map(pokeApi.getPokemonsDetails))//transforma a lista de promessas em uma lista de response
        .then((detailRequests)=> Promise.all(detailRequests))
        .then((details)=> details)
        
}//function que abstrai o consumo do http, da API

/* Promise.all([
    fetch("https://pokeapi.co/api/v2/pokemon/1"),

    fetch("https://pokeapi.co/api/v2/pokemon/2"),

    fetch("https://pokeapi.co/api/v2/pokemon/3"),

    fetch("https://pokeapi.co/api/v2/pokemon/4")
]).then((results)=>{
    
}) */