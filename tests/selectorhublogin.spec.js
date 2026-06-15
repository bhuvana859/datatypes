
const { test, expect } = require('@playwright/test');
import { SelectorHubLoginPage } from "../pageobjects/selectorhublogin.po";
import selectorHubData from '../testdata/selectorHub.json'

   // var page;
    var selectorHubLogin;



//   test.beforeEach(async ({browser})=>{
//     page = await browser.newPage();

//   })

test("Verify login with valid credentials", async ({page}) =>{
    
    selectorHubLogin = new SelectorHubLoginPage(page);
    await selectorHubLogin.launchApplication();
    await selectorHubLogin.verifyLogoVisibility();
    await selectorHubLogin.loginWithCreds(
    selectorHubData.email, 
    selectorHubData.password, 
    selectorHubData.company, 
    selectorHubData.mobile
);


})