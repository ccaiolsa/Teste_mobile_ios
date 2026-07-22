import { $ } from '@wdio/globals'
import home from '../pageobjects/home.page.js'


class ProfilePage {

    get profileName() {
        return $('android=new UiSelector().text("Araujo Caio")');
    }

    async cadastro() {
        await home.btnProfile.waitForDisplayed()
        await home.btnProfile.click()

        await this.btnSign.waitForDisplayed()
        await this.btnSign.click()

        await cadastro.realizarCadastro()

    }

}

export default new ProfilePage();
