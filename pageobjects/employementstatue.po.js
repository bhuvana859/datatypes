const { test, expect } = require('@playwright/test');

exports.employementstatuspage = class employementstatuspage {

    constructor(page) {

      this.page = page
      this.jobmenuitem = page.getByText("Job ")
      this.employementstatusSubMenu = page.locator('(//a[@class="oxd-topbar-body-nav-tab-link"])[3]')
      this.empststusAddBtn = page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary"]')
      this.empststusName = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
      this.saveBtn = page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]')
     // this.successmessage = page.locator('p[class="oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text"]')
    }
      async addempstatus(addEmpname){
       await this.jobmenuitem.click()
       await this.employementstatusSubMenu.click()
       await this.empststusAddBtn.click()
       await this.empststusName.fill(addEmpname)
       await this.saveBtn.click()
    
    }

    async verifyEmpStatus(){

     await expect(this.successmessage).toBeVisible()

    }

}







       

