// import { test, expect } from "@playwright/test";
// import Tesseract from "tesseract.js";

// test("test", async ({ page }) => {
//   await page.goto("https://49.204.72.13:8443/");
// //   await page.locator("div").first().click();
// //   await page.getByRole("button", { name: "Advanced" }).click();
// //   await page.getByRole("link", { name: "Proceed to 49.204.72.13 (" }).click();
//   await page.getByRole("link", { name: "Login" }).click();
//   await page.getByRole("textbox", { name: "Username" }).click();
//   await page.getByRole("textbox", { name: "Username" }).fill("KFD_DLO_BAL_LD");
//   await page.getByRole("textbox", { name: "Password" }).click();
//   await page.getByRole("textbox", { name: "Password" }).fill("opr@123");

//     // await page.locator('#captchaimg').waitFor();
//     await page.locator('#captchaimg').screenshot({
//         path:'captcha.png'
//     });
//     const result=await Tesseract.recognize('captcha.png','eng');
//     console.log(result.data.text);
//     await page.pause();
//     await page.locator('#txtCaptcha').fill(result.data.text.trim());
    

// //   await page.getByRole("textbox", { name: "Captcha" }).click();
// //   await page.getByRole("textbox", { name: "Captcha" }).fill("FOrbpD");
//   await page.getByRole("button", { name: "Sign In" }).click();
//   await page.getByRole("button", { name: "Request OTP" }).click();
//   await page.pause();
// //   await page.getByRole("textbox", { name: "OTP" }).click();
// //   await page.getByRole("textbox", { name: "OTP" }).fill("7885");
//   await page.getByRole("button", { name: "Validate OTP" }).click();
//   await page.pause();
//   await page.goto("https://49.204.72.13:8443/Home/Dashboard/");
//   await page.getByRole("link", { name: "Project Planning" }).click();
//   await page.getByRole("link", { name: "Create New Proposal" }).click();
//   await page.locator('textarea[name="ProjectName"]').click();
//   await page.locator('textarea[name="ProjectName"]').fill("new project of KFD");
//   await page.locator("#ProposalDepartment").selectOption("1");
//   await page.locator("#SectorId").selectOption("1");
//   await page.locator("#SubSectorId").selectOption("1");
//   await page.locator("#ProjectTypeId").selectOption("1");
//   await page.getByLabel("Does Department has capacity").selectOption("Y");
//   await page.getByLabel("Whether Project is Short term").selectOption("1");
//   await page.locator("#DistrictCode").selectOption("12");
//   await page.locator("#TalukCode").first().selectOption("5");
//   await page
//     .getByRole("row", { name: "Ballari - Aladalli" })
//     .getByRole("checkbox")
//     .check();
//   await page
//     .getByRole("row", { name: "Ballari - Aladalli" })
//     .getByRole("checkbox")
//     .check();
//   await page
//     .getByRole("row", { name: "Rupanagudi - Amarapura" })
//     .getByRole("checkbox")
//     .check();
//   await page
//     .getByRole("row", { name: "Ballari - Alipura" })
//     .getByRole("checkbox")
//     .check();
//   await page.getByRole("button", { name: "Add Location" }).click();
//   await page.getByRole("button", { name: "OK" }).click();
//   await page.getByRole("radio", { name: "Convergence" }).check();
//   await page.locator("#Scheme").selectOption("1");
//   await page.locator("#ProjectConvergenceRemarks").click();
//   await page.locator("#ProjectConvergenceRemarks").fill("convergence");
//   await page.locator("#avail").selectOption("1");
//   await page.getByRole("radio", { name: "Yes" }).check();
//   await page.locator("#Nameofthelocation").click();
//   await page.locator("#Nameofthelocation").fill("ballari");
//   await page.locator("#SurveyNumber").click();
//   await page.locator("#SurveyNumber").fill("133.21.2532.12");
//   await page.locator("#Lattitude").click();
//   await page.locator("#Lattitude").fill("1253.2132.22");
//   await page.locator("#Longitude").click();
//   await page.locator("#Longitude").fill("154.25462.22");
//   await page.locator("#MiningImpactedFlag").selectOption("1");
//   await page.locator("#CostofProject").click();
//   await page.locator("#CostofProject").fill("302");
//   await page.locator("#CostforDPR").click();
//   await page.locator("#CostforDPR").fill("15");
//   await page
//     .getByText(
//       "Time Required for DPR Preparation(Number of Months in numerals)*",
//     )
//     .click();
//   await page
//     .getByText(
//       "Time Required for DPR Preparation(Number of Months in numerals)*",
//     )
//     .click();
//   await page.locator("#TimeRequired").click();
//   await page.locator("#TimeRequired").fill("10");
//   await page.getByRole("button", { name: "(+) Add Output Activity" }).click();
//   await page.locator("#ActivityId").selectOption("1");
//   await page.getByRole("textbox", { name: "Describe the activity..." }).click();
//   await page
//     .getByRole("textbox", { name: "Describe the activity..." })
//     .fill("activity 1");
//   await page.locator("#ActivityQuantity").click();
//   await page.locator("#ActivityQuantity").fill("20");
//   await page.locator("#ActivityUnitofMeasurement").selectOption("10");
//   await page
//     .locator("#OutputActivity")
//     .getByRole("button", { name: "Save" })
//     .click();
//   await page.getByRole("button", { name: "OK" }).click();
//   await page.locator("#ProjectOutCome").click();
//   await page.locator("#ProjectOutCome").fill("project outcomep");
//   await page.locator("#JustificationFundingUnderCEPMIZ").click();
//   await page.locator("#ProjectOutCome").fill("project outcomepro");
//   await page
//     .locator("#JustificationFundingUnderCEPMIZ")
//     .fill("project outcome 2p");
//   await page.locator("#MechanismforPostProjectMaintaince").click();
//   await page
//     .locator("#JustificationFundingUnderCEPMIZ")
//     .fill("project outcome 2proj");
//   await page
//     .locator("#MechanismforPostProjectMaintaince")
//     .fill("project outcome 3");
//   await page.getByRole("button", { name: "(+) Add Document" }).click();
//   await page.locator("#DocumentId").selectOption("6");
//   await page.getByRole("textbox", { name: "Document Description..." }).click();
//   await page
//     .getByRole("textbox", { name: "Document Description..." })
//     .fill("document description");
//   await page.getByRole("button", { name: "Choose File" }).click();
//   await page
//     .getByRole("button", { name: "Choose File" })
//     .setInputFiles("testdata/Sample.pdf.pdf");
//     await page.getByRole("button", { name: "Upload" }).click();
//     await page.getByRole("button", { name: "OK" }).click();
//     // await page.locator("input[type='file']").setInputFiles("testdata/Welcoming_letter_updated.pdf");
//      await page.getByRole("button", { name: "(+) Add Document" }).click();
//   await page.locator("#DocumentId").selectOption("1");
//   await page.getByRole("textbox", { name: "Document Description..." }).click();
//   await page
//     .getByRole("textbox", { name: "Document Description..." })
//     .fill("document ");
//   await page.getByRole("button", { name: "Choose File" }).click();
//   await page
//     .getByRole("button", { name: "Choose File" })
//     .setInputFiles("testdata/Sample.pdf.pdf");
//   await page.pause();
//   await page.getByRole("button", { name: "Upload" }).click();
//   await page.getByRole("button", { name: "OK" }).click();
//   await page.getByRole("textbox", { name: "Comments *" }).click();
//   await page.getByRole("textbox", { name: "Comments *" }).fill("comments");
//   await page.getByRole("checkbox", { name: "I Agree *" }).check();
//   await page
//     .getByLabel("Project Proposal Forwarded to")
//     .selectOption("DC_DC_BAL_DC");
//   await page.getByRole("button", { name: "Save" }).click();
//   await page.getByRole("button", { name: "OK" }).click();
//   await page.getByRole("button", { name: "OK" }).click();
//   await page.getByRole("button", { name: "Submit" }).click();

//   const popupmessage=await page.locator('#swal2-title').textContent();
//   console.log("popupMessage:".popupmessage.trim());
//     //  const proposalNumber = popupMessage.match(/PP\d+/)[0];
//     //  console.log("Proposal Number:", proposalNumber);
//   await page.getByRole("button", { name: "OK" }).click();
 
// });
