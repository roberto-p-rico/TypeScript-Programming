//  class User {
    //  public email: string
    //  private name: string
    //  readonly city: string = "Venice"
    //  constructor(email: string, name: string){
        //  this.email = email;
        //  this.name = name
    //  }
// }

class User {
    readonly city: string = "Venice"
    constructor(
        public email: string, 
        public name: string
        // private userId: string
        ){
    }
}

const Roberto = new User("R@g.com","Roberto")
// Roberto.name
