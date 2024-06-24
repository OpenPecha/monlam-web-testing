import { test, expect } from '@playwright/test';
import { TranslatioinPage } from '../pageObject/translationPage';
import exp from 'constants';

test.beforeEach(async ({page}) => {
  const transPage = new TranslatioinPage(page)
  await transPage.goTo();
})

test('document disable when not log in', async ({ page }) => {
  const docsTab = page.getByRole('tab', { name: 'ཡིག་ཆ། ( ཚོད་ལྟ། )' })
  await docsTab.click();
  const classess = await docsTab.getAttribute("class")
  const isDisabled = !classess.includes("active")
  expect(isDisabled).toBe(true)
});

test('document enable when log in', async ({ page }) => {
  const transPage = new TranslatioinPage(page)
  const email = 'karmat359@gmail.com'
  const password = 'Kartse3181#'
  await transPage.login(email,password)
  await page.getByRole('link', { name: 'ཡིག་སྒྱུར་རིག་ནུས། དབྱིན་བོད་ཕན་ཚུན་ཡིག་སྒྱུར་བྱེད་ཐུབ།' }).click();
  const docsTab = page.getByRole('tab', { name: 'ཡིག་ཆ། ( ཚོད་ལྟ། )' })
  await docsTab.click();
  docsTab.waitFor({timeout:30000})
  const classess = await docsTab.getAttribute("class")
  const isEnabled = classess.includes("active")
  expect(isEnabled).toBe(true)
});
test('text enable', async ({ page }) => {
  const textTab = page.getByRole('tab', { name: 'ཡིག་རྐྱང་།' })
  await textTab.click();
  const classess = await textTab.getAttribute("class")
  const isDisabled = !classess.includes("active")
  expect(isDisabled).toBe(false)
});

test('Input clearance', async ({ page }) => {
  const inputField = page.getByPlaceholder('ཡི་གེ་གཏག་རོགས།')
  await inputField.fill('tashi delek');
  await page.getByTitle('reset').click();
  const inputText = await inputField.textContent()
  expect(inputText).toBe("")
});

// need to add some logic to check the language
test("Language Detection", async ({ page }) => {
  const inputText = "How are you"
  await page.locator("#textAreaInput").fill(inputText);
  await page.waitForTimeout(3000);
  const selectInputLang = page.getByRole('combobox').first();
  const detectedLang = await selectInputLang.evaluate(select => select.value)
  console.log(detectedLang)
});

test("Translate Button status", async ({ page }) => {
  const translateBtn = page.getByRole('button', { name: 'ཡིག་སྒྱུར།' })
  const isBtnVisible = await translateBtn.isVisible();
  expect(isBtnVisible).toBe(false)
})

test("Login in", async ({page}) => {
  await page.getByRole('button', { name: 'ཐོ་ཞུགས།' }).click();
  await page.getByPlaceholder('yours@example.com').click();
  await page.getByPlaceholder('yours@example.com').fill('karmat359@gmail.com');
  await page.getByPlaceholder('your password').click();
  await page.getByPlaceholder('your password').fill('Kartse3181#');
  await page.getByLabel('Log In').click();
})

test.only("swap language", async ({ page }) => {
  const inputLang = 'bo'
  const outputLang = 'fr'
  const sourceSelector = page.getByRole('combobox').first()
  const targetSelector = page.getByRole('combobox').nth(1)
  await sourceSelector.selectOption(inputLang);
  await targetSelector.selectOption(outputLang);
  await page.getByTestId('flowbite-tooltip-target').getByRole('button').click();
  const sourceLang = await sourceSelector.evaluate(select => select.value)
  const targetLang = await targetSelector.evaluate(select => select.value)
  expect(sourceLang).toBe(outputLang)
  expect(targetLang).toBe(inputLang)
})