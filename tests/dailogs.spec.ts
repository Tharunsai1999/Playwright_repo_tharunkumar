import {test,expect,Locator,Page,Dialog, chromium, Browser} from '@playwright/test'


test('test',async ({page})=>{

 page.on('dialog',(dialog)=>{

console.log(dialog.type());
console.log(dialog.message());
dialog.accept();
  expect(dialog.type()).toContain('aleart');
 expect(dialog.message()).toContain('I am aleart');
});

  await page.locator('').click();
})

    
//conformation 

   
test('test1',async ({page})=>{

 page.on('dialog',(dialog)=>{

console.log(dialog.type());
console.log(dialog.message());
dialog.accept();
  expect(dialog.type()).toContain('confirmation');
 expect(dialog.message()).toContain('I am aleart');
});

  await page.locator('').click();
})






//Prompt aleart


test('test2',async ({page})=>{


page.on('dialog',(dialog)=>{

dialog.type();
dialog.message();
dialog.accept('jhon');
expect(dialog.message()).toContain('test');
console.log(dialog.defaultValue());
expect(dialog.defaultValue()).toContain('test');


});


    
});



//aauthitication popup/tab

test('test2',async ({browser})=>{

    //approach1

const Browser = await chromium.launch();
const context =await browser.newContext({httpCredentials:{username:'admin',password:'admin'}});
const page = await context.newPage();


await page.waitForLoadState();

//approach2

await page.goto('http://admin:admin@url')
    
});