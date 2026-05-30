import { test, expect, request } from '@playwright/test';
import SHA256 from 'crypto-js/sha256.js';
import dotenv from 'dotenv';

dotenv.config();

test('KMERC Login API Test', async () => {

    const apiContext = await request.newContext();

    // Encrypt password exactly like application
    const encryptedPassword = SHA256(process.env.API_PASSWORD).toString();

    const response = await apiContext.post(
        'https://49.204.72.13:8443/Login/VerifyCredential',
        {
            headers: {
                'Content-Type': 'application/json'
            },

            data: {
                LoginModel: {
                    username: process.env.API_USERNAME,
                    password: encryptedPassword,
                    captcha: '1234'
                }
            }
        }
    );

     const responseText = await response.text();

    console.log(responseText);

    console.log(response.headers());
    
    // Status validation
    expect(response.status()).toBe(200);

    // Business assertion
    expect(responseText).toContain('Invalid Captcha');
});