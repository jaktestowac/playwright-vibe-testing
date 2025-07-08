import { FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
    // Simple global setup - actual setup is done in setup.spec.ts
    console.log('Global setup started');
}

export default globalSetup;
