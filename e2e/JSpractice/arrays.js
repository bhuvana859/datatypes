
// var arr = []  // empty array\

// var arr1 = [1,2,3,4,6,7] // array with homogenious elements 

// var arr2 = ["raju",2, true,4,null,undefined] // array with hetiro elements 

// console.log(arr2)

// //index always starts from 0
// console.log(arr2[3])

// console.log(typeof(arr2))

// x=null
// console.log(typeof(x))

// console.log(typeof(arr2[2]))

// console.log(arr2.length) // number of elements in an array

// //To Join / club two arrays concat

// arr3 = arr1.concat(arr2)

// console.log(arr3)

// arr4 =["manju", "swamy", "girish", "ranjitha", "praveen"]

// //sorting elements in array  sort()

// sortedarray = arr4.sort()

// console.log(sortedarray)

// arr5 = [9,4,1,7,3,8]

// sortednum = arr5.sort()

// console.log(sortednum)

// // push - to add the elemts to array at end 

// // unshift - to add the element at the beginning 

// // pop - to remove elements at the end 

// // shift - to remove elements at the beginning 

// activities = [ "wakeup", "work", "eat"]

// //activities.push("exersize")

// // activities.unshift("exersize")

// // activities.pop()

// // activities.shift()

// // console.log(activities)

// // includes  - to check whether element is present or not 

// if(activities.includes("work")){

//     console.log("element is present")
// }


// str = "this is javascript class"

// str2 = str.split("")
// //[ 'this', 'is', 'javascript', 'class' ]

// arr6 =str2.reverse()

// console.log(arr6)

// //join("")  will convert array to string 

// //split method will convert string to array

// // console.log(str2)

// reversedstr = str.split("").reverse().join("")

// console.log(reversedstr)


// arr10 = ["raju", "basavaraju", "Mahesh","wakeup", "work", "eat"]

// // arr10[1] = "Swamy"

// // console.log(arr10.indexOf("Mahesh"))

// // arr11 = arr10.slice(2,6)

// // console.log(arr11)

// //for of

// for(let i of arr10){
    
//     console.log("loop begins")
//     console.log(i)

//     console.log("loop ends")
// }










//reduce
//===========

// For reduce((acc, curr) => acc + curr, 0) on [1, 2, 3, 4]:

// acc = 0, curr = 1 → result = 1

// acc = 1, curr = 2 → result = 3

// acc = 3, curr = 3 → result = 6

// acc = 6, curr = 4 → result = 10


// const numbers = [1, 2, 3, 4, 5];

// // Sum of all numbers
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // Output: 15

// // Find the maximum value
// const max = numbers.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue));
// console.log(max); // Output: 5






// arr1= ["raju", "suman", "harish","anil",]


// arr2=["raju",1,2,3,"anil","nandu","mahesh"]

//lenth
//=================

// arr3=arr1.concat(arr2)
// console.log(arr3)

// console.log(arr3.length)


// arr3=[1,2,3,4,5,6,10]

// arr4=["anil","manju","mahi"]

// arr5=arr3.concat(arr4)
// console.log(arr5)

//pop
//======================

// arr4=["weakup","read","work","sleep","drinkingwater"]

// arr4.unshift("yoga")
// // console.log(arr4)
//  arr6=["weakup","dancing","playing","riding",]

//  arr6.pop()

//  console.log(arr6)
//  arr6.pop()

//  console.log(arr6)




//remove all elements in array
//===============================


// arr11=["weakup","read","work","sleep"]


// for(let i=1; i<arr11.length; i++){

// arr11.pop()

// }

// console.log(arr11)

//===============================================================

//replace
//==============

// arr9=["raju", "suman", "harish","anil",]
// arr9[1]="manju"     
//  console.log(arr9)


//  arr9= ["raju","darshan","farida"]

//  arr9[2]="lalitha"

//  console.log(arr9)


// arr10=["raju","basavaraju","mahesh"]

// console.log(arr10[5])

// arr10=["raju","basavaraju","mahesh"]

// arr10[1]="swamy"
// console.log(arr10)



//slice
//============
//In JavaScript, the slice() method is used to extract a portion of an array or string without modifying the original.
//==========================================================================================================================
//ex1
//=====

// let fruits = ["apple", "banana", "cherry", "date"];
// let sliced = fruits.slice(1, 3); 
// console.log(sliced); 
// ["banana", "cherry"]

//slice(start, end) extracts elements from start index up to, but not including, end

//ex2
//======

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.slice(1, 4); 
//  newArr will be [2, 3, 4]

//ex3

// const newArr2 = arr.slice(2);
//  newArr2 will be [3, 4, 5]

//ex4

// const newArr3 = arr.slice(-2);
//   newArr3 will be [4, 5]


//splice
//=========


//In JavaScript, splice() is a method used to add, remove, or replace elements in an array
//ex1
//=====



// let fruits = ["apple", "banana", "cherry", "date"];
// fruits.splice(1, 2); 
// console.log(fruits); // ["apple", "date"]



//filter
//=========


//It's commonly used for searching, cleaning, or validating arrays.

// const users = [
//     { name: 'anil', active: true },
//     { name: 'harish', active: false },
//     { name: 'siddu', active: true }
//   ];
  
//   const activeUsers = users.filter(user => user.active);

//   console.log(activeUsers);




// map() method, which is used to transform each element of an array and return a new array with the transformed values.

//Syntax:

// const newArray = array.map((element, index, array) => {
//   // return the new value for each element
// });

// Example:

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled); // Output: [2, 4, 6, 8]

// Each element is processed through the callback function, and the results are collected into a new array. The original array is not modified.


