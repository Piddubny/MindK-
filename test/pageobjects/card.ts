import { cartsComponents } from "./components/cartsComponents"

export class CartPage {
    async clickCheckout() {
        await expect(this.checkoutButton).toBeEnabled()
        await this.checkoutButton.click()
    }

    async fillDetails(data:{
        firstName: string,
        lastName: string,
        postalCode: string
    }){
        await this.firstName.setValue(data.firstName)
        await this.lastName.setValue(data.lastName)
        await this.postalCode.setValue(data.postalCode)
    }

    async clickContinue() {
        await expect(this.continueButton).toBeEnabled()
        await this.continueButton.click()
    }
    async clickfinish() {
        await expect(this.finishButton).toBeEnabled()
        await this.finishButton.click()
    }

    get productsItemsCart(){
        return $$('.cart_item').map(elem => {
            return new cartsComponents(elem)
       })
   }

    get checkoutButton() { return $('.btn.btn_action.btn_medium.checkout_button') }
    get firstName() {return $('input[data-test="firstName"]')}
    get lastName() {return $('input[data-test="lastName"]')}
    get postalCode() {return $('input[data-test="postalCode"]')}
    get continueButton() { return $('input[data-test="continue"]') }
    get finishButton() { return $('button[data-test="finish"]') }

}
