function addTwo(num: number): number
{
    return num + 2
}
let myValue = addTwo(5)

function getUpper(val: string)
{
   return val.toUpperCase()
}
getUpper("intimetec")

function signUpUser(name: string, email: string, isPaid: boolean)
{

}
signUpUser("swaroop", "swaroop@intimetec.com", false)

let loginUser = (name: string, email: string, isPaid: boolean = false) =>
{

}
loginUser("chaitanya", "chaitanya@intimetec.com")

const getHello = (s: string):string => 
{
   return "xyz"
}

const heros = ["thor", "spiderman", "ironman"]
heros.map((hero): string => {
   return `hero is ${hero}`
})

function consoleError(errmsg: string): void
{
   console.log(errmsg);
}
function handleError(errmsg: string): never
{
   throw new Error(errmsg);
}

export {}