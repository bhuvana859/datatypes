const { test, expect } = require('@playwright/test');

exports.jobtitlepage = class jobtitlepage {

    constructor(page) {

        this.page = page
       
        this.jobmenuitem = page.getByText("Job ")
        this.jobTitleSubmenuItem = page.locator('//a[@role="menuitem"]').first()
        this.addBtnItem = page.locator('//i[@class="oxd-icon bi-plus oxd-button-icon"]').first()
        this.jobTitleItem = page.locator('//input[@class="oxd-input oxd-input--active"]').last()
        this.jobdescriptionItem = page.locator('//textarea[@class="oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical"]').first()
        this.SaveBtnItem = page.locator('//button[@type="submit"]')
    }

    async addjob(jobTitle, jobDescription){

       await this.jobmenuitem.click()
       await this.jobTitleSubmenuItem.click()
       await this.addBtnItem.click()
       await this.jobTitleItem.fill(jobTitle)
       await this.jobdescriptionItem.fill(jobDescription)
       await this.SaveBtnItem.click()
    
    }

    async verifyjobTitleSuccessMessage (){

   await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle')

    }


}