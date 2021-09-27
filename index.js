const port = `http://localhost:3000/`;
const commentCall = new CommentService(port);
const pokemonCall = new PokemonService(port);
const form = document.getElementById('comment-form')
const dropDown = document.getElementById('pokemon_dropdown')
const titleValue = document.getElementById('comment-title')
const descriptionValue = document.getElementById('comment-description')


commentCall.getComments()
pokemonCall.getPokemons()

form.addEventListener('submit', handleSubmit)


function handleSubmit(e) {
    e.preventDefault();
    commentCall.createComments()
    // it's like an instance method


    // debugger

}
