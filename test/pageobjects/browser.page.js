import {$, $$} from '@wdio/globals'
import product from '../pageobjects/product.page.js'


class Browser{

    get searchBar(){
        return $('android=new UiSelector().resourceId("searchInput")')
    };
    get result(){
        return $$('android=new UiSelector().className(android.view.ViewGroup)')
    }

    async pesquisar(termo){
        await this.searchBar.waitForDisplayed({timeout: 15000 })
        await this.searchBar.setValue(termo)
        await this.result[0].click()
    }

}

export default new Browser();
