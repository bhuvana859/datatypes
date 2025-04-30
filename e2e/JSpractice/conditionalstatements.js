// 1. conditional statements
//  1. if
//  2. else if
//  3. else
//  4. switch




//  1. if

//  1. if block of the code shoul be run based on the condition//if block of the code will execute if the condition is true //

// if condition is true then only the block of code will execute
// if condition is false it block of code will not execute
 //ex 1 syntax


//condition - pass

// if (2 ===2) {

//     console.log("Raju")

//     console.log("Arjun")

//     console.log("Deekshit")


// }

// conditio is fail it will not excute

//  if (3==="3") {

//     console.log("Raju")

//     console.log("Arjun")

//     console.log("Deekshit")


// }


// if (true) {

//     console.log("Raju")

//     console.log("Arjun")

//     console.log("Deekshit")


// }

// if (false) {

//     console.log("Bangalore")

//     console.log("Hyderabad")

//     console.log("Delhi")


// }


// if (6>5) {

//     console.log("exicute block")

//     console.log("create team")


// }


// if (6<5) {

//     console.log("exicute block")

//     console.log("create team")


// }

// if (100>50){

//     console.log("exicute if condition")

// }

// if (200>50){

//     console.log("exicute if condition")

// }

//======================================================

//else

// if (true){

//     console.log ("Block 1")
// }
// else {

//     console.log ("Block 2")
// }


//here if block only exicute because if condition is pass

// if (false){

//     console.log ("Block 1")
// }



// else {
//===================================================
//     console.log ("Block 2")
// }


//here else block only exicute because if condition is fail



// if (2===2) {

//     console.log ("Block 1")
// }
// else {

//     console.log ("Block 2")
// }


// if (2==="2") {

//     console.log ("Block 1")
// }
// else {

//     console.log ("Block 2")
// }



// if (false) {


//     console.log("JS Class 1")
// }
// else {


//     console.log("JS Class 2")
// }


//3. else if
//=========================
// 1. else if block of the code should be run based on the condition//else if block of the code will execute if the condition is true //
// 2. if condition is true then only the block of code will execute

// // condition - Pass -print  block 1

// //  condition -fail  -print block 2


//ex1

// if (true) {


//     console.log("JS Class 1")
// }
// else if (true) {


//     console.log("JS Class 2")
// }



//ex 2
// if (true) {

//     console.log(" playwright class 1")
// }
// else if (true) {

//     console.log(" playwright class 2 ")
// }

// else if (false) {

//     console.log(" playwright class 3 ")
// }



//ex3

// if (false) {

//     console.log(" playwright class 1")
// }
// else if (true) {

//     console.log(" playwright class 2 ")
// }

// else if (false) {

//     console.log(" playwright class 3 ")
// }


//ex4

// if (false) {

//     console.log(" playwright class 1")
// }
// else if (false) {

//     console.log(" playwright class 2 ")
// }

// else if (true) {

//     console.log(" playwright class 3 ")
// }

//ex5
// if (true) {

//     console.log(" playwright class 1")
// }
// else if (true) {

//     console.log(" playwright class 2 ")
// }

// else if (true) {

//     console.log(" playwright class 3 ")
// }


//ex6


// const marks= 100

//  if (marks>=90 && marks<=100) {

//     console.log("Grade A")
//  }
//     else if (marks>=80 && marks<90) {

//         console.log("Grade B")
//     }

//     else if (marks>=70 && marks<80) {

//         console.log("Grade C")
//     }

//     else if (marks>=60 && marks<70) {

//         console.log("Grade D")
//     }

//     else if (marks>=50 && marks<60) {

//         console.log("Grade E")
//     }

//     else if (marks>=40 && marks<50) {

//         console.log("Grade F")
//     }

//     else{

//         console.log("Fail")
//     }



// ans is grade A because 100 is greater than 90 and less than 100


//================================
 //  if(){

//}

//   else if (){

//  }

//  else if (){

//  }

//  else{

 //  }
//===================================


//3.switch
//====================


//  var x = "Tuesday"

// switch (x) {
//     case "Sunday":

//         console.log("X value is sunday")
//         break;
//     case "Monday":

//         console.log("X value is Monday")
//         break;

//     case "Tuesday":

//         console.log("X value is Tuesday")
//         break;

//     case "Wednesday":

//         console.log("X value is Wednesday")
//         break;

//     default:
//         console.log("X value is not  a day")

//         break;
// }

// ans = "X value is Tuesday"

//==================================================

// switch (4) {
//     case 1:
//         {
//           console.log("this is javascript class1")
//         }
//         break;

//     case 2:
//         {
//          console.log("this is javascript class2")
//         }
//     break;

//     case 3:
//         {
//         console.log("this is javascript class 3")
//         }
//     break;

//     case 4:
//         {
//         console.log("this is javascript class 4")
//         }
//     break;

//     case 5:
//         {
//         console.log("this is javascript class 5")
//         }
//     default:
//     {
//         console.log("this is javascript class")
//         }
//     break;

// }


// let day;
// switch (new Date().getDay()) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//     case 6:
//         day = "Saturday";
//   default:
//         day = "Raju";
        
// }
//  console.log(day);

 //it will give the current day of the week based on the system date






















// if () {


// }

// or

// if () {


// }
// else {


// }

// or

// if () {


// }

// else if () {


// }

// else {


// }

// or

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// // } 