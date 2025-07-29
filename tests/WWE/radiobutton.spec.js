const { test, expect } = require('@playwright/test');

test('Working with Radio button - example', async ({ page }) => {

    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')
     
    await expect(page.locator('input[value="m"]')).toBeChecked() //verifying male checked or not
    
    await expect(page.locator('input[value="f"]')).not.toBeChecked() // verifying female un checked or not

    await page.locator('input[value="f"]').check()

    await expect(page.locator('input[value="m"]')).not.toBeChecked() // male should not be checked 

    await expect(page.locator('input[value="f"]')).toBeChecked() //male should  be checked 

    const isChecked = await page.locator('input[value="f"]').isChecked() // true / false

    console.log(isChecked)

    await page.waitForTimeout(5000)

})


test('Working with Radio button - example 2', async ({ page }) => {

    await page.goto('https://demo.guru99.com/test/radio.html')
    
    await page.locator('input[value="Option 2"]').check()

    await page.locator('input[value="Option 2"]').uncheck()

    await page.waitForTimeout(5000)

})