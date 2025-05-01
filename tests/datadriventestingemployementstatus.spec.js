import { test, expect } from '@playwright/test';
import login from '../testdata/login.json';


 const employests = {

      empl1 : "fulltime",
      empl2 : "contract",
      empl3 : "parttime",
 }



for(let employe in employests){

test(`data driven testing   - ${employests[employe]}`,async ({page}) => {

   await page.goto("/web/index.php/auth/login")

   await page.locator("input[name='username']").fill(login.username)

   await page.locator("input[type='password']").fill(login.password)

   await page.locator("button[type='submit']").click()

   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

   await expect(page.locator('ul[class="oxd-main-menu"]')).toBeVisible()
   await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();

   
   await page.locator("//li[contains(.,'Job')]").click();
   await page.locator("(//a[@class='oxd-topbar-body-nav-tab-link'])[3]").click();
   await page.locator("i.oxd-icon.bi-plus.oxd-button-icon").click();

   await page. locator("//label[normalize-space(text())='Name']/following::input").fill(employests[employe]);
   
})
}
