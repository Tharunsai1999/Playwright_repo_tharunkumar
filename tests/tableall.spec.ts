import {test,expect,Locator, chromium,Browser} from '@playwright/test'


test('Radio',async ({browser})=>{

 const Browser = await chromium.launch();

 const context = await browser.newContext();

 const page = await context.newPage();

  await page.goto('https://testautomationpractice.blogspot.com/');

  const row = page.locator("table[name='BookTable'] tbody tr ");
      const row2= await  row.locator('td').nth(15).innerText();
     console.log(row2);

//await row2.fill("New Value");

//console.log(await row2.innerText());


   console.log(await  row.allInnerTexts());

    const allrows=await row.all();

    for (let row of allrows.slice(1)){
      const test1= await row.locator('td').allInnerTexts();
      console.log(test1);
    
    }
    
    

});