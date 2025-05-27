// class Employee{


//    static x = "raju" // static varibale 

//     y = "Arjun" // non static variable 

//     display(){

//         console.log("this is a simple method")
//     }

//     //non static method 

//     m1(){

//         console.log("this method is m1")
//     }



//     // Static method 
//     static m2(){

//         console.log("this method is m2 ")
//     }


//     m3(){

//         console.log("this method is m3")
//     }
// }


// const emp1 = new Employee()

// console.log(emp1.x)

// emp1.m2()


//we dont need to create object for a class to access static variables and methods


// classname.variablename 
// classname.method

//To Access the non static variables and method we should create object 

// console.log(Employee.y)

// Employee.m3()

//this keyword 


class student{

    x = "Raju"


    m1(){


        console.log(this.x)
        console.log("this method is m1")
    }

    m2(){

         this.m1()

        console.log("this method is m2")

        this.m3()
    }

    m3(){

        console.log("this method is m3")
    }
}

const stu1 = new student()

stu1.m2()

//this 

//when we are calling a method/variable in another method within the class 

//POM  