import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { open: 'never' }]],
  timeout: 10000,
  use: {
    baseURL: 'https://eventbugai.onrender.com/',
    trace: 'on',
  },
  projects: [
    {
      name: 'setup',
      testMatch: /setup\.spec\.ts$/,
    },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: './tests/.auth/setup-user.json',
      },
      dependencies: ['setup'],
    },
  ],
});
