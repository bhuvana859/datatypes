import { expect, test } from "@playwright/test";
import fs from 'fs';

test.only('Get API', async ({ request }) => {

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



