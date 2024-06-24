class LoginPage {
    constructor(page) {
        this.page = page;
        this.url = "http://localhost:3000/"
        this.loginBtn = this.page.locator("#loginbtn").first()
        this.emailInput = this.page.getByPlaceholder('yours@example.com')
        this.passwordInput = this.page.getByPlaceholder('your password')
        this.profilePic = this.page.locator("#profilePic").first()
        this.logoutbtn = this.page.locator("#logoutbtn")
    }
    async goTo() {
        await this.page.goto(this.url)
    }
    async login(email, password) {
        await this.loginBtn.click()
        await this.emailInput.click();
        await this.emailInput.fill(email);
        await this.passwordInput.click();
        await this.passwordInput.fill(password);
        await this.page.getByLabel('Log In').click();
        try {
            await this.page.waitForNavigation({ timeout: 5000 });
        } catch (error) {
            console.log("didn't navigate so not able to login")
        }
        const currentUrl = await this.page.url()
        return currentUrl === this.url
    }
    async isLoggedIn() {
        const isProfilePresent = await this.profilePic.count() > 0;
        if (isProfilePresent) {
            return true
        } else {
            return false;
        }
    }

    async logout() {
        await this.profilePic.click();
        await this.logoutbtn.click();
    }
}

module.exports = { LoginPage }