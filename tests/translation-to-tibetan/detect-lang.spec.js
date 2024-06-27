import { test, expect } from '@playwright/test';
import { TranslationPage } from '../../pageObject/translationPage';
import { LoginPage } from '../../pageObject/LoginPage';

export const DetectInputLang = async (page, text, language) => {
    const translationPage = new TranslationPage(page)
    await translationPage.goTo()
    await translationPage.inputField.fill(text)
    await page.waitForTimeout(3000);
    const detectedLang = await translationPage.languageInputDropDown.evaluate(select => select.value)
    expect(detectedLang).toBe(language)
}

test("English Test", async ({ page }) => {
    await DetectInputLang(page, "how are you", "en");
});

test("Tibetan Test", async ({ page }) => {
    await DetectInputLang(page, "ཁྱེད་རང་ག་འདྲ་ཡིན་པ།", "bo");
});

test("French Test", async ({ page }) => {
    await DetectInputLang(page, "comment ça va", "fr");
});
test("Hindi Test", async ({ page }) => {
    await DetectInputLang(page, "आप कैसे हैं", "hi");
});

test("Chinese Test", async ({ page }) => {
    await DetectInputLang(page, "你好吗", "zh");
});