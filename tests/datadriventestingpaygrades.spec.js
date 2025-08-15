import { test, expect } from '@playwright/test';
import login from '../testdata/login1.json'


const paygrades = {

     paye1: "Attender",
     paye2: "Security",
     paye3: "Driver",
}



for(let paye in paygrades){

test(`data driven testing  - ${paygrades[paye]}`, async ({ page }) => {

   await page.goto("/web/index.php/auth/login")

   await page.locator("input[name='username']").fill(login.username)

   await page.locator("input[type='password']").fill(login.password)

   await page.locator("button[type='submit']").click()

   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

   await expect(page.locator('ul[class="oxd-main-menu"]')).toBeVisible()
   // click on the admin module
   await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();

   //clcik on the Job
   
   await page.locator("//li[contains(.,'Job')]").click();

   await page.locator("//a[normalize-space(text())='Pay Grades']").click();

   await page.locator("button.oxd-button.oxd-button--medium").click();


   await page.locator("//label[normalize-space(text())='Name']/following::input").fill(paygrades[paye])

   await page.locator("button[type='submit']").click()

        

})


}