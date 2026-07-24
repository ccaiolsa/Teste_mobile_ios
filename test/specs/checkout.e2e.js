import 'dotenv/config'
import { $, expect } from '@wdio/globals'
import product from '../pageobjects/product.page.js'
import login from '../pageobjects/login.page.js'
import home from '../pageobjects/home.page.js'
import cart from '../pageobjects/cart.page.js'
import cadastro from '../pageobjects/cadastro.page.js'

describe('Funcionalidade carrinho', () => {

    it('Deve configurar produto no carrinho', async () => {
        let id = Math.floor(Math.random()*1000)

        // Login na conta
        await home.acessarProfile()
        await login.realizarLogin(process.env.USER_EMAIL, process.env.USER_PASS)

        // Busca do produto
        await home.acessarBusca()
        await browser.pesquisar('In')
        await product.addCart()

        // Configuração do carrinho
        await cart.btnAdd()
        await cart.addAdress()
        await cadastro.submitAddress(`teste${id}`, `${id}1234567`, `Rua ${id}`, `Cidade ${id}`,`Estado ${id}`, `${id}`)
        await cart.btnPay()
        await expect($('android=new UiSelector().resourceId("transactionSuccessfulImage")')).toBeDisplayed()

    })
    
    
        
})