const { test, expect } = require('@playwright/test');

test("radiobutton practice ",async({page})=>{

await page.goto("https://jqueryui.com/checkboxradio/")

await page .locator('//label[@class="ui-checkboxradio-label ui-corner-all ui-button ui-widget ui-checkboxradio-radio-label ui-checkboxradio-checked ui-state-active"]').click()

});