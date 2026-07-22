import {$} from '@wdio/globals'
import home from './home.page.js'

class CadastroPage{

    // Cadastro de novo usuário
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
    };

    // Cadastro de endereço
    get addName(){
        return $('android=new UiSelector().text("Enter your name")')

    };
    get addNumber(){
        return $('android=new UiSelector().text("Enter your mobile number")')
        
    };
    get address(){
        return $('android=new UiSelector().text("Enter your address")')
        
    };
    get addCity(){
        return $('android=new UiSelector().text("City")')
        
    };
    get addState(){
        return $('android=new UiSelector().text("State")')
        
    };
    get zipCode(){
        return $('android=new UiSelector().text("ZipCode")')
        
    };
    get btnSave(){
        return $('android=new UiSelector().resourceId("save")')
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
    async submitAddress(name, num, address, city, state, code){
        await this.addName.waitForDisplayed()
        await this.addName.setValue(name)

        await this.addNumber.waitForDisplayed()
        await this.addNumber.setValue(num)

        await this.address.waitForDisplayed()
        await this.address.setValue(address)

        await this.addCity.waitForDisplayed()
        await this.addCity.setValue(city)

        await this.addState.waitForDisplayed()
        await this.addState.setValue(state)

        await this.zipCode.waitForDisplayed()
        await this.zipCode.setValue(code)

        await this.btnSave.waitForDisplayed()
        await this.btnSave.click()

        await $('android=new UiSelector().resourceId("back")').click()

    }
}

export default new CadastroPage();
