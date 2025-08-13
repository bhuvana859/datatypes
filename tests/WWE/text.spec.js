const { test, expect } = require('@playwright/test');

test("Working with text", async ({ page }) => {

    await page.goto("https://www.flipkart.com/")

   //    await expect(page.locator('//a[@aria-label="Mobiles"]/div/div/span/span')).toHaveText("Mobiles")

     await expect(page.locator('(//a[@class="_1ch8e_"])[1]')).toHaveText("Minutes")


    // const textvalue = await page.locator('(//img[@class="_2puWtW _3a3qyb"])[1]').textContent('Minutes')
    // console.log(textvalue)

    const values = await page.locator('img[class="_2puWtW _3a3qyb"]').allTextContents()
    for(let i of values){
    console.log(i)
   }

//     const textvalue = await page.locator('//a[@aria-label="Mobiles"]/div/div/span/span').innerText()

//     console.log(textvalue)

//     const values = await page.locator('//a[@class="_1ch8e_"]/div/div/span/span').allInnerTexts()

//     for (let i of values) {
//         console.log(i)
//     }
// })



// test("Working with text - Orange HRM", async ({ page }) => {

//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

//     const username = await page.locator('p[class="oxd-text oxd-text--p"]').first().textContent()

//     console.log(username)

//     const usernamevalue  = username.split(" ")

//     //await page.locator('input[name="username"]').fill(usernamevalue[2])
//     //or 

//     await page.fill('input[name="username"]', usernamevalue[2])

 })