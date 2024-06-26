import { test, expect } from '@playwright/test';
import { TranslationPage } from '../../pageObject/translationPage';


test("Edit output text", async ({ page }) => {
    const translationPage = new TranslationPage(page)
    await translationPage.goTo()
    const text = "how are you"
    await page.pause()
    await translationPage.translateText(text)
    await translationPage.editBtn.click()
    const editBox = await translationPage.editOutputText
    const saveEditBtn = await translationPage.saveEdit
    const cancelEditBtn = await translationPage.cancelEdit
    expect(editBox).toBeEditable()
    expect(saveEditBtn).toBeDisabled()
    await cancelEditBtn.click()
    expect(editBox).toBeHidden()
})

test('Check the copy functionality', async ({ page }) => {
    const translationPage = new TranslationPage(page);

    // Expose a mock clipboard API to the page
    await page.exposeFunction('navigator_clipboard_writeText', async (text) => {
        window._clipboardText = text;
    });

    await page.addInitScript(() => {
        navigator.clipboard.writeText = (text) => window._clipboardText = text;
    });

    await translationPage.goTo();

    const text = 'how are you';
    await translationPage.translateText(text);
    await page.waitForTimeout(3000)
    const translatedText = await  translationPage.translatedText.textContent()
    // Click the copy button
    await translationPage.copyBtn.click();

    // Check the clipboard contents
    const copiedText = await page.evaluate(() => window._clipboardText);
    console.log({ translatedText, copiedText });
    expect(copiedText).toBe(translatedText);

});

test.only("Audio check", async ({ page }) => {
    
})