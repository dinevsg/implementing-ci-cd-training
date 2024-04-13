const { test, expect } = require('@playwright/test');

test('Check add products page', async ({ page }) => {
    await page.goto('http://localhost:8080/Add-Product');
    const form = await page.$('input');
    expect(form).toBeTruthy();
  });

  test('Check add products page heading', async ({ page }) => {
    await page.goto('http://localhost:8080/Add-Product');
    const heading = await page.$('h1');
    const text = await heading.textContent();
    expect(text).toBe('Add New Product');
  });
  