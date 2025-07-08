import { Page, Locator, expect } from '@playwright/test';

export class CreateEventPage {
    readonly page: Page;
    readonly titleInput: Locator;
    readonly descriptionInput: Locator;
    readonly locationInput: Locator;
    readonly dateInput: Locator;
    readonly timeInput: Locator;
    readonly createButton: Locator;
    readonly alert: Locator;

    constructor(page: Page) {
        this.page = page;
        this.titleInput = page.getByRole('textbox', { name: /title/i });
        this.descriptionInput = page.getByLabel(/Description\*/);
        this.locationInput = page.getByLabel(/Location\*/);
        this.dateInput = page.getByLabel(/Date\*/);
        this.timeInput = page.getByLabel(/Time\*/);
        this.createButton = page.getByRole('button', { name: /Create|Save/i });
        this.alert = page.getByRole('alert');
    }

    async goto() {
        await this.page.goto('/create-event.html');
    }

    async createEvent(title: string, description: string, location: string, date: string, time: string) {
        await this.titleInput.fill(title);
        await this.descriptionInput.fill(description);
        await this.locationInput.fill(location);
        await this.dateInput.fill(date);
        await this.timeInput.fill(time);
        // Only click if button is enabled
        if (await this.createButton.isEnabled()) {
            await this.createButton.click();
        }
    }

    async expectCreateButtonDisabled() {
        await expect(this.createButton).toBeDisabled();
    }

    async expectError(message: RegExp | string) {
        await expect(this.alert).toHaveText(message);
    }

    async expectSuccess() {
        await expect(this.alert).toHaveText(/Event created successfully/i);
    }
}
