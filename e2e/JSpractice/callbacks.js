

// console.log("Raju")

// console.log("Darshan")

// console.log("Deekshth")


// //===============================

// // setTimeout( function , 8000)



// //ex1
// //==================================================
// console.log("Raju")

// setTimeout(function displaymessage(){

//     console.log("Darshan")

// }, 5000);

//  console.log("Deekshth")


//ex2
//==================================================

 function displayresult(value){

    console.log(value)
 }

 function add(num1,num2){

    sum = num1 + num2 
    displayresult(sum)
}
add(4,6) 



//ex3/ with two callback functions
//==================================================

//  function add(num1, num2, callback){
//   sum = num1+ num2   
//      callback(sum)
// }

// add(4,6, displayresult) //10

//  add(4,6, devideresultby2) //5



//anonimus function
//==================================================

//ex1
//==================================================

//function (){

  //  console.log("this is anonimous function")
//}


// // We use anonimous function as call back function 
//===========================================================   


// // arr = [3,6,7,8,9]

// // oddnumbers = arr.filter( ele => ele%2 !==0)

// // console.log(oddnumbers)


// //function which will accepts the callback as argument/parameter then that function is higher order

// //callback function will be called as closure function when it taking data from the higher order function 

// function printmessage(){

//     console.log("this is callback function")

// }

// function displaydata( callback ){

//     console.log("This is a higher order funtion")

//     callback()  // this 
// }



// //displaydata(printmessage()) // this wrong syntax

// displaydata(printmessage)


// function add( callback){

//     let sum = 10  //15

//     callback(sum) // closure function
// }


// function x ( callback){
//     // stament 
// }

// function a(callback){

//     //statement 
// }


// function B(callback){

//     //statement 
// }

// //callback hell 