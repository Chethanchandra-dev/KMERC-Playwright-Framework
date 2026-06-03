import { expect } from '@playwright/test';
import { removeAllListeners } from 'node:cluster';
import { captureRejectionSymbol } from 'node:events';

export class ProposalPage{
    
    constructor(page){

        this.page=page();

        this.projectname=page.locator('textarea[name="ProjectName"]');
        //await page.locator('textarea[name="ProjectName"]').fill('Test Project');
        // await page.getByLabel('Project Name').fill('Test Project');
        //await page.locator('#ProjectName').fill('Test Project');

        this.departmentDropdown=page.locator('#ProposalDepartment').selectOption({ label: 'Karnatak Forest Department' });

        //await page.locator('#ProposalDepartment').selectOption('1');
        //await page.getByLabel('Department').selectOption('1');
        //page.locator("#ProposalDepartment").selectOption(new SelectOption().setLabel("Karnatak Forest Department"));

        this.sectorDropdown=page.locator('#SectorId').selectOption({lable:'Eco-restoration'});

        this.subsectorDropdown=page.locator('#SubSectorId').selectOption({lable:'Forestry'});

        this.TypeofprojectDropodown=page.locator('#ProjectTypeId').selectOption({lable:'New'});

        this.departmengtcapacityDropdown=page.locator('#dcp').selectOption({lable:'Yes'});

        this.projecttermDropdown=page.locator('#TermofProject').selectOption({label:'Long term(> 3 Years)'});

        this.districtDropdown=page.locator('#DistrictCode').selectOption({lable:'Ballari'});

        this.talukaDropdown=page.locator('#TalukCode').selectOption({label:'Ballari'});

        this.addLocationButton=page.getByRole('button',{name:'AddButton'});

        this.okButton=page.getByRole('button',{name:'OK'});

        this.standaloneRadioButton=page.locator("#std1");

        this.siteavailableDropdown=page.locator('#avail').selectOption({name:Available});

        this.projectInvloveRadioButton=page.locator('#involveYes');

        this.enterNameOfLocation=page.locator('#Nameofthelocation');

        this.enterSurveyNumber=page.locator('#SurveyNumber');

        this.enterLatitude=page.locator('#Lattitude');

        this.enterLongitude=page.locator('#Longitude');

        this.enterMiningImpacted=page.locator('#MiningImpactedFlag').selectOption({name:'Directly affected by mining '});

        this.enterTotalCost=page.locator('#CostofProject');

        this.enterCostofDpr=page.locator("#CostforDPR");

        this.enterDPRpreparationTime=page.locator('#TimeRequired');

        this.clickaddOutputActivitybUtton=page.locator('#AddActivityOutput');

        this.selectOutpuActivity=page.locator('#ActivityId').selectOption({name:'Model A - Ecological Restoration'});

        this.enterOutputActivityDetails=page.locator('#ActivityinDetails');

        this.entrQuantity=page.locator('#ActivityQuantity');

        this.selectUnitofMeasurement=page.locator('#ActivityUnitofMeasurement').selectOption({name:'Number '});

        this.clickSaveButton=page.getByRole('button',{name:"Save"});

        this.successPopup = page.locator('.swal2-popup');
        this.okButton = page.locator('.swal2-confirm');

        this.enterProjectOutcome=page.loctor('#ProjectOutCome');

        this.enterJustifications=page.locator('#JustificationFundingUnderCEPMIZ');

        this.enterMechanism=page.locator('#MechanismforPostProjectMaintaince');

        this.clickAddDocument=page.locator('#AddDocButton');

        this.selectDocument=page.locator('#DocumentId').selectOption({name:'Proposal of Project/ಯೋಜನೆಯ ಪ್ರಸ್ತಾವನೆ '});

        this.enterDescription=page.locator('#DocTittle');

        this.fileupload=page.locator("#fileupload");

        this.okbutton=page.getByRole('button',{name:'OK'});

        this.enterComments=page.locator('#DCComments');

        this.clickAgreeCheckbox=page.locator('#agree');

        this.selectNextOfficerDropdown=page.locator('#NextOfficer').selectOption({name:'Ballari_Deputy Commissioner_District Commissioner '});

        this.clickSave=page.locator('#SaveButton');
        
        this.clickpopupOK=page.locator('swal2-confirm');

        this.clickSubmit=page.locator('#SaveButton');




    }

