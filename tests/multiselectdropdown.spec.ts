import {test,expect,Locator, chromium,Browser} from '@playwright/test'


test('Radio',async ({browser})=>{

 const Browser = await chromium.launch();

 const context = await browser.newContext();

 const page = await context.newPage();

  await page.goto('https://testautomationpractice.blogspot.com/');


     const select=   page.locator('#colors');

     //select.selectOption('Red','Blue');
    //select.selectOption({label:'Yellow'},{label:'RED'});
    select.selectOption({value:'green'});
   //select.selectOption({index:4}); 
   
const  coun =   page.locator('#colors option');
 await expect(coun).toHaveCount(7);
  
    const tex:string[]=   (await coun.allTextContents()).map(text => text.trim())
    expect(tex).toContain('Red')

    for (const tst of tex ){

    console.log(tst);
    }


await page.waitForTimeout(5000);

});



//tex.sort()

//expect(orginalist).toequal(sortedlist);