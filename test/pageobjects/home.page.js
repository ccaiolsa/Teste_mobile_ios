import {$} from '@wdio/globals'
import browser from '../pageobjects/browser.page.js'

class Home{

    get btnProfile () {
        return $('android=new UiSelector().resourceId("tab-profile")');
    };
    get btnBrowser(){
        return $('android=new UiSelector().resourceId("tab-Search")')
    }

    async acessarProfile(){
        await this.btnProfile.waitForDisplayed({ timeout: 15000 })
        await this.btnProfile.click()
    };
    async acessarBusca(){
        await this.btnBrowser.waitForDisplayed({ timeout: 15000 })  
        await this.btnBrowser.click()
    }

}

export default new Home();
