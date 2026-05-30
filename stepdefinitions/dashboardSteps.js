import { Given,When,Then} from '@cucumber/cucumber';

import { DashboardPage } from '../pages/DashboardPage.js';

import { expect } from 'playwright/test';



let dashboardPage; //Creationg an Object

Given('User login to KMERC application', async function(){
     
    dashboardPage= new DashboardPage(this.page);
})

When('User navigate to Proposal menu', async function(){

    await dashboardPage.clickProjectPlanningMenu();
});

When('User clicks on Create New Proposal', async function(){

    await dashboardPage.clickCreateNewProposal();
});

//assertion
Then('proposal Page should open',async function(){
    await expect(this.page).toHaveURL('https://49.204.72.13:8443/ApplicationWorkflow/ProjectProposalForm')
})

//or
// await expect(this.page.locator('text=ProjectProposalForm')).toBeVisible();