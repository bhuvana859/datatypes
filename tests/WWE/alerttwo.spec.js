const { test, expect } = require('@playwright/test');

  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  });


test('simple allert',async({page})=>{
await page.locator('button[onclick="jsAlert()"]').click()
page.on('dilog',async dilog=>{
expect(dilog.simpleallert).toBe('I am a JS Alert')//optional
dilog.accept()
await page.waitForTimeout(5000)

})
})
 
test('Playwright Test Case - test Confirm Alert - OK', async ({ page }) => {
await page.locator('button[onclick="jsConfirm()"]').click()
page.on('dialog', async dialog => {
expect(dialog.type).toBe('confirm');
// expect(dialog.message()).toBe('I am a JS Confirm'); // optional
await dialog.accept(); // or dialog.dismiss();
await page.waitForTimeout(5000)
});
})

test('Playwright Test Case - test Confirm Alert - cancel', async ({ page }) => {
 
await page.locator('button[onclick="jsConfirm()"]').click()
page.on('dialog', async dialog => {
await page.waitForTimeout(5000)
expect(dialog.type()).toBe('confirm');
// expect(dialog.message()).toBe('I am a JS Confirm'); // optional
await dialog.dismiss(); // or dialog.dismiss();
await page.waitForTimeout(5000)
});
})

test('Playwright Test Case - test prompt Alert - ok', async ({ page }) => {
await page.locator('button[onclick="jsPrompt()"]').click()
page.on('dialog', async dialog => {
await page.waitForTimeout(5000)
expect(dialog.type()).toBe('prompt');
// expect(dialog.message()).toBe('I am a JS Confirm'); // optional
await dialog.accept('chethan'); // or dialog.dismiss();
await page.waitForTimeout(5000)
})
})
test('Playwright Test Case - test prompt Alert - cancle', async ({ page }) => {
await page.locator('button[onclick="jsPrompt()"]').click()
page.on('dialog', async dialog => {
await page.waitForTimeout(5000)
expect(dialog.type()).toBe('prompt');
// expect(dialog.message()).toBe('I am a JS Confirm'); // optional
await dialog.dismiss(); // or dialog.dismiss();
await page.waitForTimeout(5000)
})
})

