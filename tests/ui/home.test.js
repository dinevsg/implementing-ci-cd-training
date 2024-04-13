const { test, expect } = require('@playwright/test');

test('Check home page', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    const heading = await page.$('h1');
    const text = await heading.textContent();
    expect(text).toContain('Cookbook');  
  });

test('Check home page paragraph', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  const heading = await page.$('p');
  const text = await heading.textContent();
  expect(text).toContain('Cookbook:');  
});
  