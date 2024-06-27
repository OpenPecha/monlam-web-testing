class SharePage{
    constructor(page) {
        this.page = page
        this.shareLink = this.page.locator("#shareLink")
        this.copyShareBtn = this.page.getByTestId('flowbite-dropdown').locator('#copyBtn')
        this.faceBookShareBtn = this.page.getByTestId('flowbite-dropdown').getByRole('button').nth(1)
        this.XshareBtn = this.page.getByTestId('flowbite-dropdown').getByRole('button').nth(2)
        this.whatsappShareBtn =  this.page.getByTestId('flowbite-dropdown').getByRole('button').nth(3)
    }
}

module.exports = {SharePage}