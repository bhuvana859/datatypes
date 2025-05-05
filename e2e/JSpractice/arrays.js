
var arr = []  // empty array\

var arr1 = [1,2,3,4,6,7] // array with homogenious elements 

var arr2 = ["raju",2, true,4,null,undefined] // array with hetiro elements 

console.log(arr2)

//index always starts from 0
console.log(arr2[3])

console.log(typeof(arr2))

x=null
console.log(typeof(x))

console.log(typeof(arr2[2]))

console.log(arr2.length) // number of elements in an array

//To Join / club two arrays concat

arr3 = arr1.concat(arr2)

console.log(arr3)

arr4 =["manju", "swamy", "girish", "ranjitha", "praveen"]

//sorting elements in array  sort()

sortedarray = arr4.sort()

console.log(sortedarray)

arr5 = [9,4,1,7,3,8]

sortednum = arr5.sort()

console.log(sortednum)

// push - to add the elemts to array at end 

// unshift - to add the element at the beginning 

// pop - to remove elements at the end 

// shift - to remove elements at the beginning 

activities = [ "wakeup", "work", "eat"]

//activities.push("exersize")

// activities.unshift("exersize")

// activities.pop()

// activities.shift()

// console.log(activities)

// includes  - to check whether element is present or not 

if(activities.includes("work")){

    console.log("element is present")
}


str = "this is javascript class"

str2 = str.split("")
//[ 'this', 'is', 'javascript', 'class' ]

arr6 =str2.reverse()

console.log(arr6)

//join("")  will convert array to string 

//split method will convert string to array

// console.log(str2)

reversedstr = str.split("").reverse().join("")

console.log(reversedstr)


arr10 = ["raju", "basavaraju", "Mahesh","wakeup", "work", "eat"]

// arr10[1] = "Swamy"

// console.log(arr10.indexOf("Mahesh"))

// arr11 = arr10.slice(2,6)

// console.log(arr11)

//for of

for(let i of arr10){
    
    console.log("loop begins")
    console.log(i)

    console.log("loop ends")
}