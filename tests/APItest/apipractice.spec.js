import {test, expect} from '@playwright/test'
import { request } from 'http'



test ('GET  all employees', async ({request}) => {

await request.get ("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")

const headers = {
"cookie" :"orangehrm=nr528n20onaga7u9sb1g67jle8",
"host":"opensource-demo.orangehrmlive.com",
"referer":"https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"
}

const Getresponce = await request.get("https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC",{headers})

expect (Getresponce.status()).toBe (200)

const jsonformat = await Getresponce.json()

console.log(jsonformat)
})


test("POST create user",async({request})=>{
    const url="https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees"
    const headers={
        "Cookie":"orangehrm=uqtlk2cd7oshbrp1heg65vkecj",
        "Host":"opensource-demo.orangehrmlive.com",
        "Origin":"https://opensource-demo.orangehrmlive.com"
    }
    const payload={
      "firstName": "anil",
      //"middleName": "",
      "lastName": "anil123",
      //"empPicture": null,
      "employeeId": "04541"
    }

    
    
    const createUser=await request.post(url,{headers,data:payload})
     expect(createUser.status()).toBe(200)
    const response= await createUser.json()
    console.log(response)
})

test("PATCH verify api testing using  Method ==update user",async({request})=>{
    const headers={
        "Cookie":"orangehrm=uqtlk2cd7oshbrp1heg65vkecj",
        "Host":"opensource-demo.orangehrmlive.com",
        "Origin":"https://opensource-demo.orangehrmlive.com"
    }
    const url='https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/155/personal-details'
   const payload={
  "lastName": "taraktarak", "firstName": "aniket", "middleName": "", "employeeId": "0360", "otherId": ""
      }
   const updatedate=await request.patch(url,{headers,data:payload})
   expect(updatedate.status()).toBe(200)
  const response= await  updatedate.json()
  console.log(response)
})



test("DELETE verify api testing using delete Method",async({request})=>{
    const headers={
        "Cookie":"orangehrm=uqtlk2cd7oshbrp1heg65vkecj",
        "Host":"opensource-demo.orangehrmlive.com",
        "Origin":"https://opensource-demo.orangehrmlive.com"
    }

const url='https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees'
const payload={
    "ids": [113]

}

const deleteusre=await request.delete(url,{headers,data:payload})
expect(deleteusre.status()).toBe(200)
})