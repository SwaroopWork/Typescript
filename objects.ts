//  const User = {
//      name: "sai",
//      email: "sai@intimetec.com",
//      isActive: true
//   }

//function createUser({name: string, isPaid: boolean}){}

//createUser({name: "swaroop", isPaid: "true"})

//function createCourse():{name: string, price: number}
//{
//  return {name: "js", price: 99}
//}

//let newUser = {name: "ayush", isPaid: false, email: "a@a.com"}
//createUser(newUser)

//  type User = {
//      name: string;
//      email: string;
//      isActive: boolean
//  }


//  function createUser(user: User): User{
//      return {name: "", email: "", isActive: true}
//  }

//  createUser({name: "", email: "", isActive: true})

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number
}

let myUser: User = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
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


myUser.email = "h@gmail.com"
// myUser._id = "asa"


export {}