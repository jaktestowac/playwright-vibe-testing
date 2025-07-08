import { test, expect } from './src/fixtures';

// Smoke test for homepage
test('smoke: homepage loads and contains title', async ({ homePage }) => {
  await homePage.goto();
  await homePage.expectTitle('EventBugAI - Home');
});

// Registration test (only for setup project)
test.describe.configure({ mode: 'serial' });
test.describe('setup', () => {
  test('registration: user can register with valid data', async ({ registrationPage }) => {
    const uniqueId = 'user' + Date.now();
    await registrationPage.goto();
    await registrationPage.register(uniqueId, 'Test User', 'TestPass123');
    await registrationPage.expectSuccess();
  });

  test('login: user can log in with valid credentials', async ({ registrationPage, loginPage }) => {
    const uniqueId = 'user' + Date.now();
    await registrationPage.goto();
    await registrationPage.register(uniqueId, 'Test User', 'TestPass123');
    await registrationPage.expectSuccess();
    await loginPage.goto();
    await loginPage.login(uniqueId, 'TestPass123');
    await loginPage.expectSuccess();
  });
});


// Event creation: all valid fields
test('event creation: all valid fields', async ({ registrationPage, loginPage, createEventPage }) => {
  const uniqueId = 'user' + Date.now();
  await registrationPage.goto();
  await registrationPage.register(uniqueId, 'Test User', 'TestPass123');
  await registrationPage.expectSuccess();
  await loginPage.goto();
  await loginPage.login(uniqueId, 'TestPass123');
  await createEventPage.goto();
  await createEventPage.createEvent('Valid title', 'Valid description for event', 'Valid location', '2099-01-01', '12:00');
  await createEventPage.expectSuccess();
});
