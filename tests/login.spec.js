import { test, expect } from "@playwright/test";
import Tesseract from "tesseract.js";

test("test", async ({ page }) => {
  await page.goto("https://49.204.72.13:8443/");
//   await page.locator("div").first().click();
//   await page.getByRole("button", { name: "Advanced" }).click();
//   await page.getByRole("link", { name: "Proceed to 49.204.72.13 (" }).click();
  await page.getByRole("link", { name: "Login" }).click();
  await page.getByRole("textbox", { name: "Username" }).click();
  await page.getByRole("textbox", { name: "Username" }).fill("KFD_DLO_BAL_LD");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("opr@123");

    // await page.locator('#captchaimg').waitFor();
    await page.locator('#captchaimg').screenshot({
        path:'captcha.png'
    });
    const result=await Tesseract.recognize('captcha.png','eng');
    console.log(result.data.text);
    await page.pause();
    await page.locator('#txtCaptcha').fill(result.data.text.trim());
    

//   await page.getByRole("textbox", { name: "Captcha" }).click();
//   await page.getByRole("textbox", { name: "Captcha" }).fill("FOrbpD");
  await page.getByRole("button", { name: "Sign In" }).click();
  await page.getByRole("button", { name: "Request OTP" }).click();
  await page.pause();
//   await page.getByRole("textbox", { name: "OTP" }).click();
//   await page.getByRole("textbox", { name: "OTP" }).fill("7885");
  await page.getByRole("button", { name: "Validate OTP" }).click();
  await page.pause();

});