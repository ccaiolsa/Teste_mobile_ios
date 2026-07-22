import 'dotenv/config'
import { $, expect } from '@wdio/globals'
import home from '../pageobjects/home.page.js'
import login from '../pageobjects/login.page.js'
import cadastro from '../pageobjects/cadastro.page.js'
import profile from '../pageobjects/profile.page.js'

describe('Funcionalidade login', () => {
    it('Deve realizar login com credenciais corretas', async () => {
        await login.realizarLogin(process.env.USER_EMAIL, process.env.USER_PASS)
        await expect(home.btnProfile).toBeDisplayed()

    });
    
    it('Deve cadastrar usuário', async () => {
        let num = Math.floor(Math.random()*1000)

        await profile.cadastro()
        await cadastro.realizarCadastro(`teste`, `${num}`, `${num}-1234`, `teste${num}@qa.com`, process.env.USER_PASS)

        await home.acessarProfile()
        await expect(profile.profileName).toBeDisplayed()



    })
        
})

