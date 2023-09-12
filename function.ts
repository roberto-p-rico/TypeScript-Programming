function addTwo(num: number): number{
    return num + 2
    // return "hello"
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

let myValue = addTwo(5)
getUpper("Roberto")

signUpUser("Roberto", "Roberto@gmail.com", false)
loginUser("R", "R@g.com")

// function getValue(myVal: number): boolean{
//    if (myVal > 5) {
//        return true
//  }
//  return "200 OK"
//}

const getHello = (s: string): string => {
    return""
}

const heros = ["Spiderman", "Ironman", "Batman"]
//const heros = [1, 2, 3]

heros.map((hero): string => {
    return `hero is ${hero}`
})


function handleError(errmsg: string): void{
    throw new Error(errmsg);

}


export {}
