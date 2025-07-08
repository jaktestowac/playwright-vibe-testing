import { test } from '@playwright/test';
import { RegistrationPage } from './pages/RegistrationPage';
import { LoginPage } from './pages/LoginPage';
import * as fs from 'fs';
import * as path from 'path';

// Setup test to create user and storage state
test('setup: create user and storage state', async ({ page }) => {
    const uniqueId = 'setup_' + Date.now().toString().slice(-10); // Keep under 20 chars
    const username = 'Setup User';
    const password = 'SetupPass123';
    
    // Ensure .auth directory exists
    const authDir = path.join(__dirname, '.auth');
    if (!fs.existsSync(authDir)) {
        fs.mkdirSync(authDir, { recursive: true });
    }
    
    // Try to register a new user
    const registrationPage = new RegistrationPage(page);
    await registrationPage.goto();
    await registrationPage.register(uniqueId, username, password);
    
    // Check if user already exists (registration failed)
    const isAlertVisible = await registrationPage.alert.isVisible().catch(() => false);
    
    if (isAlertVisible) {
        // If user exists, login instead
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(uniqueId, password);
        await loginPage.expectSuccess();
    } else {
        // Registration successful
        await registrationPage.expectSuccess();
    }
    
    // Save storage state
    await page.context().storageState({ path: path.join(authDir, 'setup-user.json') });
    
    // Save username to file
    fs.writeFileSync(path.join(authDir, 'username.txt'), uniqueId);
});
