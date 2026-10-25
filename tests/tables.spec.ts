import {test,expect,Locator, chromium,Browser} from '@playwright/test'


test('Radio',async ({browser})=>{

 const Browser = await chromium.launch();

 const context = await browser.newContext();

 const page = await context.newPage();

  await page.goto('https://testautomationpractice.blogspot.com/');

  const table= page.locator("table[name='BookTable'] tbody ");

   await expect(table).toBeVisible();

    const rowcount= page.locator("table[name='BookTable'] tbody tr");

   await expect(rowcount).toHaveCount(7);


   const row= await rowcount.count();

     console.log(row);
     expect(row).toBe(7);

await page.waitForTimeout(5000);



// columns
 const  col=  rowcount.locator('th');
     await expect(col).toHaveCount(4);

const col2= await col.count();

     console.log(col2);
     expect(col2).toBe(4);



   const firstrowtext:String[]= await rowcount.nth(1).allInnerTexts();

    console.log(firstrowtext);



  const firstcoltext:String[]= await col.nth(0).allInnerTexts();

    console.log(firstcoltext);


    // columns
 //const  col3=  rowcount.locator('th').nth(2);
  //   console.log(col3);
   
    const alldata= await rowcount.all()
    for(let allelements of alldata.slice(1) ){

        const allrowdata= await allelements.locator('td').innerText();
        console.log(allrowdata);
    }


});