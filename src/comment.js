class Comment {
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

        Comment.all.push(this)
    }

    render(){
        this.element.innerHTML = `
        <h2 class="pokemon">Pokemon: ${this.pokemon.name}</h2>
        <div data-id="${this.id}">
        <h3 class="title">${this.title}</h3>
        <p class="description">${this.description}</p>
        </div>
        <button class="edit" data-id=${this.id}>Edit Comment</button>
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
        }

       


    }

    handleClick = (e) => {
        if(e.target.innerText === "Edit Comment"){
            console.log(e.target)
            e.target.innerText = "Save Comment"
            this.createEditForm()
    
        }else if(e.target.innerText === "X"){
            console.log(e.target)
            commentCall.deleteComment(e)
            
        }else if(e.target.innerText === "Save Comment"){
            console.log("save works")
            e.target.innerText = "Edit Comment"
            this.updatedCommentInfo()

           
        }
    }

    updatedCommentInfo() {
        this.title = this.element.querySelector('.edit-title').value;
        this.description = this.element.querySelector('.edit-description').value;
        commentCall.updateComment(this)
    }


    attachToDom(){
        Comment.cont.appendChild(this.render())
    }
   
    



}