interface Admin {
    name : "chandan",
    email : "kumar@gmail.conm",
    password: 1234

}

interface User extends Admin {
 city : "delhi",

}

export function extending_Interface (obj:User) {

    console.log(obj.email)
    console.log(obj.name)
}