export class DashboardPage{

    constructor(page){
        this.page=page;
        
        this.projectplanningMenu=page.getByRole('link',{name:'Project Planning'});

        this.createnewproposal=page.getByText('Create New Proposal');

    }

    async clickProjectPlanningMenu(){

        await this.projectplanningMenu.click();
    }

    async clickCreateNewProposal(){


        await this.createnewproposal.click();
    }



}