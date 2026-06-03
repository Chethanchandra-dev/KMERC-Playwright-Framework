import {Given,When,Then} from '@cucumber/cucumber';

import { ProposalPage } from '../pages/PrposalPage.js';


//create an Object
let proposalPage;

When('User enters Project Name',async function(){
    
   await  proposalPage.EnterProjectName();
});

When('User selects  Department',async function(){
    
    await proposalPage.SelectDepartmentDropdown();
});

When('User selects Sector',async function(){

    await proposalPage.SelectSectroDropdown();

});

When('User selects Sub Sector',async function(){

    await proposalPage.SelectSubSectorDropdown();

});

When('User selects Type of Project',async function(){

    await proposalPage.SelectTypeoofPrpject();
});

When('User selects Department Capacity',async function(){

    await proposalPage.SelectDepartmentCapacityDropdown();

});

When('User selects Project Term',async function(){

    await proposalPage.SelectProjectTermDropdown();

});

When('And User selects District',async function(){

    await proposalPage.SelectDistrictDropdown();
});

When('And User selects Taluka',async function(){

    await proposalPage.SelectTalukaDropdown();
});

When('User selects village name check box',async function(){

    await proposalPage.SelectVillage('Ballari-Aladalli');

});

When('User click on Add Location button',async function(){

    await proposalPage.clickAddLocationButton();

});

Then('Location details saved successfully', async function(){

    await proposalPage.handleSuccesspopup();

});

When('User selects Standalone project',async function(){

    await proposalPage.standaloneradioButton();

});

When('User selects Site Available',async function(){

    await proposalPage.SelectSiteAvailableDrowpdown();

});

When('User selects Project Involve ',async function(){

    await proposalPage.SelectProjectInvloveRadioButton();
    
});

When('User enters Name of the Location',async function(){

    await proposalPage.EnterNameofLocation();

});

When('User enters Survey Number',async function(){

    await proposalPage.EnterSurveyNumber();

});

When ('User enters Lattitude',async function(){

    await proposalPage.EnterLatitude();
});

When('User enters Longitude',async function(){
    
    await proposalPage.EnterLongitude();
});

When('User enters Mining impacted',async function(){

    await proposalPage.EnterMiningImpacted();

});

When('User enters Total Cost',async function(){

    await proposalPage.EnterTotalCost();
});

When('User enters Cost Of DPR',async function(){

    await proposalPage.EnterCostofDPR();
});

When('User enters DPR Preparation Time',async function(){

    await proposalPage.EnterDPRPrepartionCost();;
});

When('User click Add Output Activity Button',async function(){

    await proposalPage.ClickaddOutputActivitybUtton();
});

When(' User selects the Output Activity',async function(){

    await proposalPage.SelectOutputActivity();
});

When('User enters Output Activity in Detail',async function(){

    await proposalPage.EnterOutputActivityDetails();

});

When ('User enters Quantity',async function(){

    await proposalPage.EnterQuantity();
});

When(' User selects Unit of Measurement',async function(){

    await proposalPage.SelectUnotOfMeasurement();

});

When('User click Save Button',async function(){

    await proposalPage.ClickSaveButton();

});

Then('Success popup should be displayed',async function(){

    await proposalPage.handleSuccessPopup();

});

When('User enters Project outcome',async function(){

    await proposalPage.EnterPojectOutcome();

});

When('User enters Justification',async function(){

    await proposalPage.EnterJustification();

});

When('User enters Mechanism',async function(){

    await proposalPage.EnterMechanism();

});

When('User click Add Document',async function(){

    await proposalPage.ClickAddDocument();

});

When('User selects Document Name',async function(){

    await proposalPage.SelectDocument();
})

When('User enters Description',async function(){

    await proposalPage.EnterDiscription();

});

When('User Uploads Document',async function(){

    await proposalPage.UploadDocument();

});

Then('Then Document Ulpoad successfully',async function(){

    await  proposalPage.clickSuccesspopupOk();

});

When('User Enters Comments',async function(){

    await proposalPage.EnterComments();

});

When('User selects Agree Checkbox',async function(){

    await proposalPage.CLickAgreeCheckBox();

});

When('User selects Forwarded Next Officer',async function(){

    await proposalPage.SelectNextOfficerDropdown();

});

Then('Proposal Saved successfully',async function(){

    await proposalPage.clickSuccesspopupOk();

});

When('User click on Submit button',async function(){

    await proposalPage.ClickSubmit();

});

Then('Proposal should be created successfully',async  function(){

    const proposalNo=await proposalPage.grtProposalNumberFromPopup();

    console.log("Generated proposal number", proposalNo);

    this.proposalNumber=proposalNo;

    await proposalNo.ClickPopUpOk();
})












    
