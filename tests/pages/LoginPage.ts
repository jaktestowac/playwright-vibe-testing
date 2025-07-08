import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly identifierInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly alert: Locator;

    constructor(page: Page) {
        this.page = page;
        this.identifierInput = page.getByLabel('Identifier:');
        this.passwordInput = page.getByLabel('Password:');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.alert = page.getByRole('alert');
    }

    async goto() {
        await this.page.goto('/login.html');
    }

    async login(identifier: string, password: string) {
        await this.identifierInput.fill(identifier);
        await this.passwordInput.fill(password);
        await expect(this.loginButton).toBeEnabled();
        await this.loginButton.click();
    }

    async expectSuccess() {
        // Sprawdź, czy po zalogowaniu pojawia się dashboard z powitaniem użytkownika
        await expect(this.page.getByText('Welcome,')).toBeVisible();
    }
}
