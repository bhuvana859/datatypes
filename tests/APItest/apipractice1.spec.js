import { expect, test } from "@playwright/test";
import fs from 'fs';

test('GET api verification',async({request})=>{
const headers ={
"cookie":"orangehrm=chrl9bk9i8c2upib9u1gevbh78"
}
const Getresponse = await request.get('https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',{headers})
expect (Getresponse.status()).toBe(200)
console.log(await Getresponse .json())
const response = await Getresponse .json();
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