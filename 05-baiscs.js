// // Memory

// // their are two type of Memory 
// // Stack Memory(is a "primitive") && Heap Memory(is a "non-primitive")

// // all primiyive are use stack memory Heap its opposite

// // let's do wtih stack

// let myname = "abc";

// let anotherename = myname;

// console.log(anotherename)// output is "abc" but how???
// // because we declare a variable before anothername that myname and value of myname is abc but but but here is little change that we are do here ine thing we declare another variable  "anothername" and store value of myname that's why theouput is "abc"

//  anotherename = "efg"

//  console.log(anotherename)// output is "efg" because we change value of anothername but notice one thing that what's the value of myname 
//  console.log(myname)// output is "abc" why?? we declare it first and wechange it's copy not orignal value.

//  //Remember one thing in "STACK you change the COPY VALUE" not orignal value

// //  let's move on HEAP 

// // let userOne = {
// //     email = "abc@gmail.com" ,
// //     upi = "abc@ghf#ty"
// // }

// // let userTwo = userOne

// // userTwo.email = "efg@gmail.com"

// // console.log(userOne.email)//output is "efg@gmail.com", itis type of access object
// // console.log(userTwo.email)//output is "efg@gmail.com"==> think why???? because here we chage the orignsl value  not copt valuethat's why the value  change 

// // remember one thing in the heap we change the orignal value not copy value
// // conclusion is 

// // we have two types of memory 
// // 1. stack memory
// // 2. heap memory

// // Stack Memory define ==> stack store pimitive datatypes and copy the cariabke value to another variable

// // Heap Memory define ==> heap store Refrence (non-primitive) datatypes and it always give origanl value from one variable to another variable we can say it refrence also that mean it give refrence value. 

// // Always remember one more thing variable atore in stack always not value of the variable