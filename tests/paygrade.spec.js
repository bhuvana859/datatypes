const { test, expect } = require('@playwright/test');


import { loginPage } from '../pageobjects/loginpage.po';
import logindata from "../testdata/login1.json"
import { dashBoardPage } from '../pageobjects/dashBaordPage.po';
import { jobtitlepage } from '../pageobjects/jobtitle.po';
import jobtitledata from "../testdata/addjobtitle.json"






test("Verify paygrades", async ({ page }) => {


    const login = new loginPage(page)
    
    await login.launchApplication()
    await login.loginwithCreds(logindata.username, logindata.password)
    await login.verifyLoginSuccess()
    await dashborad.clickAdmin()



})