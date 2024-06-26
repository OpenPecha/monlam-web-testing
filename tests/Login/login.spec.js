import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pageObject/LoginPage';
require('dotenv').config();

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

test("Valid login", async ({ page }) => {
    const login = new LoginPage(page);
    await login.goTo();
    const isLoggedIn = await login.login(email, password);
    expect(isLoggedIn).toBe(true);
});

test("Wrong email login", async ({ page }) => {
    const wrongEmail = "wrongemail@example.com";
    const login = new LoginPage(page);
    await login.goTo();
    const isLoggedIn = await login.login(wrongEmail, password);
    expect(isLoggedIn).toBe(false);
    const errorMsg = await login.errorMsg.textContent()
    expect(errorMsg).toBe('Wrong email or password.')
});

test("Wrong password login", async ({ page }) => {
    const wrongPassword = "wrongpassword";
    const login = new LoginPage(page);
    await login.goTo();
    const isLoggedIn = await login.login(email, wrongPassword);
    expect(isLoggedIn).toBe(false);
    const errorMsg = await login.errorMsg.textContent()
    expect(errorMsg).toBe('Wrong email or password.')
});
