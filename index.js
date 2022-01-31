const port = `http://localhost:3000/`;
const commentCall = new CommentService(port);
const pokemonCall = new PokemonService(port);
const commentForm = document.getElementById('comment-form')
const pokemonForm = document.getElementById('pokemon-form')
const dropDown = document.getElementById('pokemon_dropdown')
const nameValue = document.getElementById('pokemon-name')
const moveValue = document.getElementById('pokemon-move')
const abilityValue = document.getElementById('pokemon-ability')
const titleValue = document.getElementById('comment-title')
const descriptionValue = document.getElementById('comment-description')

const allPokemon = Pokemon.all
const pokemonNames = allPokemon.map( pokemon => `${pokemon.name}`)



// const buttons = document.querySelectorAll( "button" );

// function buttonIteration(){
//   for (i = 0; i < buttons.length; i++){
//     buttons[i].addEventListener("click", buttonHit)
//   }
// }
// buttonIteration()

commentCall.getComments()
pokemonCall.getPokemons()

commentForm.addEventListener('submit', submitComments)
pokemonForm.addEventListener('submit', submitPokemons)

function submitComments(e) {
    e.preventDefault();
    commentCall.createComments()

}

function submitPokemons(e) {
  console.log(e)
    e.preventDefault();
    pokemonCall.createPokemons()
}

const buttons = document.querySelector('.button-cont')
buttons.addEventListener('click', buttonHit)

function buttonHit(e){
  console.log('i was pressed')
  const welcomeCont = document.getElementById('welcome-cont')
  const pokemonCont = document.getElementById('pokemon-cont')
  const commentCont = document.getElementById('comments-cont')
  
  if(e.target.innerText === "Main"){
    welcomeCont.style.display = 'block'
    pokemonCont.style.display = 'none'
    commentCont.style.display = 'none'
    
  }
  
  if(e.target.innerText === "Pokémon"){
    welcomeCont.style.display = 'block'
    pokemonCont.style.display = 'block'
    commentCont.style.display = 'none'

  }
  
  if(e.target.innerText === "Comments") {
    welcomeCont.style.display = 'block'
    pokemonCont.style.display = 'none'
    commentCont.style.display = 'block'

  }
}


  





  


      
