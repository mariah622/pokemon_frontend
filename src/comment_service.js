class CommentService {
    constructor(port) {
        this.port = port

    }

    getComments(){
        fetch(this.port + `/comments`)
        .then(response => response.json())
        .then(data => {
            for(const comment of data){
                let c = new Comment(comment)
                c.attachToDom()
            }
        })
        .catch(error => window.alert("Opps! Seems like you are not connected to the server. Try again!"))
    }

    createComments(){
        const commentInfo = {
            comment: {
                title: titleValue.value,
                description: descriptionValue.value,
                pokemon_id: dropDown.value
            }
        }
        // debugger
        const configObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(commentInfo)
        }
        fetch(this.port + `/comments`, configObject)
        .then(response => response.json())
        .then(data => {
            if(data.error) throw Error(data.error)

            const c = new Comment(data)
            c.attachToDom()
        })
        .catch(error => alert(error))
    }

    updateComment(comment){
        // destructuring (destructuring is smart. I do not have to write title: title)
        const {title, description, id} = comment
        const commentInfo = {
            title, 
            description
        }
        
        const configObject = {
            method:"PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(commentInfo)
        }

        fetch(this.port + `/comments/${id}`, configObject)
        .then(response => {comment.render()})
        

    }

    deleteComment(e) {
        const id = e.target.dataset.id
        e.target.parentElement.remove()

        fetch(this.port + `/comments/${id}`, {method: 'DELETE'})
        .then(response => response.json())
        .then(json => alert(json.message))
    
    }
    
}