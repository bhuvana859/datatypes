import data from './testdata/problemuser.json'
import { test, expect } from '@playwright/test';

test('verify swaglabs problem_user3 loginfunctionality with valid credentials ', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    await page.locator('input[name="user-name"]').fill(data.username);
    await page.locator('input[name="password"]').fill(data.password);
    await page.locator('input[type="submit"]').click()
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html')

})
test('verify swaglabs problem_user3 loginfunctionality with valid usernam invalid password ', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    await page.locator('input[name="user-name"]').fill(data.username);
    await page.locator('input[name="password"]').fill(data.invalidpassword);
    await page.locator('input[type="submit"]').click()
    await expect(page.locator('Username and password do not match any user in this service')).toBeVisible
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/')
})
test('verify swaglabs problem_user3 loginfunctionality with invalid usernam valid password ', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    await page.locator('input[name="user-name"]').fill(data.invalidusername);
    await page.locator('input[name="password"]').fill(data.password);
    await page.locator('input[type="submit"]').click()
    await expect(page.locator('Username and password do not match any user in this service')).toBeVisible
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/')
})


test('verify swaglabs problem_user3 loginfunctionality with invalid usernam invalid password ', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    await page.locator('input[name="user-name"]').fill(data.invalidusername);
    await page.locator('input[name="password"]').fill(data.invalidpassword);
    await page.locator('input[type="submit"]').click()
    await expect(page.locator('Username and password do not match any user in this service')).toBeVisible
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/')
})