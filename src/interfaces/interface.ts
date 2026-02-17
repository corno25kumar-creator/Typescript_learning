interface user {
    name: "chandan", 
    email:"abcd.gmail.com",
    password:"1234"
}
export function Interface(obj:user) {

    console.log(obj.name)
    console.log(obj.email)
    console.log(obj.password)
    
}

//Interface({name:'chandan', email:'abcd.gmail.com',password:"1234"})

// here during calling this function we need to pass the exact parameter during call the fun in this case 3
// Interfaces()