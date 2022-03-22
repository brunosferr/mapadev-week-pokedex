/* quando clicar no pokémon da listagem temos que esconder o cardão pokemon aberto e mostrar o cartão correspondenteao que foi selecionado na listagem

para isso vamos precisar trabalhar com dois elementos
1 - listagem
2 - cartão pokémon

precisamos criar duas variáveis no JS par atrabalhar com os elementos da tela

vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

- remover a classe open só do cartão que está aberto
- ao clicar em um pokemon da listagem pegamos o id desse pokémon para saber qual cartão mostrar
- remover a classe ativo que marcar o pokémon selecionado
- adicionar a classe ativo no item da lista selecionado

*/

// criar duas variáveis para trabalhar os elementos da tela
const listSelectPokemon = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.pokemon-card')

listSelectPokemon.forEach(pokemon => {

    // vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons
    pokemon.addEventListener('click', () => {
        // remover a classe open só do cartão que está aberto
        const cardPokemonOpened = document.querySelector('.open')
        cardPokemonOpened.classList.remove('open')

        // ao clicar em um pokemon da listagem pegamos o id desse pokémon para saber qual cartão mostrar
        const idSelectPokemon = pokemon.attributes.id.value
        const idCardPokemonToOpen = idSelectPokemon + '-card'
        const cardPokemonToOpen = document.getElementById(idCardPokemonToOpen)
        cardPokemonToOpen.classList.add('open')
        
        // remover a classe ativo que marcar o pokémon selecionado
        const pokemonActiveList = document.querySelector('.active')
        pokemonActiveList.classList.remove('active')

        // adicionar a classe ativo no item da lista selecionado
        const pokemonSelectList = document.getElementById(idSelectPokemon)
        pokemonSelectList.classList.add('active')



    })

})

