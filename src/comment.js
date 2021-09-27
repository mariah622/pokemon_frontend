class Comment {
    // if i do not use pokemon object, get rid of it please lol
    static all = [];
    static cont = document.getElementById("comments-cont")

    constructor({description, id, title, pokemon_id, pokemon}) {
        this.description = description
        this.id = id 
        this.title = title
        this.pokemon_id = pokemon_id
        this.pokemon = pokemon
        this.element = document.createElement('li');
        this.element.dataset['id'] = id;
        this.element.id = `comment-${id}`;
        // setting up dataset
    
        Comment.all.push(this)
    }

    render(){
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <h2 class="title">${this.title}</h2>
        <p class="description">${this.description}</p>
        </div>
        
        `
        return this.element
    }

    attachToDom(){
        Comment.cont.appendChild(this.render())
    }
   
    // Constructor : we will use this to make new comments. yay



}