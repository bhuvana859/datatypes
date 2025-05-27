// function add(num1, num2) {

//     console.log(num1 + num2)
// }

// //add(4,5)

// //undefined + undefined  = NaN

// // i want group of functions 

// // {



// // }


// class calculator {

//     a = 10

//     b = 20

//     add(num1, num2) {

//         console.log(num1 + num2)
//     }


//     substract(num1, num2) {

//         console.log(num1 - num2)
//     }

//     multiply(num1, num2) {

//         console.log(num1 * num2)
//     }

//     devision(num1, num2) {

//         console.log(num1 / num2)
//     }
// }

// const cal1 = new calculator()  // object creation of the class /Instace of the class 

// cal1.multiply(4, 6)

// cal1.add(4, 8)

// cal1.devision(10, 5)

// console.log(cal1.a) // 10

// //class can have variables and methods 

// // we need to crrate object, throgh that object we can access varibales and methods 

// //console.log(cal1.c)

// const raju = new calculator()

// console.log(raju.a)

// raju.substract(3, 6)


class Arjun {

    x = 10

    constructor(value1, value2) {

        console.log(value1)

        console.log(value2)

        
    }

    add(num1, num2) {

        return num1 + num2
    }


}

const obj1 = new Arjun("raju", "Murali")

//obj1.add(4,7)

// result = obj1.add(2,7)

// console.log(result)


// obj1.displayMessage()


// i have method inside a class 
// I dont want call that method 

// It should be automatically invoked 


//constructor 

// constructor is a method , but u dont need to call that method

// it will be automatically called 


const obj2 = new Arjun("Arujun", "Basavaraju")

const obj3 = new Arjun("Abhishek", "fareedha")

// class 

// methods
// variables 

// constructor 