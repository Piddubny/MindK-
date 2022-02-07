export class ProductsCartsComponents{  

    constructor( private root: WebdriverIO.Element){      
    } 
    
    async addToCard() {
        const addToCardButton = this.root.$('.btn.btn_primary.btn_small.btn_inventory')
           await expect(addToCardButton).toBeEnabled()       
           await addToCardButton.click()
        }
    
        async getInfoItems() {
            const name = await this.root.$('.inventory_item_name')
            const desc = await this.root.$('.inventory_item_desc')
            const price = await this.root.$('.inventory_item_price')
            expect(name).toBeEnabled() 
            expect(desc).toBeEnabled() 
            expect(price).toBeEnabled() 
            const infoItems = {
                name: await name.getText(),
                desc: await desc.getText(),
                price: await price.getText()
            }
            return infoItems
        }    
}