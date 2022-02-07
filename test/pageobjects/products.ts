import { BasePage } from "./base"
import { ProductsCartsComponents } from "./components/productsCartsComponents"

export class ProductsPage extends BasePage{

    get productsItems(){
        return $$('.inventory_item').map(elem => {
            return new ProductsCartsComponents(elem)
       })
   }

   async clickShoppingCartLlinkWhisProduct(){
    await this.shoppingCartProduct.waitForEnabled({ timeout: 3000, timeoutMsg:"Product not showing in shopping cart" })
    await this.shoppingCartLlink.click()
   }


   get shoppingCartLlink(){ return $('.shopping_cart_link')}
   get shoppingCartProduct(){ return $('.shopping_cart_badge')}
}

