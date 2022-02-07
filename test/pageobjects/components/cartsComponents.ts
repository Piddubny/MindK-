export class cartsComponents{  

    constructor( private root: WebdriverIO.Element){      
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