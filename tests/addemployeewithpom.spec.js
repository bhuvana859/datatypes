const { test, expect } = require('@playwright/test');

import { dashBoardPage } from '../pageobjects/dashBaordPage.po';
import { loginPage } from '../pageobjects/loginpage.po';
import logindata from "../testdata/login1.json";
import addemployeedata from "../testdata/addemployee.json";
import { addEmployeePage } from '../pageobjects/addEmployeePage.po';
import {jobtitlepage} from "../pageobjects/jobtitle.po"
import paygradedata from "../testdata/paygradedata.json"
import { paygradepage } from '../pageobjects/paygradepage.po';
import { employementstatuspage } from '../pageobjects/employementstatue.po';
import empstatusdata from "../testdata/empstatus.json"



test("Verify Add Employee", async ({ page }) => {

    const login = new loginPage(page)
    const dashborad = new dashBoardPage(page)
    const addemp = new addEmployeePage(page)
    const jobtitle = new jobtitlepage(page)
    const paygrade = new paygradepage(page)
    const empststus =new employementstatuspage(page)

    await login.launchApplication()
    await login.loginwithCreds(logindata.username, logindata.password)
    await login.verifyLoginSuccess()
    await dashborad.clickonPIM()
    const random5Char = Math.random().toString(36).substring(2, 7);
    await addemp.addEmployee(addemployeedata.firstname, addemployeedata.lastname)
    await addemp.verifyEmployeecreated()
    await dashborad.clickAdmin()
    // await jobtitle.addjob(addjobtitledata.jobTitle,addjobtitledata.jobDescription)
    // await jobtitle.verifyjobTitleSuccessMessage()
    await dashborad.clickAdmin()
    await paygrade.addpayGrade(paygradedata.name)
    //await paygrade.verifypaygradeSaved()
    await dashborad.clickAdmin()
    await empststus.addempstatus(empstatusdata.addempname)
   // await empststus.verifyEmpStatus()


    
})
