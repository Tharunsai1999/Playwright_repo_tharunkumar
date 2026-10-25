import {test,expect,Locator, chromium,Browser} from '@playwright/test'


test('login',async ({browser})=>{

 const Browser = await chromium.launch();

 const context = await browser.newContext();

 const page = await context.newPage();


 const timestamp=Date.now();

   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const  new1 =  page.getByPlaceholder('Username');
         await new1.fill('Admin');
         await new1.textContent();
       await expect(new1).toBeVisible();
     expect.soft(new1).toHaveValue('Admin');
     
   await page.locator('[name=password]').fill('admin123');
//approach1:
   await page.screenshot({path:'screentshot/homepage.png'});

//approach2:
   await page.screenshot({path:'screentshot/'+'newpage'+timestamp+'.png',fullPage:true});
//approach3: 

 await new1.screenshot({path:'screentshot/'+'newpage'+timestamp+'.png'});

   const text1=await page.getByPlaceholder('Username').inputValue();


   console.log(text1);
    expect(text1).toBe('Admin');
   const new2=await page.locator('button.oxd-button');
     await expect(new2).toBeEnabled();
 await page.locator('button.oxd-button').click();
 //await page.locator('[text="Recruitment"').nth(1).click();
 //await page.locator('.oxd-select-text--after').nth(1).click();
  await page.waitForTimeout(5000);



});