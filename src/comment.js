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
        this.element.addEventListener('click', this.handleClick)
        // setting up dataset


    
        Comment.all.push(this)
    }

    render(){
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <h2 class="title">${this.title}</h2>
        <p class="description">${this.description}</p>
        </div>
        <button class="edit" data-id=${this.id}>Edit Comment</button>
        <button class="delete" data-id=${this.id}> X </button>
        `
        return this.element
    }

    createEditForm(){
        const div = this.element.querySelector('div');
        

    }

    handleClick = (e) => {
        if(e.target.innerText === "Edit Comment"){
            console.log(e.target)
            this.createEditForm()

            // e.target.innerText = "Save Comment"
    
            // debugger
        }else if(e.target.innerText === "X"){
            // console.log(e.target)
            // commentCall.deleteComment(e)
        }else if(e.target.innerText === "Save Comment"){
            // console.log("save works")
            // e.target.innerText = "Edit Comment"
            // this.updatedItemInfo()
        }
    }


    attachToDom(){
        Comment.cont.appendChild(this.render())
    }
   
    // Constructor : we will use this to make new comments. yay



}