import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByText('Username', { exact: true }).click();
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await expect(page.getByRole('link', { name: 'Recruitment' })).toBeVisible();
  await page.getByRole('link', { name: 'Recruitment' }).click();
  await expect(page.getByText('Job Title')).toBeVisible();
  await page.getByText('-- Select --').first().click();
  await page.getByText('Automation Testing').click();
  await page.getByRole('link', { name: 'My Info' }).click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
});