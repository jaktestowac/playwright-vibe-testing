import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly title: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('title');
    }

    async goto() {
        await this.page.goto('/');
    }

    async expectTitle(expected: string | RegExp) {
        await expect(this.page).toHaveTitle(expected);
    }
}
