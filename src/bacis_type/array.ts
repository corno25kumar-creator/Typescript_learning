export function Array () {

    let arr = [1,2,3,4,5] // array of no only

    let arr2 = [1,2,3,4,'5'] // let arr2: (string | number)[]

    let arr3 = [1,2,3,4, {hello:"name"}, 'str'] // let arr3: (string | number | {hello: string})[]

    console.log(`let arr: number[] :- ${arr}`)
    console.log(` let arr2: (string | number)[] :- ${arr2}`)
    console.log(`let arr3: (string | number | {hello: string})[]:- ${arr3}`)

}