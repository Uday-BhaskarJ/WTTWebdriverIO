describe('Main Page',()=>{
    it('Verify List Items',async () =>{
       await browser.url('/');
        

        const listexamples = $$("ul li");//find elements
        await expect(listexamples).toBeElementsArrayOfSize({gte: 1});
       //await expect(listexamples).toBeElementsArrayOfSize(44);
    });
});