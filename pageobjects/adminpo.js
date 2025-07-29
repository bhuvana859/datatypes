const { test, expect } = require('@playwright/test');

exports.adminpage = class adminPage{

      constructor(page){

        this.page= page
        
        this.admin = page.getBytext('Admin')


        
     }

     async clickAdmin(){

       await  this.admin.click()
     }

    }



