//ex1
samplevariable =10
console.log(samplevariable)
console.log(typeof(samplevariable))


//ex2
samplevariable ="raju"
console.log(samplevariable)
console.log(typeof(samplevariable))


//ex3
samplevariable ="true"
console.log(samplevariable)
console.log(typeof(samplevariable))


//ex4
samplevariable =true
console.log(samplevariable)
console.log(typeof(samplevariable))

//ex5
samplevariable ="10"
console.log(samplevariable)
console.log(typeof(samplevariable))

st1= "anil"

console.log(typeof(st1))



st1= "basavaraju"

console.log(typeof(st1))


st1= "santhosh"

console.log(typeof(st1))



// // JS Datatypes
// // JS is a weakly typed language, which means that variables can hold values of any type and can be changed at runtime.

// //Datatypes 

// // 1. Primitive Datatypes

//     // 1. number  10,20,45,30,50,23.6

//     // 2. string "Raju", "Car", "sentence"

//     // 3. Boolean true, false

//     // 4. undefined - variable is declared but not assigned any value

//     // 5. null - variable is declared and assigned empty value

// //2. Non Primitive Datatypes 
  
   //1. object

//       var student = {
//             stuname : "Manjunath", 
//             place: "blr",
//             age: 29,
//             employeeed : true

// }

// // //2. arrays

// // ["Manjunath", "blr", 29, true]

// // //3. regular expressions 

// // var regex = /[A-Za-z]+/; // Matches one or more alphabetic characters
// // var testString = "Hello123";

// // console.log(regex.test(testString)); // true, as it contains alphabetic characters
// // console.log(testString.match(regex)); // ["Hello"], matches the first occurrence



// var x = 10

// console.log(typeof(x))

// undefined - varibale is declared but not assigned any value - undefined 
// null - veriable is declared and assigned empty value - object

// bug  in JS 

// Initially JS Developers comapred with C


// Non Primitive Datatype

// 1. object

//   var student = {
//        stuname : "Manjunath",
//        place: "blr",
//        age: 29,
//        employeeed : true
//   }

//   console.log(student.stuname)

//   console.log(typeof(student.employeeed))

//   2. arrays

//    arr = ["Manjunath", "blr", 29, true]

// //    homogenious = All elements in array same datatype
// //     hetrogenious = All elements in array different datatype 
// //    arr = [10, 20, 30, 40, 50] // homogenious
// //    arr = ["Manjunath", "blr", 29, true] // hetrogenious

//    console.log(arr[0]) // 1st element in array
//    console.log(arr[1]) // 2nd element in array
//    console.log(arr[2]) // 3rd element in array
//    console.log(arr[3]) // 4th element in array
//    console.log(arr[4]) // 5th element in array


//  //  index starts from 0


//examples

 //1. Primitive Datatypes

//     // 1. number  10,20,45,30,50,23.6

//            x = 10

//            console.log(typeof(x))                                     

// // if you declare without var it will consider as a (var)
// //ex1
// var x = 20
//     y = 30 
//     z= x+y
// console.log(z)

// //ex2 with var

// var num1=35.4
    
//     num2 = 45.5

//     num3= num1+ num2

//     console.log(num3)

//     console.log(typeof(num1))
//     console.log(typeof(num2))
//     console.log(typeof(num3))

// var num1= 32.2  // FLOATING NUMBER ALSO CONSIDER A NUMBER

// console.log(num1)

// var num1=100

// console.log(num1)

// //  NNOTE VITH VAR KEY WORD WE CAN ALE TO REASSIGN AND RE DECLARATION IS POSIBLE ANY WARE I THE PROJECT 



// // 2. string "Raju", "Car", "sentence"


// var x= "chethan"

// console.log(typeof(x))



// var z= "bangalore"

// console.log(typeof(z))


// var a= "santhosh"

// console.log(typeof(a))



// var a= "Naveen"

// console.log(typeof(a))

// sentancenum1 = "anil'from' bangalore"
// console.log(typeof(sentancenum1))

// sentancenum1 = 'anil"from" bangalore'
// console.log(typeof(sentancenum1))

// sentancenum1 = `anil"from" bangalore`
// console.log(typeof(sentancenum1))

// // 3. Boolean true, false

// var x = true

//     console.log(typeof(x))


    
// var x = (1<2)

//     console.log(typeof(x))



// var x = 100<50

//     console.log(typeof(x))


// // 4. undefined - variable is declared but not assigned any value

// var x= (undefined)
// console.log(typeof(x))


// var z= (undefined)
//     console.log(typeof(z))



// var stname= 
//     console.log(typeof(stname))


// // 5. null - variable is declared and assigned empty value

// var x= (null)
// console.log(typeof(x))


// var z= (null)
//     console.log(typeof(z))

    
// var carname= (null)
//     console.log(typeof(carname))  // result is object



//     // actualy it is defect in the js code it wii break the complete code base
//     // typeof method is available in javascript to identify what type of data is

//     //2. Non Primitive Datatypes 
  
//    //1. object

//       var student = {
//             stuname : "Manjunath", 
//             place: "blr",
//             age: 29,
//             employeeed : true


// }


//     console.log(student.stuname)

//     console.log(typeof(student.stuname))

    
//     console.log(typeof(student.place))

//     console.log(typeof(student.age))
    
//     console.log(typeof(student.employeeed))


//  //2. arrays
 
//  //    homogenious = All elements in array same datatype
//  //     hetrogenious = All elements in array different datatype 
 
// // //    arr = [10, 20, 30, 40, 50] // homogenious
// // //    arr = ["Manjunath", "blr", 29, true] // hetrogenious


// // arr[]// emppty array

// // arr = ["admin","admin123"] // array with elements

// // arr = [2,3,4,6,8,9]//all elements are same Datatypes
// //  arr["one","two"]// both elements are strings


// // arr = ["admin","admin123"2,3,42,"one","two"] //elements are not same its called non homogenious elements

// //ex1

// arr = ["manjunath","blr",29,true]

    
//     console.log(arr[0])
    
//     console.log(arr[1])
    
//     console.log(arr[2])
    
//     console.log(arr[3])

//     //indexing will stsrt from [0]

    
//     //3. regular expressions 


//     str ="abckgjklgjfklgjfl;slkjgklsjf"


//     expect(str).to.equal("/abc/")
    
//     expect(str).to.equal("/abc/i")
