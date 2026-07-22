import {$} from '@wdio/globals'
import home from '../pageobjects/home.page.js'

class LoginPage{

    get userEmail () {
        return $('android=new UiSelector().resourceId("email")');
    }

    get userPass () {
        return $('android=new UiSelector().resourceId("password")');
    }

    get btnLogin () {
        return $('android=new UiSelector().resourceId("btnLogin")');
    }
    get btnSign(){
        return $('android=new UiSelector().text("Sign up")')
    }

    async realizarLogin(email, pass){
        await home.acessarProfile()

        await this.userEmail.waitForDisplayed()
        await this.userEmail.setValue(email)

        await this.userPass.waitForDisplayed()
        await this.userPass.setValue(pass)

        await this.btnLogin.waitForDisplayed()
        await this.btnLogin.click()

        await browser.pause(3000)
        await home.acessarProfile()
    }

}

export default new LoginPage();
