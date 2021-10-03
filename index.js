const port = `http://localhost:3000/`;
const commentCall = new CommentService(port);
const pokemonCall = new PokemonService(port);
const commentForm = document.getElementById('comment-form')
const pokemonForm = document.getElementById('pokemon-form')

const dropDown = document.getElementById('pokemon_dropdown')


const titleValue = document.getElementById('comment-title')
const descriptionValue = document.getElementById('comment-description')


commentCall.getComments()
pokemonCall.getPokemons()


commentForm.addEventListener('submit', submitComments)
// pokemonForm.addEventListener('submit', handleSubmit)


function submitComments(e) {
    e.preventDefault();
    commentCall.createComments()
    // it's like an instance method


    // debugger

}

// function handleSubmit(e) {
//     e.preventDefault
//     pokemonCall.createPokemons()
//     debugger
// }
