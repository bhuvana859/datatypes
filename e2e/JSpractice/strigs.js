
str =  "Raju"

str = 'Arjun'

str = `Manju`

//coersion

//+  number to string 

num = 2+ "2"

console.log(num)

num2 = 3 + "Raju"

console.log(num2)


num3 = "Raju" - 2 

console.log(num3)


//NaN 

num4 = 6+ undefined

console.log(num4)


//totalcarprice = sellingprice + delivery 

totalcarprice = 22000 + 800

// delivery - undefined 

console.log(totalcarprice) // 22800

console.log(totalcarprice)  // NaN  



//.length 

str =  "Raju is staying in blr"

console.log(str.length) //4

str = "     Raju    "

console.log(str.length)

console.log(str.trim().length)

str = "This Is a Javascript class"

str2 = str.toUpperCase()

console.log(str2)

//string convert to array 


console.log(str.split(" "))

//array to string 

arr = ["javascript" , "is", "a", "high", "level", "language"]

str3= arr.join(" ")

console.log(str3)


str = " BGJHGKUGIUGYUGftiugtknmfgkjdfhjv"

st2 = str.toLowerCase()

//a != A 

console.log(st2)

str = "javascript"

st3 = str.substr(4,str.length)

console.log(st3)

console.log(str[2])

//charAt()

console.log(str.charAt(4))

str = "40"

num = Number(str)

console.log(typeof(num))

num2 =  Number("89")  //89

//string to number 


//includes

str = "raju arjun manju"

console.log(str.includes("murali"))

//strings are immutable 

arr = [3,5,6,7,8]

arr[3] = "9"

console.log(arr)

str = "javassript"

str[5] = "c"  // this wont work for you and this will not give you error 

console.log(str)

//strings are immutable 
//replace()


str1 = "$196"

str2 = "$345"

total = Number(str1.replace("$", "")) +Number(str2.replace("$", "")) // 

console.log(total)

// price1 = "$120"

// price2 = "$60"


str = "Raju" //less


str = new String("Raju") // more  // string a object

str = "Raju\nArjun"

console.log(str)


str1 = "Raju"

str2 = "Arjun"

str3 = str1.concat(str2)

console.log(str3)

str4 = "Raju\t" + "G"

console.log(str4)