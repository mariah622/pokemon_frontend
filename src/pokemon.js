class Pokemon {
    static all = [];
    static poke = document.getElementById("pokemon-cont")
    constructor({name, move, ability, id}) {
        this.name = name
        this.move = move
        this.ability = ability
        this.id = id
 
        this.element = document.createElement('li');
        this.element.dataset['id'] = id;
        this.element.id = `pokemon-${id}`;
        this.element.addEventListener('click', this.pokemonClick)
        
        Pokemon.all.push(this)
        // debugger
    } 

    render(){
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <p class="name">${this.name}</p>
        <p class="move">${this.move}</p>
        <p class="ability">${this.ability}</p>
        </div>
        <button class="edit" data-id=${this.id}>Edit Pokémon</button>
        <button class="delete" data-id=${this.id}> X </button>
        `
        // debugger
        return this.element
    }

    createEditForm(){
        const div = this.element.querySelector('div');
     
        for(const element of div.children){
            let inputValue = element.innerText;
            let name = element.classList[0];
            debugger
            element.outerHTML = `<input type="text" class="edit-${name}" value="${inputValue}" />`
    
        }
    }

    pokemonClick = (e) => {
        if(e.target.innerText === "Edit Pokémon"){
            e.target.innerText = "Save Pokémon"
            this.createEditForm()
        }else if(e.target.innerText === "X"){
            pokemonCall.deletePokemons(e)
        }else if(e.target.innerText === "Save Pokémon"){
            e.target.innerText = "Edit Pokémon"
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








