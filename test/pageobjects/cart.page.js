import {$} from '@wdio/globals'


class Cart{
    
    get btnAdd(){
        return $('android=new UiSelector().resourceId("addItem")') 
    };
    get btnAdress(){
        return $('android=new UiSelector().resourceId("addNewAddress")')
    };
    get btnPay(){
        return $('android=new UiSelector().resourceId("selectAddressOrContinueToPayment")')
    };
    get checkout(){
        return $('android=new UiSelector().resourceId("completeCheckout")')
    }

    async confCart(){
        await this.btnAdd.waitForDisplayed()
        await this.btnAdd.click()
    }
    async addAdress(){
        await this.btnAdress.waitForDisplayed()
        await this.btnAdress.click()
    }
    async pagamento(){
        await this.btnPay.waitForDisplayed()
        await this.btnPay.click()

        await this.checkout.waitForDisplayed()
        await this.checkout.click()

    }



}

export default new Cart();
