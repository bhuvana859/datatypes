

str = "4" + 5  //45

num = 45


str = Number("45")

num = String(86)   // "86"

//to covert the number to string 

console.log(typeof(num))

//BigInt // any a number abobe 2^53 

num = 2**53

console.log(num) // 9007199254740992  

num2 = 58768576457689456875487645786954n

num3 = 3n  

//total = 58768576457689456875487645786957

console.log(num2+num3)

num = 34 

//num = new Number(45) // Number as object  

//NaN  - Not a number 

isNaN() // true or false 


num = "Raju" - 4   // NaN 

console.log(isNaN(num))


//parseInt

str = "34.8"

num3 = parseInt(str)

console.log(num3)

//parseFloat  34.8


max = Math.max(3,4,5,6,7,89,9)

console.log(max)

minNum = Math.min(3,4,5,6,7,89,9)

console.log(minNum)

num = Math.round(3.5)
console.log(num)

num = Math.ceil(3.2)
console.log(num)

// OOPs 

// class 
// constructor 
// static 