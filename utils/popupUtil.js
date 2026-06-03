export async function handleSuccessPopup(page){

    await page.locator('.swal2-popup').waitfor({state:'visible'});

    await page.locator('.swal2-confirm').click();
}


//then use it anywhere

// import{handleSuccessPopup} from '../utils/popUpUtil.js';

// await handleSuccessPopup(this.page);