import {test,expect,Locator, chromium,Browser} from '@playwright/test'


test('Radio',async ({browser})=>{

 const Browser = await chromium.launch();

 const context = await browser.newContext();

 const page = await context.newPage();



  await page.goto('https://testautomationpractice.blogspot.com/');

   const male = await page.locator('input#male').check();

    await expect(page.locator('input#male')).toBeChecked();

    await page.locator('input#female').check();

});



//checkbox


test.only('check',async ({browser})=>{

 const Browser = await chromium.launch();

 const context = await browser.newContext();

 const page = await context.newPage();



  await page.goto('https://testautomationpractice.blogspot.com/');
  const days:string[]=['sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
   //page.getByLabel('sunday').check();
   //page.getByLabel('sunday').uncheck();
   
const check:Locator[]=days.map(index => page.getByLabel(index));

   expect(check.length).toBe(7);

   for( const checkboxes of check){      //slice(-3)


    if (await checkboxes.isChecked()){

        await checkboxes.uncheck()
    }else{

        await checkboxes.check();
    }
    await checkboxes.check();
    await expect(checkboxes).toBeChecked();

    const indexes:number[]=[1,2,6];

  for(const i of indexes)

   {
    //await checkboxes[i].check();
   }
   }


//random check


});