    async EnterProjectName(){

        await this.projectname.scrollIntoViewIfNeeded();  //Scoll for every element interaction
        await this.projectname.fill('KMERC framework Testing Project');
    }

    async SelectDepartmentDropdown(){

        await this.departmengtcapacityDropdown.scrollIntoViewIfNeeded();
        await this.departmentDropdown.click();

    }

    async SelectSectroDropdown(){

        await this.sectorDropdown.scrollIntoViewIfNeeded();
        await this.sectorDropdown.click();

    }

    async SelectSubSectorDropdown(){

        await this.subsectorDropdown.scrollIntoViewIfNeeded();
        await this.subsectorDropdown.click();

    }

    async SelectTypeoofPrpject(){

        await this.TypeofprojectDropodown.scrollIntoViewIfNeeded();
        await this.TypeofprojectDropodown.click();

    }

    async SelectDepartmentCapacityDropdown(){

        await this.departmengtcapacityDropdown.scrollIntoViewIfNeeded();
        await this.departmengtcapacityDropdown.click();

    }

    async SelectProjectTermDropdown(){

        await this.projecttermDropdown.scrollIntoViewIfNeeded();
        await this.projecttermDropdown.click();
    }

    async SelectDistrictDropdown(){

        await this.districtDropdown.scrollIntoViewIfNeeded();
        await this.districtDropdown.click();
    }

    async SelectTalukaDropdown(){

        await this.talukaDropdown.scrollIntoViewIfNeeded();
        await this.talukaDropdown.click();
    }

    async SelectVillage(VillageName){

        const row=this.page('tr',{has:this.page.locator(`text=${VillageName}`)});

        await   row.locator('input[type="checkbox"]').check();
    }
    //this.villageCheckbox = page.locator('input[name="chklist"]').first();

    async clickAddLocationButton(){

        await this.addLocationButton.scrollIntoViewIfNeeded();
        await this.addLocationButton.click();
    }

    async handleSuccesspopup(){
            
        await expect(this.locator('.swa12-title').toContainText("project proposal location saved successfully"));

        await this.okButton.click();
    }

    async SelectStanadloeRadion(){

        await this.standaloneRadioButton.scrollIntoViewIfNeeded();
        await this.standaloneRadioButton.check();
    }

    async SelectSiteAvailableDrowpdown(){

        await this.siteavailableDropdown.scrollIntoViewIfNeeded();
        await this.siteavailableDropdown.click();
    }

    async SelectProjectInvloveRadioButton(){

        await this.projectInvloveRadioButton.scrollIntoViewIfNeeded();
        await this.projectInvloveRadioButton.click();
    }

    async EnterNameofLocation(){

        await this.enterNameOfLocation.scrollIntoViewIfNeeded();
        await this.enterNameOfLocation.fill('ballari rural')
    }

    async EnterSurveyNumber(){

        await this.enterSurveyNumber.scrollIntoViewIfNeeded();
        await this.enterSurveyNumber.fill('121.113.21310.50');

    }

    async  EnterLatitude(){

        await this.enterLatitude.scrollIntoViewIfNeeded();
        await this.enterLatitude.fill('1560.64.54.64641');
    }

    async EnterLongitude(){

        await this.enterLongitude.scrollIntoViewIfNeeded();
        await this.enterLongitude.fill('155.515.646.415');
    }

    async EnterMiningImpacted(){

        await this.enterMiningImpacted.scrollIntoViewIfNeeded();
        await this.enterMiningImpacted.click();
    }

    async EnterTotalCost(){
        
        await this.enterTotalCost.scrollIntoViewIfNeeded();
        await this.enterTotalCost.fill('50');
    }

    async EnterCostofDPR(){

        await this.enterCostofDpr,scrollIntoViewIfNeeded();
        await this.enterCostofDpr.fill('50000');
    }

    async EnterDPRPrepartionCost(){

        await this.enterDPRpreparationTime.scrollIntoViewIfNeeded();
        await this.enterDPRpreparationTime.fill('5')

    }

