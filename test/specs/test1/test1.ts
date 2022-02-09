import { assert, expect } from "chai";
import { App } from "../../pageobjects/application";
const fs = require('fs');
const path = require('path')
const pathJsonFile = 'test/specs/test1/test.data.json'
const pathJson = path.normalize(pathJsonFile)
let data = JSON.parse(fs.readFileSync(pathJson, 'utf8'));

describe("Test Assignment: Test Automation", async () => {   
    const app = new App()  
    beforeEach (async() => { 
        browser.deleteCookies()
        app.login.openPage()        
        await app.login.loginStandartUser()                 
   })     
    it("Verify orders information and finalize", async() => {            
        console.log("1. Add to the cart catalog item and proceed to the new order.")
        let firstItem = app.products.productsItems[0]       
        data.expected = await firstItem.getInfoItems()       
        await fs.writeFileSync(pathJson, JSON.stringify(data, null, 2))
        await firstItem.addToCard()        
        await app.products.clickShoppingCartLlinkWhisProduct()             
        await app.cart.clickCheckout()
        console.log("2.Fill the user’s information during the checkout process.")  
        await app.cart.fillDetails({
            firstName: data.input.firstName, 
            lastName: data.input.lastName, 
            postalCode: data.input.postalCode})
        await app.cart.clickContinue()
        let firstItemCart = app.cart.productsItemsCart[0]
        let actualInfo = await firstItemCart.getInfoItems()
        console.log("3.Verify order’s information and finalize.")         
        assert.deepEqual(actualInfo, data.expected, "Verify order’s information")
        await app.cart.clickfinish()                      
    });
    
});