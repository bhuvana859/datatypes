const { test, expect } = require('@playwright/test');

exports.jobcategorypage = class jobcategorypage{

constructor(page){

this.page = page

    this.jobmenuitem = page.getByText("Job ")





}

}