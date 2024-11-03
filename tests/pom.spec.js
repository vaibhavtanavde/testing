const { test, expect } = require('@playwright/test')
import { LoginPage } from '../pages/LoginPage'



test.beforeEach('Login Test', async ({ page }) => {

    const Login = new LoginPage(page, selectors)
    await Login.goto()
    await Login.login('admin', 'password')
    await page.waitForTimeout(3000)
  })