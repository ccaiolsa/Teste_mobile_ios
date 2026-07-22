import {$} from '@wdio/globals'


class Home{

    get btnProfile () {
        return $('android=new UiSelector().resourceId("tab-profile")');
    }

    async acessarProfile(){
        await this.btnProfile.waitForDisplayed({ timeout: 15000 })
        await this.btnProfile.click()
    }

}

export default new Home();
