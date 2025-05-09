const { test, expect } = require('@playwright/test');

test('should add a book', async ({ page }) => {
  await page.goto('http://localhost:3000'); // Make sure the app is running
  await page.fill('input', 'The Great Gatsby');
  await page.click('button'); // Click the add button
  const books = await page.locator('ul li').allTextContents();
  expect(books).toContain('The Great Gatsby');
});

test('should not add a blank book title', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.fill('input', ''); // Blank title
    await page.click('button');
    const books = await page.locator('ul li').allTextContents();
    expect(books).toHaveLength(0); // No books should be added
  });
  
