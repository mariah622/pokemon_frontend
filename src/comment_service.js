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
        debugger
        const commentInfo = {
            comment: {
                title: titleValue.value,
                description: descriptionValue.value,
                pokemon_id: dropDown.value
            }
        }
        fetch(this.port + `/comments`)
        .then(response => response.json())
        .then(data => console.log(data))
        // debugger
    }
}