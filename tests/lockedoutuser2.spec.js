
import { test, expect } from '@playwright/test';

test('verify swaglabs locked_out_user2 loginfunctionality with valid credentials ', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    await page.locator('input[name="user-name"]').fill(data.username);
    await page.locator('input[name="password"]').fill(data.password);
    await page.locator('input[type="submit"]').click()
    await expect(page.locator('Sorry, this user has been locked out.')).toBeVisible
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/')

}) 