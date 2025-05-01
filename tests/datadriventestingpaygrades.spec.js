import { test, expect } from '@playwright/test';
import login from '../testdata/login.json';


const paygrades = {

     pay1: "Attender",
     pay2: "Security",
     pay3: "Driver",
     pay4: "Technician",
}



for(let pay in paygrades){
test(`data driven testing for pay - ${paygrades[pay]}`, async ({ page }) => {

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

   const random5Char = Math.random().toString(36).substring(2, 7);

   await page.locator("//label[normalize-space(text())='Name']/following::input").fill(paygrades[pay])
   await page.locator("button[type='submit']").click()

   


  })
}