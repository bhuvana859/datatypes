const { test, expect } = require('@playwright/test');


exports. SelectorHubLoginPage = class SelectorHubLoginPage {

constructor(page) {
    this.page = page;
    this.logo = page.locator('img.attachment-full.size-full.wp-image-4914');
    this.emailInput = page.locator('input[title="Email"]');
    this.passwordInput = page.locator('input[title="Password"]');
    this.companyInput = page.locator('input[placeholder="Enter your company"]').nth(0);
    this.mobileInput = page.locator('input[placeholder="Enter your mobile number"]').nth(0);
    this.loginButton = page.locator('input[type="text"]'); // Adjust if needed
    this.submitButton = page.locator('button[value="Submit"]');
    }

    async launchApplication() {
        await this.page.goto("https://selectorshub.com/xpath-practice-page/");
    }

    async verifyLogoVisibility() {
        await expect(this.logo).toBeVisible();
    }

    async loginWithCreds(email, password, company, mobile) {
        await this.emailInput.type(email);
        await this.passwordInput.type(password);
        // Wait for 3 seconds
        await this.page.waitForTimeout(3000); // time in milliseconds
        await this.companyInput.type(company);
        await this.mobileInput.type(mobile);
        await this.submitButton.click();
    }

    // async verifyErrorMessage() {
    //     await expect(this.loginErrorMessage).toBeVisible();
    // }

    // async verifyLoginSuccess() {
    //     await expect(this.page).toHaveURL("https://selectorhub.com/dashboard");
    // }
}
