import { test, expect } from '@playwright/test';
import { TranslationPage } from '../../pageObject/translationPage';
import { SharePage } from '../../pageObject/SharePage';

test("Validate share functionalities", async ({ page }) => {
    const translationPage = new TranslationPage(page)
    const sharePage = new SharePage(page)
    await translationPage.goTo()
    const text = "how are you"
    await translationPage.translateText(text)
    await translationPage.shareBtn.click()
    // facebook
    await sharePage.faceBookShareBtn.click()  
    const facebookPage = await page.waitForEvent('popup');
    await expect(facebookPage).toBeDefined();
    await facebookPage.waitForLoadState();
    expect(facebookPage.url()).toContain('facebook.com');
    // X
    await sharePage.XshareBtn.click()
    const Xpage = await page.waitForEvent('popup');
    await expect(Xpage).toBeDefined();
    await Xpage.waitForLoadState();
    expect(Xpage.url()).toContain('x.com');
    // await sharePage.whatsappShareBtn.click()
    // await page.on('dialog',dialog=>dialog.dismiss())
    // const whatsappPage = await page.waitForEvent('popup');
    // await expect(whatsappPage).toBeDefined();
    // await whatsappPage.waitForLoadState();
    // expect(whatsappPage.url()).toContain('whatsapp');
})

test('Copy share link', async ({ page }) => {
    const translationPage = new TranslationPage(page);
    const sharePage = new SharePage(page);

    // Expose a function to set clipboard text
    await page.exposeFunction('navigator_clipboard_writeText', async (text) => {
        window._clipboardText = text;
    });

    // Override clipboard writeText function
    await page.addInitScript(() => {
        navigator.clipboard.writeText = (text) => window._clipboardText = text;
    });
    await translationPage.goTo();

    const text = 'how are you';
    await translationPage.translateText(text);
    await translationPage.shareBtn.click();
    const linkText = await page.inputValue('#shareLink');
    await sharePage.copyShareBtn.click();

    // Read the mocked clipboard content
    const copiedText = await page.evaluate(() => window._clipboardText);

    console.log({linkText,copiedText});  // Log the copied text to the console

    expect(copiedText).toBe(linkText);
});