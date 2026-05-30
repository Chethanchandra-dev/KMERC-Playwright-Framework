import { Given, When, Then }from '@cucumber/cucumber';

import { LoginPage }from '../pages/LoginPage.js';

import { readCaptcha }from '../utils/captchaUtil.js';

// import readline from 'readline';

import { getLatestOTP } from '../utils/dbUtil.js';

import { expect } from 'playwright/test';

import loginData from '../testdata/loginData.json' with {type:'json'};

let loginPage;   //Creationg an Object

Given('User launches KMERC application',async function () {

    loginPage =new LoginPage(this.page);

    await loginPage.goto();

});

When('user enters the Login button',async function(){
     
    await loginPage.clickLoginButon();
});

When('User enters username and password',async function(){

    await loginPage.enterUsername(loginData.username);

    await loginPage.enterPassword(loginData.password);
});

When('User enters captcha',async function(){

    const captcha=await readCaptcha(this.page);

    console.log("captcha:",captcha);

    await loginPage.enterCaptcha(captcha);

});

When('User clicks Sign In button',async function(){

    await loginPage.clickSignin();
});

When('User clicks Request OTP button',async function(){

    await loginPage. clickRequestOTP();
    
});

When('User enters OTP Automatically',async function(){

    const otp= await getLatestOTP('KFD_DLO_BAL_LD');

    console.log('fetch otp',otp);

    await loginPage.enterOTP(otp.toString());

});

// When('User enters OTP manually',
// async function () {

//     const rl =
//         readline.createInterface({
//             input: process.stdin,
//             output: process.stdout
//         });

//     const otp =
//         await new Promise(resolve => {

//             rl.question(
//                 'Enter OTP: ',
//                 answer => {

//                     rl.close();

//                     resolve(answer);

//                 });

//         });

//     await loginPage.enterOTP(otp);

// });

Then('User clicks Validate OTP button',
async function () {

    await loginPage.clickValidateOTP();

    //Assertion
    await expect(this.page).toHaveURL('https://49.204.72.13:8443/Home/Dashboard/'); 
    //OR 
    //await expect(this.page).toHaveURL(/Home\/Dashboard/);
    //or
    //await expect(this.page.locator('text=Dashboard')).toBeVisible();

});