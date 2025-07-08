import { test as base, expect, Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { LoginPage } from '../pages/LoginPage';
import { CreateEventPage } from '../pages/CreateEventPage';

export const test = base.extend<{
    homePage: HomePage;
    registrationPage: RegistrationPage;
    loginPage: LoginPage;
    createEventPage: CreateEventPage;
}>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    registrationPage: async ({ page }, use) => {
        await use(new RegistrationPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    createEventPage: async ({ page }, use) => {
        await use(new CreateEventPage(page));
    },
});

export { expect };
