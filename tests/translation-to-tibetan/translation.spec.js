import { test, expect } from '@playwright/test';
import { TranslationPage } from '../../pageObject/translationPage';
import { LoginPage } from '../../pageObject/LoginPage';
require('dotenv').config();

test("Text Translation Test", async ({page}) => {
    const translationPage = new TranslationPage(page)
    await translationPage.goTo()
    const text = 'tashi delek'
    await translationPage.inputField.fill(text);
    const isBtnVisible = await translationPage.translateBtn.isVisible();
    if (isBtnVisible) {
        await translationPage.translateBtn.click()
    }
    await expect(translationPage.translatedText).toBeVisible();
    const outputText = await translationPage.translatedText.textContent()
    console.log({text,outputText})
    expect(outputText).not.toBe("")

})

test("Text Translation with Logged in", async ({ page }) => {
    const loginPage = new LoginPage(page)
    const email = process.env.EMAIL
    const password = process.env.PASSWORD
    await loginPage.goTo()
    await loginPage.login(email, password)
    const isLoggedIn = await loginPage.isLoggedIn()
    expect(isLoggedIn).toBe(true)
    const translationPage = new TranslationPage(page)
    await translationPage.goTo()
    const text = 'tashi delek'
    await translationPage.inputField.fill(text);
    const isBtnVisible = await translationPage.translateBtn.isVisible();
    if (isBtnVisible) {
        await translationPage.translateBtn.click()
    }
    await expect(translationPage.translatedText).toBeVisible();
    const outputText = await translationPage.translatedText.textContent()
    console.log({text,outputText})
    expect(outputText).not.toBe("")

})

test("Docs Translation with Logged in", async ({ page }) => {
    const loginPage = new LoginPage(page)
    const email = process.env.EMAIL
    const password = process.env.PASSWORD
    await loginPage.goTo()
    await loginPage.login(email, password)
    const translationPage = new TranslationPage(page)
    await translationPage.goTo()
    await translationPage.docsTab.click()
    await translationPage.uploadFile.click()
    // const isBtnVisible = await translationPage.translateBtn.isVisible();
    // if (isBtnVisible) {
    //     await translationPage.translateBtn.click()
    // }
    // await page.waitForTimeout(3000)
    // const outputText = await translationPage.translatedText.textContent()
    // console.log("outputText", outputText)

})