class TranslationPage {
    constructor(page) {
        this.page = page;
        this.url = "http://localhost:3000/"
        this.translationCard = this.page.locator("#model-mt")
        this.docsTab = this.page.locator("button[id=':r4:-tab-1']")
        this.textTab = this.page.locator("button[id=':r4:-tab-0']")
        this.inputField = this.page.locator("#textAreaInput")
        this.uploadFile = this.page.locator("#uploadFile")
        this.translateBtn = this.page.locator("#translateBtn")
        this.translatedText = this.page.locator("#translatedText p")
        this.languageInputDropDown = this.page.getByRole('combobox').first()
        this.languageOutputDropDown = this.page.getByRole('combobox').nth(1)
        this.languageSwitchBtn = this.page.getByTestId('flowbite-tooltip-target').getByRole('button')
        this.audioBtn = this.page.locator("#audioBtn")
        this.editBtn = this.page.locator("#editBtn")
        this.saveEdit = this.page.locator("#saveEdit")
        this.cancelEdit = this.page.locator("#cancelEdit")
        this.likeBtn = this.page.locator("#likeBtn")
        this.dislikeBtn = this.page.locator("#dislikeBtn")
        this.copyBtn = this.page.locator("#copyBtn")
        this.editOutputText = this.page.locator("#editOutputText")
    }

    async goTo() {
        await this.page.goto(this.url);
        await this.translationCard.click()
    }

    async translateText(text) {
        await this.inputField.fill(text);
        if (await this.translateBtn.isVisible()) {
            await this.translateBtn.click();
        }
        await this.translatedText.textContent();
    }
}

module.exports = { TranslationPage }