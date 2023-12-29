let offset = 0;
const limit = 10;
const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("load-more");

function loadPokemonItems(offset, limit){

    pokeApi.getPokemons(offset, limit)
        .then((pokemons = [])=> { 
        const newHtml = pokemons.map((pokemon)=> `
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

loadPokemonItems(offset, limit);

loadMoreButton.addEventListener('click', ()=>{
    offset +=limit;
    loadPokemonItems(offset, limit)
})


/* .catch((error)=> console.log(error)) */
/* .finally(()=>{console.log("Requisição concluída");}) */