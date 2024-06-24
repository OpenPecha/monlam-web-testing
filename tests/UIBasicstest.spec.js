const { test } = require("@playwright/test")

// test("fist test case", async ({ browser }) => {
//     const context = await browser.newContext()
//     const page = await context.newPage()
//     await page.goto("https://monlam.ai/")
// })

test("second test case", async ({ page }) => {
    // page is a fresh browser without any cookies and proxy
    await page.goto("https://monlam.ai")
    // await page.locator("#textAreaInput").fill("karma")
    await page.locator("body > div.flex.flex-col.flex-1 > div > main > div > div > a:nth-child(1) > div > div").click()

})