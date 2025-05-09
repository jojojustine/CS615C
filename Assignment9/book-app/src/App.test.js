import { test, expect } from '@playwright/test';

test('should add a book to the list', async ({ page }) => {
  // Step 1: Navigate to the React app (Make sure it's running on localhost:3000)
  await page.goto('http://localhost:3000');  // Adjust if your React app runs on a different port
  
  // Step 2: Type a book title into the input field
  await page.fill('input', 'The Great Gatsby');
  
  // Step 3: Click the "Add Book" button
  await page.click('button');
  
  // Step 4: Check if the book appears in the list
  const books = await page.locator('ul li').allTextContents();  // Get all book titles in the list
  expect(books).toContain('The Great Gatsby');  // Verify that 'The Great Gatsby' is in the list
});
