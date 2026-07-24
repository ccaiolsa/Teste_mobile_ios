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
        return $('//android.view.ViewGroup[@content-desc="Login"]');
    }
    get btnSign(){
        return $('android=new UiSelector().text("Sign up")')
    }

    async realizarLogin(email, pass){

        await this.userEmail.waitForExist( {timeout: 5000} )
        await this.userEmail.setValue(email)

        await this.userPass.waitForExist( {timeout: 5000} )
        await this.userPass.setValue(pass)

        await this.btnLogin.waitForExist( {timeout: 5000} )
        await this.btnLogin.doubleClick()


    }

}

export default new LoginPage();
