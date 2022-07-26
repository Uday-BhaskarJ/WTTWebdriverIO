describe('dynamic loading page',()=>{
    it('wait for the hidden element to show', async ()=>{
         const btnstart = await $("#start button");
         const btnfinish = await $("#finish h4");

        await browser.url('/dynamic_loading/1')

        await  btnstart.click();

       // await  browser.pause(8000);
       await btnfinish.waitForDisplayed();
        const text = await btnfinish.getText();
        console.log(text);
        await expect(text).toEqual("Hello World!");
    });
});