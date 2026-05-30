
Feature: KMERC Login

Scenario: Valid Login

Given User launches KMERC application

When user enters the Login button

And User enters username and password

And User enters captcha

And User clicks Sign In button

And User clicks Request OTP button

And User enters OTP Automatically

Then User clicks Validate OTP button