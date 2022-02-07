import { LoginPage } from "./login"
import { ProductsPage } from "./products"
import { CartPage } from "./card"

export class App{
   login: LoginPage
   products: ProductsPage  
   cart: CartPage

   constructor(){
      this.login = new LoginPage()
      this.products = new ProductsPage()    
      this.cart = new CartPage()  
   }
    
}
