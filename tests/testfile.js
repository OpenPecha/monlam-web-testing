import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('main').click({
    button: 'right'
  });
  await page.getByRole('button', { name: 'ཐོ་ཞུགས།' }).click();
  await page.getByRole('link', { name: 'Sign Up' }).click();
  await page.locator('a').filter({ hasText: 'Sign up with Google' }).click();
  await page.getByLabel('Email or phone').click();
  await page.getByLabel('Email or phone').fill('karmat359@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Try again').click();
  await page.getByLabel('Email or phone').fill('Kartse3181@gmial.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Email or phone').click();
  await page.getByLabel('Email or phone').click();
  await page.getByLabel('Email or phone').click();
  await page.getByLabel('Email or phone').press('ArrowLeft');
  await page.getByLabel('Email or phone').press('ArrowLeft');
  await page.getByLabel('Email or phone').press('ArrowLeft');
  await page.getByLabel('Email or phone').press('ArrowLeft');
  await page.getByLabel('Email or phone').press('ArrowLeft');
  await page.getByLabel('Email or phone').press('ArrowLeft');
  await page.getByLabel('Email or phone').press('ArrowLeft');
  await page.getByLabel('Email or phone').press('ArrowLeft');
  await page.getByLabel('Email or phone').press('ArrowLeft');
  await page.getByLabel('Email or phone').fill('Kartse03@gmial.com');
  await page.getByLabel('Email or phone').click();
  await page.getByLabel('Email or phone').press('ArrowLeft');
  await page.getByLabel('Email or phone').press('ArrowLeft');
  await page.getByLabel('Email or phone').press('ArrowLeft');
  await page.getByLabel('Email or phone').press('ArrowLeft');
  await page.getByLabel('Email or phone').press('ArrowLeft');
  await page.getByLabel('Email or phone').fill('Kartse03@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
});