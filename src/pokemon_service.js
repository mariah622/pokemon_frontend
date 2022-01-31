class PokemonService {
    constructor(port){
        this.port = port
    }
    
    getPokemons(){
        fetch(this.port + `/pokemons`)
        .then(response => response.json())
        .then( json => {
            json.forEach(element => {
                const p = new Pokemon(element)
                p.addToDropDown()
                p.attachToDom()
            })
            
        })
    }
    
    createPokemons(){
        const pokemonInfo = {
            pokemon: {
                name: nameValue.value,
                move: moveValue.value,
                ability: abilityValue.value
            }
        }
        // debugger
        const configObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(pokemonInfo)
        }
        fetch(this.port + `/pokemons`, configObject)
        .then(response => response.json())
        .then(data => {
            if(data.error) throw Error(data.error)
            const p = new Pokemon(data)
            p.attachToDom()
            p.addToDropDown()
        })
        .catch(error => alert(error))
        .catch()

    }

    updatePokemon(pokemon){
        const {name, move, ability, id} = pokemon
        const pokemonInfo = {
            name, 
            move, 
            ability
        }
        
        const configObject = {
            method:"PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(pokemonInfo)
        }
        fetch(this.port + `/pokemons/${id}`, configObject)
        .then(response => {pokemon.render()})
        
    }

    deletePokemons(e) {
        const id = e.target.dataset.id
        e.target.parentElement.remove()
        fetch(this.port + `/pokemons/${id}`, {method: 'DELETE'})
        .then(response => response.json())
        .then(json => alert(json.message))
    
    }



}