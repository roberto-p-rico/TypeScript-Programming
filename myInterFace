interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    //startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number):
    number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const Roberto: Admin = { dbId: 22, email: "R@g.com", userId: 2211,
role: "admin",
githubToken: "github", 
startTrail: () => {
    return "trail started"
},
getCoupon: (name: "Roberto11", off: 10) => {
    return 10
}
}
Roberto.email = "R@g.com"
// Roberto.dbId = 33
