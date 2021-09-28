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
        .catch()
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
            const c = new Comment(data)
            c.attachToDom()
        })
    }
}