const { test, expect } = require('@playwright/test');

test('Working with check box', async ({ page }) => {

    //single checkbox implimented
    //=====================================================================================================
    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details&')

    const isChecked = await page.locator('input[type="checkbox"]').isChecked();
    console.log(isChecked);//itwill give false for us

    if(!isChecked){
    await page.locator('//input[@type="checkbox"]').check()
    }//it will print false

    await page.locator('//input[@type="checkbox"]').check()
    await expect(page.locator('input[type="checkbox"]')).toBeChecked()
    await page.waitForTimeout(2000)
    await page.locator('//input[@type="checkbox"]').uncheck()
    await expect(page.locator('//input[@type="checkbox"]')).not.toBeChecked()
    // const isChecked = await page.locator('input[type="checkbox"]').isChecked();
     console.log(isChecked);
if(isChecked){

    await page.locator('//input[@type="checkbox"]').check()
    
    await expect(page.locator('input[type="checkbox"]')).toBeChecked()
}


    // await page.waitForTimeout(2000)


})