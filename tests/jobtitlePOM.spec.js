const { test, expect } = require('@playwright/test');


import { dashBoardPage } from '../.vscode/pageObjects/dashBaordPage.po';
import { loginPage } from '../.vscode/pageObjects/loginpage.po';
import { addEmployeePage } from '../.vscode/pageObjects/addEmployeePage.po';
import logindata from "../testdata/login.json"
import {jobtitlepage, jobtitlepage, jobtitlePage } from '../.vscode/pageObjects/jobtitlepage.po'
import addjobtitledata from '../testdata/addjobtitle.json'

test("Verify Add jobtitle", async ({ page }) => {

    const login = new loginPage(page)
    const dashborad = new dashBoardPage(page)
    const addEmployee = new addEmployeePage(page)
    const jobtitle = new jobtitlepage(page)

    await login.launchApplication()
    await login.loginwithCreds(logindata.username, logindata.password)
    await login.verifyLoginSuccess()
    await dashborad.clickonAdmin()
    await jobtitlePage.clickonjobsubmenu()
    await jobtitlePage.addJobTitle(addjobtitledata.jobTitle,addjobtitledata.jobDescription)
    await jobtitlePage.verifyjobtitlecreated()

})