const { test, expect } = require('@playwright/test');


exports.jobtitlepage = class jobtitlepage {

     constructor(page){

        this.page= page 
        this .AdminMenuItem =page.loator('a[class="oxd-main-menu-item active"]')
        this.jobsubmenuItem = page.getByText('Job ')
        this.jobtitlesubmenuItem = page.locator('a[class="oxd-topbar-body-nav-tab-link"]').nth(1)
        this.addBtn = page.getByText(' Add ')
        this.jobtitleItem =page.locator('input[class="oxd-input oxd-input--active"]')
        this.jobdescriptionInput = page.locator('textarea[placeholder="Type description here"]')
        this.saveBtn = page.locator('button[type="submit"]')
        this.successmessage = page.locator('h6[class="oxd-text oxd-text--h6 orangehrm-main-title"]')

     }
        async addJobTitle(jobtitle, jobdescription){

            await this.AdminMenuItem.click()
            await this.jobsubmenuItem.click()
            await this.jobtitlesubmenuItem.click()
            await this.addBtn.click()
            await this.jobtitleItem.fill(jobtitle)
            await this.jobdescriptionInput.fill(jobdescription)
            await this.saveBtn.click()
    
        }

        async verifyjobtitlecreated(){
   
        await expect(this.successmessage).toBeVisible()

    }


    
        






            

}