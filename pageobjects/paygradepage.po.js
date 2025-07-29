const { test, expect } = require('@playwright/test');

exports.paygradepage = class paygradepage {

    constructor(page) {

        this.page = page
    
      this.jobmenuitem = page.getByText("Job ")
      this.paygradesubMenuItem = page.getByText('Pay Grades')
      this.addBtn =page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary"]')
      this.paygradeNameInput = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
      this.SaveBtnItem = page.locator('button[type="submit"]')
     // this.paygradesuccessMessage =page.locator('//p[@class="oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text"]')
    }
      async addpayGrade(name){
       await this.jobmenuitem.click()
       await this.paygradesubMenuItem.click()
       await this.addBtn.click()
       await this.paygradeNameInput.fill(name)
       await this.SaveBtnItem.click()
    
    }

   async verifypaygradeSaved (){
    await expect(this.paygradesuccessMessage).toBeVisible()

    }
  }




       

