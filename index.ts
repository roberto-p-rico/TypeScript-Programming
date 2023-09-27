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
    protected _courseCount = 1;

    readonly city: string = "Venice";

    constructor(
        public email: string, 
        public name: string
    ) {
    }

    private deleteToken() {
        console.log("Token deleted");
    }

    get getAppleEmail(): string {
        return `apple${this.email}`;
    }

    get courseCount(): number {
        return this._courseCount;
    }

    set courseCount(courseNum: number) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const Roberto = new User("R@g.com", "Roberto");

// console.log(Roberto.name);

// Roberto.deleteToken();
