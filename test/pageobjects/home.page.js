import {$} from '@wdio/globals'
import browser from '../pageobjects/browser.page.js'

class Home{

    get btnProfile() {
        return $('//android.widget.TextView[@resource-id="tab-profile"]');
    };
    get btnBrowser(){
        return $('//android.widget.TextView[@resource-id="tab-Search"]')
    }

    async acessarProfile(){
        await this.btnProfile.waitForExist({ timeout: 15000 })
        await this.btnProfile.click()
    };
    async acessarBusca(){
        await this.btnBrowser.waitForExist({ timeout: 15000 })  
        await this.btnBrowser.click()
    }

}

export default new Home();
