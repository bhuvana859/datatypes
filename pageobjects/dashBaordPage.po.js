const { test, expect } = require('@playwright/test');

exports.dashBoardPage = class dashBoardPage{

      constructor(page){

        this.page= page
        
        this.pim = page.locator('a[href="/web/index.php/pim/viewPimModule"]')
         this.admin = page.locator('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]').first()

        
     }

     async clickonPIM(){

       await  this.pim.click()
     }


     async clickAdmin(){

       await  this.admin.click()


}
}