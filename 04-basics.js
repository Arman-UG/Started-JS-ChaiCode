                        //Comparison operator
console.log(2 > 1)
//first Graterthen opt // and always comparison opt give us output  in "Boolean Format"// the ouput is "true"
console.log(2 < 1)
// second Lessthen opt // output is"false"
console.log(2 == 1)
// third Equal opt // output is "false"
console.log(2 >= 1)
// it also same as Graterthan opt but here is little diffrence that "Graterthen opt + Equal opt" that mean is the value grater then this or Equal to this// output is "false"
console.log(2 <= 1)
// output is "true"

console.log("2" > 3) // or
console.log("02" > 3) // Please remember one thing that if anybody try to compare to diffrent datatype it's wrong 
// it work in js but this is not a valid it like a dissapointed

console.log(null > 0) // output is "false"
console.log(null == 0) // output is "false"
console.log(null >= 0) // output is "true" ?????? why ??? how ?? be patience let's understand it

// { always remember this thing} => the reason is that an Equality check == " Equal " and comparison > < <= >= work diffrently with ""null"" 
//comparison opt convert null into a number, treating as 0 that's why (0) null >= 0 "true" && null > 0 "false"

console.log(undefined == 0)// its output it "false" and this is always become because undefined always undefined, no  matter how you do it with any comparison opeartor.


// last one is  strict use ??? ==> its sign is "==="
// it use when you want to check you value is correct or not in strict way 
console.log("2" === 2)// its output is "false"
// while
console.log("2" == 2)// its output is "true"


// Conclusion is :
// 1. always use === to check your value or input is correct
// 2. avoid == 
// don't write the code like this:-
// console.log("2" == 2)
// console.log(null >= 0)
// console.log(null == 0)
// console.log(null > 0)
// Always write neat and clean code