class Pokemon {
    constructor({name, move, ability, id, comments}) {
        // debugger
        this.name = name
        this.move = move
        this.ability = ability
        this.id = id
        this.comments = comments 

    } 

    addToDropDown(){
        const option = document.createElement('option')
        option.value = this.id
        option.innerHTML = this.name
        dropDown.appendChild(option)
    }


}