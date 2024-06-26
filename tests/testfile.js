import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('div').filter({ hasText: 'ཡིག་སྒྱུར་རིག་ནུས།དབྱིན་བོད་ཕན་ཚུན་ཡིག་སྒྱུར་བྱེད་ཐུབ།ཀློག་འདོན་རིག་ནུས།བོད་ཡིག་' }).nth(1).click({
    button: 'right'
  });
  await page.getByRole('button', { name: 'ཐོ་ཞུགས།' }).click();
  await page.getByPlaceholder('yours@example.com').click();
  await page.getByPlaceholder('yours@example.com').fill('exampl@gmial.com');
  await page.getByPlaceholder('your password').click();
  await page.getByPlaceholder('your password').fill('hioo');
  await page.getByLabel('Log In').click();
  await page.getByText('Wrong email or password.').click();
  await page.getByPlaceholder('yours@example.com').click();
  await page.getByPlaceholder('yours@example.com').click();
  await page.getByPlaceholder('yours@example.com').click();
  await page.getByPlaceholder('yours@example.com').press('ArrowRight');
  await page.getByPlaceholder('yours@example.com').fill('exampl@gmial.cm');
  await page.getByPlaceholder('yours@example.com').press('ArrowRight');
  await page.getByPlaceholder('yours@example.com').fill('');
  await page.getByPlaceholder('your password').click();
  await page.getByPlaceholder('your password').press('ArrowRight');
  await page.getByPlaceholder('your password').fill('');
  await page.getByLabel('Log In').click();
  await page.getByPlaceholder('yours@example.com').click();
});