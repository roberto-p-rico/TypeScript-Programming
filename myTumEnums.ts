// const user: (string | number)[] = [1, "RR"]
let tUser: [string, number, boolean]

tUser = ["RR", 131, true]

let rbg: [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser: User = [112, "example@google.com"]

newUser[1] = "RR.com"
newUser.push(true)