    async ClickaddOutputActivitybUtton(){

    await this.clickaddOutputActivitybUtton.scrollIntoViewIfNeeded();
    await this.clickaddOutputActivitybUtton.click();
}

    async SelectOutputActivity(){

        await this.selectOutpuActivity.scrollIntoViewIfNeeded();
        await this.selectOutpuActivity.click();
    }

    async EnterOutputActivityDetails(){ 

        await this.selectOutpuActivity.scrollIntoViewIfNeeded();
        await this.selectOutputActivity.fill(" output put activity in detail");
    }

    async EnterQuantity(){

        await this.enterQuantity.scrollIntoViewIfNeeded();
        await this.enterQuantity.fill('10');
    }

    async SelectUnotOfMeasurement(){

        await this.selectUnitofMeasurement.scrollIntoViewIfNeeded();
        await this.selectUnitofMeasurement.click();
    }

    async ClickSaveButton(){

        await this.clickSaveButton.scrollIntoViewIfNeeded();
        await this.clickSaveButton.click();

    }

    async handleSuccessPopup() {

    await this.successPopup.waitFor({
        state: 'visible',
        timeout: 10000
    });

    await this.okButton.click();

    }

    async EnterPojectOutcome(){

        await this.enterProjectOutcome.scrollIntoViewIfNeeded();
        await this.enterProjectOutcome.fill('Project outcome 1');
    }

    async EnterJustification(){

        await this.enterJustifications,scrollIntoViewIfNeeded();
        await this.enterJustifications.fill('Justification');
    }

    async EnterMechanism (){

        await this.enterMechanism.scrollIntoViewIfNeeded();
        await this.enterMechanism.fill('mechanism');
    }

    async ClickAddDocument(){

        await this.clickAddDocument.scrollIntoViewIfNeeded();
        await this.clickAddDocument.click();

    }

    async SelectDocument(){

        await this.clickAddDocument.scrollIntoViewIfNeeded();
        await this.selectDocument.click();

    }
    async EnterDiscription(){

        await this.enterDescription.scrollIntoViewIfNeeded();
        await this.enterDescription.fill('documenmt description')
    }
    async UploadDocument(){

        await this.fileupload.scrollIntoViewIfNeeded();
        await this.fileupload.setInputFiles('testdata/sample.pdf');

    }

    async clickSuccesspopupOk(){


        await expect(this.page.locator('#swal2-title').toContainText('Proposal'))

        await this.page.locator('.swal2-popup').waitFor({state:'visible'});

        await this.okbutton.click();
    }
//   Combine validation and click:
//     async handleUploadSuccessPopup() {

//     await expect(
//         this.page.locator('.swal2-popup')
//     ).toBeVisible();

//     await expect(
//         this.page.locator('#swal2-title')
//     ).toContainText('Proposal');

//     await this.page.locator('.swal2-confirm').click();

// }

    async EnterComments(){

        await this.enterComments,scrollIntoViewIfNeeded();
        await this.enterComments.fill('comments')

    }

    async CLickAgreeCheckBox(){

        await this.clickAgreeCheckbox.scrollIntoViewIfNeeded();
        await this.clickAgreeCheckbox();

    }

    async SelectNextOfficerDropdown(){

        await this.selectNextOfficerDropdown.scrollIntoViewIfNeeded();
        await this.selectNextOfficerDropdown.click();
    }

    async ClickSavebutton(){

        await this.clickSave.click();
    }

    async clickSuccesspopupOk(){


        await expect(this.page.locator('#swal2-title').toContainText('Proposal'))

        await this.page.locator('.swal2-popup').waitFor({state:'visible'});

        await this.okbutton.click();
    }

    async ClickSubmit(){

        await this.clickSubmit.click();
    }

    async grtProposalNumberFromPopup(){

        await this.page.locator('.swal2-popup').waitFor({state:'visible'});
        const popupText=await this.page.locator('.swal2-popup').textContent();

        console.log("popup Text",popupText);

        const proposalNo=popupText.match(/[a-z]+[0-9]+/)?.[0];

        console.log("proposal Number:", proposalNo);

        return proposalNo;

    }

    async ClickPopUpOk(){

        await this.clickPopUpOk.click();

    }












}
