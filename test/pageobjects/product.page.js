import { $ } from '@wdio/globals'


class Product {

    get name() {
        return $('android=new UiSelector().text("Handmade Aluminum Gloves")')
    };

    get btnCart() {
        return $('android=new UiSelector().resourceId("addToCart")')
    }
    async addCart() {
        await this.btnCart.waitForDisplayed()
        await this.btnCart.click()
    };


}

export default new Product();
