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

        fetch(this.port + `/comments`)
        .then(response => response.json())
        .then(data => console.log(data))
    }
}