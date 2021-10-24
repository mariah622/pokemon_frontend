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



commentCall.getComments()
pokemonCall.getPokemons()


commentForm.addEventListener('submit', submitComments)
pokemonForm.addEventListener('submit', submitPokemons)


function openContainer(contName) {
    var i;
    var x = document.getElementsByClassName("cont");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(contName).style.display = "block";
  }

function submitComments(e) {
    e.preventDefault();
    commentCall.createComments()
    // debugger

}

function submitPokemons(e) {
    e.preventDefault();
    pokemonCall.createPokemons()
}

function Search(attribute){
  const collection = document.getElementsByTagName("li");

  for (i = 0;i < collection.length; i++){
      if (((collection[i].innerHTML).toLowerCase()).indexOf(attribute) > -1) {
          collection[i].style.display = "";
          } else {
              collection[i].style.display = "none";
              }
  }
}




