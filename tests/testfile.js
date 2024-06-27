import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'ཡིག་སྒྱུར་རིག་ནུས། དབྱིན་བོད་ཕན་ཚུན་ཡིག་སྒྱུར་བྱེད་ཐུབ།' }).click();
  await page.getByPlaceholder('ཡི་གེ་གཏག་རོགས།').fill('hello');
  await page.getByRole('button', { name: 'ཡིག་སྒྱུར།' }).click();
  await page.locator('div').filter({ hasText: 'མདུན་ངོས།ཡིག་སྒྱུར་རིག་ནུས།ཡིག་རྐྱང་། ཡིག་ཆ། ( ཚོད་ལྟ། )Detect' }).nth(1).click({
    button: 'right'
  });
  await page.locator('#shareBtn').getByRole('img').click();
  await page.getByTestId('flowbite-dropdown').locator('#copyBtn').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByTestId('flowbite-dropdown').getByRole('button').nth(1).click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent('popup');
  await page.getByTestId('flowbite-dropdown').getByRole('button').nth(2).click();
  const page2 = await page2Promise;
  await page.getByTestId('flowbite-dropdown').getByRole('button').nth(3).click();
});