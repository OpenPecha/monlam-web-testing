class TranslatioinPage {
    constructor(page) {
        this.page = page;
        this.url = "http://localhost:3000/"
        this.translationCard = this.page.locator("#model-mt")
        this.docsTab = this.page.locator("button[id=':r4:-tab-1']")
        this.textTab = this.page.locator("button[id=':r4:-tab-0']")
        this.inputField = this.page.locator("#textAreaInput")
        this.translateBtn = this.page.locator("#translateBtn")
        this.translatedText = this.page.locator("#translatedText p")
        this.languageInputDropDown = this.page.getByRole('combobox').first()
        this.languageOutputDropDown = this.page.getByRole('combobox').nth(1)
        this.languageSwitchBtn = this.page.getByTestId('flowbite-tooltip-target').getByRole('button')
    }

    async goTo() {
        await this.page.goto(this.url);
        await this.translationCard.click()
    }
}

module.exports = { TranslatioinPage }