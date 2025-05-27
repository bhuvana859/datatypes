const { test, expect } = require('@playwright/test');

exports.dashBoardPage = class dashBoardPage{

      constructor(page){

        this.page= page
        
        this.pim = page.locator('a[href="/web/index.php/pim/viewPimModule"]')
        this.Admin = page.locator('span[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').nth(1)

        
     }

     async clickonPIM(){

       await  this.pim.click()
     }

     
     async clickonAdmin(){
      
       await this.Admin.click()
}
}