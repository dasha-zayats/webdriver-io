import { Given, When, Then } from '@wdio/cucumber-framework';

import MainPage from '../pageobjects/main.page';

Given(/User on the main page/, async () => {
    await MainPage.open("")
});

When(/User login with mobile phone and password/, async (phone, password) => {
    await MainPage.login(phone, password)
});

Then(/User should see a message saying '([^']*)'/, async () => {
    await expect( MainPage.errorMessage).toBeExisting();
    await expect(MainPage.errorMessage).toHaveTextContaining("Invalid");
});

