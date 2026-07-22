import {$} from '@wdio/globals'
import home from '../pageobjects/home.page.js'

class LoginPage{

    get userEmail () {
        return $('#email');
    }

    get userPass () {
        return $('#password');
    }

    get btnLogin () {
        return $('~login');
    }

    async realizarLogin(email, pass){
        await home.profileTabe.click()
        await this.userEmail.setValue(email)
        await this.userPass.setValue(pass)
        await this.btnLogin.click()
    }
}

export default new LoginPage();
