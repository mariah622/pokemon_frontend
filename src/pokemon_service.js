class PokemonService {
    constructor(port){
        this.port = port
    }

    getPokemons(){
        fetch(`${this.port}/pokemons`)
        .then(response => response.json())
        .then( json => {
            json.forEach(element => {
                const p = new Pokemon(element)
                // pokemon object
                p.addToDropDown()


            })
            
        })
    }
}