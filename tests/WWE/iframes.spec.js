const { browser, test, expect } = require('@playwright/test');
const fs = require('fs')
const path = require('path');
test.describe('Automation - Working With Elements', () => {

    test('Working with Iframes', async ({ page }) => {

        await page.goto('https://jqueryui.com/checkboxradio/')
        const checkbox = await page.frameLocator('iframe[class="demo-frame"]').locator('label[for="checkbox-1"]').click() // it will check element inside of the i frame 
                                                        //     |                                |                                     
                                                        //    \|/                              \|/
                                                        // iframe locator         |       checkbox locator

        //await checkbox.click()
        await page.waitForTimeout(5000)

    })


})