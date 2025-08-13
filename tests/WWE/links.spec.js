const { test, expect } = require('@playwright/test');


//once press on the login button it will navigate to other domine how to handil the situation
//====================================================================================================

// test.describe('Automation - Working With Elements', () => {
    
//     test('Links -example ', async ({ page }) => {

//         await page.goto('https://trello.com/')

//         await page.click("//a[text()='Log in']")
//         await page.getByTestId('username').fill("basavar05@gmail.com")
//     })



    //how many links are there how ve can erify 
    //=====================================================
      
     test('Links -example2 ', async ({ page }) => {

        await page.goto('https://www.wikipedia.org/')

       // await expect.soft(page.locator("//a")).toHaveCount(371)

 await page.locator('[data-jsl10n="commons.name"]').click()

//         // or 

//         await page.click('[data-jsl10n="commons.name"]')
      
      //  await page.waitForTimeout(5000) // Halt execution for 5 sec 

        await expect(page).toHaveURL('https://commons.wikimedia.org/wiki/Main_Page')
         await page.goBack() // Navigate Back to previous 

         await page.locator('(//span[@class="other-project-title jsl10n"])[2]').click()

        await page.waitForTimeout(5000)
          await expect(page).toHaveURL('https://www.wikivoyage.org')
         await page.goBack()

         await page.waitForTimeout(5000)

        await page.goForward() //Navigate forward to previous  

    })
     

