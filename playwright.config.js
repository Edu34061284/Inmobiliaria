import { defineConfig } from '@playwright/test';

const isCI = Boolean(process.env.CI);
const localPort = 5173;
const ciPort = 4173;
const port = isCI ? ciPort : localPort;
const baseURL = `http://127.0.0.1:${port}`;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  reporter: isCI ? [['dot'], ['html', { open: 'never' }]] : 'list',
  use: {
    baseURL,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  webServer: {
    command: isCI
      ? `npm run build && npm run preview -- --host 127.0.0.1 --port ${ciPort}`
      : `npm run dev -- --host 127.0.0.1 --port ${localPort}`,
    reuseExistingServer: !isCI,
    timeout: 120 * 1000,
    url: baseURL,
  },
});