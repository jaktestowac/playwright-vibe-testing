import { Page, Locator, expect } from '@playwright/test';

export class RegistrationPage {
    readonly page: Page;
    readonly identifierInput: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly registerButton: Locator;
    readonly alert: Locator;

    constructor(page: Page) {
        this.page = page;
        this.identifierInput = page.getByLabel('Identifier:');
        this.usernameInput = page.getByLabel('Username (display name):');
        this.passwordInput = page.getByLabel('Password:');
        this.registerButton = page.getByRole('button', { name: 'Register' });
        this.alert = page.getByRole('alert');
    }

    async goto() {
        await this.page.goto('/register.html');
    }

    async register(identifier: string, username: string, password: string) {
        await this.identifierInput.fill(identifier);
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.registerButton.click({ force: true });
    }

    async expectSuccess() {
        await expect(this.alert).toHaveText(/Registration successful/i);
    }
}
