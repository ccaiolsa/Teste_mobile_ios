import {$} from '@wdio/globals'
import home from './home.page.js'

class CadastroPage{

    get firstName () {
        return $('android=new UiSelector().resourceId("firstName")')
    };
    get lastName(){
        return $('android=new UiSelector().resourceId("lastName")')
    };
    get phone(){
        return $('android=new UiSelector().resourceId("phone")')
    };
    get emailAdress(){
        return $('android=new UiSelector().resourceId("email")')

    };
    get pass(){
            return $('android=new UiSelector().resourceId("password")')

    };
    get confPass(){
            return $('android=new UiSelector().resourceId("repassword")')

    };
    get btnSubmit(){
        return $('android=new UiSelector().resourceId("create")')
    }
    
    async realizarCadastro(fName, lName, phone, email, pass){

        await this.firstName.waitForDisplayed()
        await this.firstName.setValue(fName)

        await this.lastName.waitForDisplayed()
        await this.lastName.setValue(lName)

        await this.phone.waitForDisplayed()
        await this.phone.setValue(phone)

        await this.emailAdress.waitForDisplayed()
        await this.emailAdress.setValue(email)

        await this.pass.waitForDisplayed()
        await this.pass.setValue(pass)
        
        await this.confPass.waitForDisplayed()
        await this.confPass.setValue(pass)

        await this.btnSubmit.waitForDisplayed()
        await this.btnSubmit.click()
        

    }
}

export default new CadastroPage();
