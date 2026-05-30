export class LoginPage {

constructor(page){

    this.page=page;

    this.loginlink=page.getByRole('link',{name:'Login'});

    this.username=page.getByPlaceholder('Username');
    this.password=page.getByPlaceholder('Password');
    this.captcha=page.getByPlaceholder('Captcha');
    
    this.signin=page.getByRole('button',{name:'Sign In'});
    this.requestOTP=page.getByRole('button',{name:'Request OTP'});

    this.otpTextBox=page.getByPlaceholder('OTP');
    this.validateOTP=page.getByRole('button',{name:'Validate OTP'});

}

    async goto(){

        await this.page.goto('https://49.204.72.13:8443/');
        // await this.page.goto(process.env.BASE_URL);
    }

    async clickLoginButon(){

        await this.loginlink.click();
    }

    async enterUsername(username){

        await this.username.fill(username);
    }

    async enterPassword(password){

        await this.password.fill(password);
    }

    async enterCaptcha(captcha){

        await this.captcha.fill(captcha);
    }

    async clickSignin(){

        await this.signin.click();
    }

    async clickRequestOTP(){

        await this.requestOTP.click();
    }

    async enterOTP(otp){

        await this.otpTextBox.fill(otp);
    }

    async clickValidateOTP(){

        await this.validateOTP.click();
    }


}

//     this.username=page.getByRole("textbox", { name: "Username" });
//     this.password=page.getByRole("textbox", { name: "Password" });
//     this.captcha=page.locator('#captchaimg');
//     this.signin=page.getByRole("button", { name: "Sign In" });
