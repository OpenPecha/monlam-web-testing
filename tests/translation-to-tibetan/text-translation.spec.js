import { test, expect } from '@playwright/test';
import { TranslationPage } from '../../pageObject/translationPage';
import { LoginPage } from '../../pageObject/LoginPage';

test.beforeEach(async ({ page }) => {
    const transPage = new TranslationPage(page)
    await transPage.goTo();
})

test.only('document disable when not log in', async ({ page }) => {
    const translationPage = new TranslationPage(page)
    await translationPage.docsTab.click();
    const classess = await translationPage.docsTab.getAttribute("class")
    const isDisabled = !classess.includes("active")
    expect(isDisabled).toBe(true)
});

test('document enable when log in', async ({ page }) => {
    const email = 'karmat359@gmail.com'
    const password = 'Kartse3181#'
    const login = new LoginPage(page)
    const translationPage = new TranslationPage(page)
    await login.goTo()
    await login.login(email,password)
    await translationPage.translationCard.click()
    await translationPage.docsTab.click();
    await translationPage.docsTab.waitFor({ timeout: 30000 })
    const classess = await translationPage.docsTab.getAttribute("class")
    const isEnabled = classess.includes("active")
    expect(isEnabled).toBe(true)
});
test('text enable', async ({ page }) => {
    const translationPage = new TranslationPage(page)
    await translationPage.textTab.click()
    const classess = await translationPage.textTab.getAttribute("class")
    const isDisabled = !classess.includes("active")
    expect(isDisabled).toBe(false)
});

test('Input clearance', async ({ page }) => {
    const translationPage = new TranslationPage(page)
    await translationPage.inputField.fill('tashi delek');
    await page.getByTitle('reset').click();
    const inputText = await translationPage.inputField.textContent()
    // expect(inputText).toBe("")
    expect(inputText).toHaveLength(0)
});

// need to add some logic to check the language
test("Language Detection", async ({ page }) => {
    const inputText = "How are you"
    const translationPage = new TranslationPage(page)
    await translationPage.inputField.fill(inputText)
    await page.waitForTimeout(3000);
    const detectedLang = await translationPage.languageInputDropDown.evaluate(select => select.value)
    console.log(detectedLang)
});

test("Translate Button status when no input", async ({ page }) => {
    const translationPage = new TranslationPage(page)
    const isBtnVisible = await translationPage.translateBtn.isVisible();
    expect(isBtnVisible).toBe(false)
})
// one more test when there is input

test("swap language", async ({ page }) => {
    const inputLang = 'bo'
    const outputLang = 'fr'
    const translationPage = new TranslationPage(page)
    await translationPage.languageInputDropDown.selectOption(inputLang);
    await translationPage.languageOutputDropDown.selectOption(outputLang);
    await translationPage.languageSwitchBtn.click()
    const sourceLang = await translationPage.languageInputDropDown.evaluate(select => select.value)
    const targetLang = await translationPage.languageOutputDropDown.evaluate(select => select.value)
    expect(sourceLang).toBe(outputLang)
    expect(targetLang).toBe(inputLang)
})

test("Word more than 1000", async ({ page }) => {
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quas iure inventore qui. Animi, accusantium rerum commodi esse et at, cum ipsum maxime mollitia non molestiae expedita iusto illum aliquid?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quas iure inventore qui. Animi, accusantium rerum commodi esse et at, cum ipsum maxime mollitia non molestiae expedita iusto illum aliquid?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quas iure inventore qui. Animi, accusantium rerum commodi esse et at, cum ipsum maxime mollitia non molestiae expedita iusto illum aliquid?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quas iure inventore qui. Animi, accusantium rerum commodi esse et at, cum ipsum maxime mollitia non molestiae expedita iusto illum aliquid?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quas iure inventore qui. Animi, accusantium rerum commodi esse et at, cum ipsum maxime mollitia non molestiae expedita iusto illum aliquid?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quas iure inventore qui. Animi, accusantium rerum commodi esse et at, cum ipsum maxime mollitia non molestiae expedita iusto illum aliquid?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quas iure inventore qui. Animi, accusantium rerum commodi esse et at, cum ipsum maxime mollitia non molestiae expedita iusto illum aliquid?"
    const transPage = new TranslationPage(page)
    await transPage.goTo()
    await transPage.inputField.fill(text)
    const isBtnVisible = await transPage.translateBtn.isVisible();
    expect(isBtnVisible).toBe(true)
    const isBtnDisabled = await transPage.translateBtn.isDisabled()
    expect(isBtnDisabled).toBe(true)
    
})
