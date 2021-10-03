class Pokemon {
    static all = [];
    static poke = document.getElementById("pokemon-cont")
    constructor({name, move, ability, id}) {
        // debugger
        this.name = name
        this.move = move
        this.ability = ability
        this.id = id
        // this.pokemons = comments 
        this.element = document.createElement('li');
        this.element.dataset['id'] = id;
        this.element.id = `pokemon-${id}`;
        this.element.addEventListener('click', this.pokemonClick)
        
        Pokemon.all.push(this)

    } 

    render(){
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <h2 class="name">${this.name}</h2>
        <p class="move">${this.move}</p>
        <p class="ability">${this.ability}</p>
        </div>
        <button class="edit" data-id=${this.id}>Edit Pokemon</button>
        <button class="delete" data-id=${this.id}> X </button>
        `
        return this.element
    }

    createEditForm(){
        const div = this.element.querySelector('div');
        for(const element of div.children){
            let inputValue = element.innerText;
            let name = element.classList[0];
            element.outerHTML = `<input type="text" class="edit-${name}" value="${inputValue}" />`
             // iterate with a loop through the div to replace every one with a specific comment form
        }

        // debugger


    }

    pokemonClick = (e) => {
        if(e.target.innerText === "Edit Pokemon"){
            console.log(e.target)
            e.target.innerText = "Save Pokemon"
            this.createEditForm()
    
            // debugger
        }else if(e.target.innerText === "X"){
            console.log(e.target)
            pokemonCall.deletePokemons(e)
        }else if(e.target.innerText === "Save Pokemon"){
            console.log("save works")
            e.target.innerText = "Edit Pokemon"
            this.updatedPokemonInfo()

           
        }
    }

    updatedPokemonInfo() {
        this.name = this.element.querySelector('.edit-name').value;
        this.move = this.element.querySelector('.edit-move').value;
        this.ability = this.element.querySelector('.edit-ability').value;
        pokemonCall.updatePokemon(this)
    }


    attachToDom(){
        Pokemon.poke.appendChild(this.render())
    }
   

    addToDropDown(){
        const option = document.createElement('option')
        option.value = this.id
        option.innerHTML = this.name
        dropDown.appendChild(option)
    }


}