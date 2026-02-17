export function enums() {
// here its a key value pair and also make property and to use later use the enum name and  put .
    enum UserRoles {
        ADMIN = "admin", 
        GUEST = "guest",
        SuperAdmin = "superadmin" 
    }

     enum statusCode {
        Fail = 404, 
        Success = 200,
        Internal_Error = 500 
    }

    console.log(`/////////////////////////////////////////////////////////`)
    console.log(`/////////////////////////////////////////////////////////`)
    console.log(`/////////////////////////////////////////////////////////`)
    let current_code = statusCode.Success
    let current_user =  UserRoles.SuperAdmin

    console.log(current_code)
    console.log(current_user)
    
    
}