import { test,expect } from '@playwright/test';
import { LoginPage } from '../../pageObject/LoginPage';

test("Is logged In", async({ page })=> {
    const login = new LoginPage(page)
    await login.goTo()
    const isLoggedIn = await login.isLoggedIn()
    console.log(isLoggedIn)
})
test("Valid login", async ({page}) => {
    const email = "karmat359@gmail.com"
    const password = "Kartse3181#"
    const login = new LoginPage(page)
    await login.goTo()
    const isLoggedIn = await login.login(email, password)
    expect(isLoggedIn).toBe(true)
})
test("Wrong email login", async ({ page }) => {
    const email = "karmat@gmail.com"
    const password = "Kartse3181#"
    const login = new LoginPage(page)
    await login.goTo()
    const isLoggedIn = await login.login(email, password)
    expect(isLoggedIn).toBe(false)

})

test("Wrong password login", async ({ page }) => {
    const email = "karmat359@gmail.com"
    const password = "Kartse3181"
    const login = new LoginPage(page)
    await login.goTo()
    const isLoggedIn = await login.login(email, password)
    expect(isLoggedIn).toBe(false)
})
