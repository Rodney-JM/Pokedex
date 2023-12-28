const offset = 0;
const limit = 6;
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offseat}&limit=${limit}`;
const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("load-more");

function loadPokemonItems(offset, limit){

    pokeApi.getPokemons()
        .then((pokemons = [])=> { 
        pokemonList.innerHTML = pokemons.map((pokemon)=> `
            <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type)=> `<li class="type ${type}">${type}</li>` ).join('')}
                </ol>
                <img src="${pokemon.image}" alt="${pokemon.name}">
            </div>
            
        </li>`).join('');
        pokemonList.innerHTML += newHtml;
})//O segundo then recebe o retorno do primeiro
}

loadPokemonItems(limit, offset);

loadMoreButton.addEventListener('click', ()=>{
    offset +=limit;
    loadPokemonItems(limit, offset)
})


/* .catch((error)=> console.log(error)) */
/* .finally(()=>{console.log("Requisição concluída");}) */