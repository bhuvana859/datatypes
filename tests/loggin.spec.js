import { test, expect } from '@playwright/test';

test("Verify login with valid credentials", async ({ page }) => {

   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

   await page.waitForTimeout(2000)

   await page.locator("input[name='username']").pressSequentially('Admin',{delay:1000})

   await page.locator("input[type='password']").fill('password')

   await page.locator("button[type='submit']").press('$');
   
   await page.waitForTimeout(5000)

   await page.locator("input[name='username']").clear()
   
})
