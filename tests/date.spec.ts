import {test,expect,Locator,Page} from '@playwright/test'

async function selectDate(targetyear:string,tragetmonth:string,targetdate:string,page:Page,isFuture:boolean){
while(true){
   const currentyear= await page.locator('.ui-datepicker-year').textContent();
    const currentmonth = await page.locator('.ui-datepicker-month').textContent();

    if(currentyear===targetyear && currentmonth==tragetmonth)
        {


        break;
    }

  if(isFuture)
    {
   await page.locator('.ui-datepicker-next').click();
  }
  else
  {
    await page.locator('.ui-datepicker-prev').click();
  }
   

}

const alldates=await page.locator('.ui-datepicker-calendar td').all();

  for (let dt of alldates){

    const alldate=await dt.innerText();

    if(alldate===targetdate){

      await dt.click();
        break;
    }
  }



}

test('dateselect',async({page})=>{

 await page.goto('https://testautomationpractice.blogspot.com/')


 const dateinput=await page.locator('#datepicker');

     //dateinput.fill('11/11/2026');
     dateinput.click();

//date cust

const year='2028';
const month='June';
const day='10';

selectDate(year,month,day,page,true);


   await page.locator('#singleFileInput').setInputFiles('testdata/Tharun_Kumar_QA_Playwright_TypeScript_Resume.pdf');
  //await page.locator('#singleFileInput').setInputFiles([]);
   await page.locator('#multipleFilesInput').setInputFiles(['testdata/Tharun_Kumar_QA_Playwright_TypeScript_Resume.pdf','testdata/1.docx']);
   //await expect(page.getByText('Tharun_Kumar_QA_Playwright_TypeScript_Resume.pdf')).toBeVisible();
   await page.waitForTimeout(7000);
});