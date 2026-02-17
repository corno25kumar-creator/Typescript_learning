export function Unknown() {
    
    console.log(`/////////////////////////////////////////////////////////`)
    console.log(`/////////////////////////////////////////////////////////`)
    console.log(`/////////////////////////////////////////////////////////`)

    let a: unknown
  
    a = "chandan"
      a = 12
      console.log(`unknow key word`)
    if(typeof a === "string"){
    console.log(a.toLocaleLowerCase())
    }
    else{
        console.log(`a+2`)
    }
}