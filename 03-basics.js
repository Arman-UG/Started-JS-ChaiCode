//let score = 33 //=> output typeof is number
//let score = "33" //=> output typeof is string
//let score = "33abc" // => output typeof is number but actually it val;ue is not  a number
// but we can use Number to convert it into number

// "33" => 33
// "33abc" => NaN --> it also an number
//  true => 1 ; false => 0

let isLoggedIn = 1; 

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)// output is true
// let isLoggedIn = ""
//output is false  
// let isLoggedIn = "Arman"
//output  is true

// 1 => true
// "" => false
// "Arman" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)// output is 33 but we check it convert into  a string ?
console.log(typeof someNumber) // String "yes"