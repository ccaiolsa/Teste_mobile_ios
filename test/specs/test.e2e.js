import 'dotenv/config'
import { $, expect } from '@wdio/globals'
import home from '../pageobjects/home.page.js'
import login from '../pageobjects/login.page.js'

describe('Funcionalidade login', () => {
    it('Deve realizar login com credenciais corretas', async () => {
        await login.realizarLogin(process.env.USER_EMAIL, process.env.USER_PASS)
        await home.profileTabe.click()

    })
})

