class User {
    email: string
    name: string
    readonly city: string = ""
    constructor(email: string, name: string){
        this.email = email;
        this.name = name
    }
}

const Roberto = new User("R@g.com","Roberto")
// Roberto.city = "Venice"
