//const User = {
//  name: "Roberto",
//  email: "Roberto@gmail.com"
//  isActive: boolean
//}

//function createUser({name: string, isPaid: boolean}){}

//let newUser = {name: "Roberto", isPaid: false, email: "R@g.com"}

//createUser(newUser)


//function createCourse():{name: string, price: number}{
//  return{name: "reactjs", price: 399}
//}

//type User = {
//  name: string
//  email: string
//  isActive: boolean
//}

//function createUser(user: User){
//  return ({name: "", email: "", isActive: true})
//}

//createUser({name: "", email: "", isActive: true})

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditcardDetails?: number
}

let myUser: User = {
    _id: "12345",
    name: "R",
    email: "R@g.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "R@gmail.com"
//myUser._id = "asa"

export{}
