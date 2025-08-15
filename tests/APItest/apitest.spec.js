import { expect, test } from "@playwright/test";
import fs from 'fs';

test('Get API', async ({ request }) => {

const getusers = await request.get(`https://jsonplaceholder.typicode.com/posts`);

expect(getusers.ok()).toBeTruthy();
expect(getusers.status()).toBe(200);
console.log(await getusers.json())
const response = await getusers.json();
expect(response.length).toBeGreaterThan(0);
expect(response[2]).toHaveProperty('title');
expect(response[2]).toHaveProperty('body');
expect(response[2]).toHaveProperty('userId');

})


test.only('Post API', async ({ request }) => {

const url='https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees'
const headers={
    "cookie":"orangehrm=kqu7g6pkoq64beu5ulh0plldig",

"host":"opensource-demo.orangehrmlive.com",
"origin":"https://opensource-demo.orangehrmlive.com",
"referer":"https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee"
}
const payload={
"firstName": "apple",
 "middleName": "",
  "lastName": "apple",
   //"empPicture":null,
    "employeeId": "058869"
}

const createUser=await request.post(url,{headers,data:payload})
expect(createUser.status()).toBe(200)
    const response=await createUser.json()
console.log(response)
})