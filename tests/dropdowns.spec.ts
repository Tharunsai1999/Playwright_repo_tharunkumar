import {test,expect,Locator, chromium,Browser} from '@playwright/test'


test('Radio',async ({browser})=>{

 const Browser = await chromium.launch();

 const context = await browser.newContext();

 const page = await context.newPage();

  await page.goto('https://testautomationpractice.blogspot.com/');

    const  drop:Locator= page.locator('#country option');
     const options : String[]=(await drop.allTextContents()).map(text => text.trim());
      expect(options).toContain('India');

  for( const option of options)
  {

    console.log(option);
  }

    //drop.click();
    // await expect(drop).toHaveCount(10);
     //page.locator('Select#country').selectOption('United States');
     // page.locator('Select#country').click();
     // page.locator('Select#country').selectOption({value:'uk'});
       //page.locator('Select#country').click();
       //page.locator('Select#country').selectOption({label:'india'});
       //drop.selectOption({index:5});

        






});
