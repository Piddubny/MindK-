import { BasePage } from "./base"

export class LoginPage extends BasePage{
    openPage(){
        super.openPage("https://www.saucedemo.com/")
    }
    
    async loginStandartUser(){        
        await expect(this.userName).toBeEnabled()
        await expect(this.password).toBeEnabled()
        await expect(this.loginButton).toBeEnabled()
        await this.userName.setValue("standard_user")
        await this.password.setValue("secret_sauce")  
        await this.loginButton.click()     
         
    }

    get userName() { return $('#user-name') }
    get password() { return $('#password') }
    get loginButton() {return $('#login-button') }
     
    
}
