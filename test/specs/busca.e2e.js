import 'dotenv/config'
import { $, expect } from '@wdio/globals'
import home from '../pageobjects/home.page.js'
import browser from '../pageobjects/browser.page.js'
import product from '../pageobjects/product.page.js'


describe('Funcionalidade busca', () => {

    it('Deve buscar um produto pela barra de pesquisa', async () => {
        await home.acessarBusca()
        await browser.pesquisar('In')
        await expect($(product.name)).toBeDisplayed()
        
    })
    
    
        
})

