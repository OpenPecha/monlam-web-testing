import { test, expect } from '@playwright/test';
import { TranslatioinPage } from '../../pageObject/translationPage';
import { LoginPage } from '../../pageObject/LoginPage';

const writeInput = async (page, text, language) => {
    const translationPage = new TranslatioinPage(page)
    await translationPage.goTo()
    const initialValue = await translationPage.languageInputDropDown.evaluate(select => select.value);
    await translationPage.inputField.fill(text)
    await page.waitForTimeout(3000);
    const detectedLang = await translationPage.languageInputDropDown.evaluate(select => select.value)
    expect(detectedLang).toBe(language)
}

test("English Test", async ({ page }) => {
    await writeInput(page, "how are you", "en");
});

test("Tibetan Test", async ({ page }) => {
    await writeInput(page, "ཁྱེད་རང་ག་འདྲ་ཡིན་པ།", "bo");
});

test("French Test", async ({ page }) => {
    await writeInput(page, "comment ça va", "fr");
});
test("Hindi Test", async ({ page }) => {
    await writeInput(page, "आप कैसे हैं", "hi");
});

test("Chinese Test", async ({ page }) => {
    await writeInput(page, "你好吗", "zh");
});