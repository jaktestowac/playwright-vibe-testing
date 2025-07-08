import { test, expect, request, APIResponse } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

// API Smoke Test for EventBugAI
// Only Chromium is used for browser context, but API tests are browser-agnostic

test.describe('API Smoke Test', () => {
  const baseURL = 'https://eventbugai.onrender.com/api';
  
  // Get setup user credentials
  const getSetupUser = () => {
    const authDir = path.join(__dirname, '.auth');
    const usernamePath = path.join(authDir, 'username.txt');
    
    if (fs.existsSync(usernamePath)) {
      return fs.readFileSync(usernamePath, 'utf8');
    }
    return 'setup_test_user'; // fallback
  };

  test('GET /ping should return 200', async () => {
    const api = await request.newContext();
    const res = await api.get(`${baseURL}/ping`);
    expect(res.status()).toBe(200);
    await api.dispose();
  });

  test('GET /healthcheck should return 200', async () => {
    const api = await request.newContext();
    const res = await api.get(`${baseURL}/healthcheck`);
    expect(res.status()).toBe(200);
    await api.dispose();
  });

  test('GET /about should return 200', async () => {
    const api = await request.newContext();
    const res = await api.get(`${baseURL}/about`);
    expect(res.status()).toBe(200);
    await api.dispose();
  });

  test('POST /register should return 400 for missing fields', async () => {
    const api = await request.newContext();
    const res = await api.post(`${baseURL}/register`, {
      data: {
        identifier: 'testuser',
        password: 'testpassword'
        // Missing username field
      }
    });
    expect(res.status()).toBe(400);
    const json = await res.json();
    expect(json).toHaveProperty('error');
    expect(json.success).toBe(false);
    await api.dispose();
  });

  test('POST /login should return 401 for invalid credentials', async () => {
    const api = await request.newContext();
    const res = await api.post(`${baseURL}/login`, {
      data: {
        identifier: 'nonexistent_user',
        password: 'wrongpassword'
      }
    });
    expect(res.status()).toBe(401);
    const json = await res.json();
    expect(json).toHaveProperty('error');
    expect(json.success).toBe(false);
    await api.dispose();
  });

  test('GET /events should return 200 and array', async () => {
    const api = await request.newContext();
    const res = await api.get(`${baseURL}/events`);
    expect(res.status()).toBe(200);
    const json = await res.json();
    expect(json).toHaveProperty('data');
    expect(Array.isArray(json.data)).toBeTruthy();
    await api.dispose();
  });
});
