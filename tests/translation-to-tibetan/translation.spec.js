import { test, expect } from '@playwright/test';
import { TranslatioinPage } from '../../pageObject/translationPage';
import { LoginPage } from '../../pageObject/LoginPage';
require('dotenv').config();

test("Text Translation Test", async ({page}) => {
    const translationPage = new TranslatioinPage(page)
    await page.pause()
    await translationPage.goTo()
    await translationPage.inputField.fill('tashi delek');
    await page.pause()
    const isBtnVisible = await translationPage.translateBtn.isVisible();
    if (isBtnVisible) {
        await translationPage.translateBtn.click()
    }
    const outputText = await translationPage.translatedText.textContent()
    console.log(outputText)

})

test.only("Text Translation with Logged in", async ({ page }) => {
    const loginPage = new LoginPage(page)
    const email = process.env.EMAIL
    const password = process.env.PASSWORD
    await loginPage.goTo()
    await loginPage.login(email, password)
    const translationPage = new TranslatioinPage(page)
    await translationPage.goTo()
    await translationPage.inputField.fill('tashi delek');
    
    const isBtnVisible = await translationPage.translateBtn.isVisible();
    if (isBtnVisible) {
        await translationPage.translateBtn.click()
    }
    const outputText = translationPage.translatedText.textContent()
    console.log("outputText",outputText)

})