import dotenv from "dotenv";
dotenv.config();

import {Before,After,setDefaultTimeout} from '@cucumber/cucumber';

import { chromium } from '@playwright/test';

setDefaultTimeout(60*1000);

Before(async function(){
    this.browser=await chromium.launch({ headless:false});
    const context=await this.browser.newContext({
        ignoreHTTPSErrors:true
    });
    this.page=await context.newPage();

});

After(async function({result}){
    if(result?.status==='Failed'){
        await this.page.screenshot({
            path:`reports/failure-${Date.now()}.png`,fullpage:true
        });
    }


    if(this.browser){
        await this.browser.close();

    }

});

