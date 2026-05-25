import Tesseract from "tesseract.js";
export async function readCaptcha(page){

    await page.locator('#captchaimg').waitFor();

    await page.locator('#captchaimg').screenshot({path:'captcha.png'});

    const result= await Tesseract.recognize('captcha.png','eng');

    return result.data.text.trim();


}