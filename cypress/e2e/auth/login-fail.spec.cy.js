/*
The site plays with you if you try to go directly to signon
 */
import {SignInPage} from "../ui-objects/signIn-page";

describe('failing to sign on', () => {
    beforeEach(() => {
        const mySignInPage = new SignInPage()

        mySignInPage.goToSignInPage()
    })
    it('passes', () => {
        console.log("Hello")
        // cy.visit('')
    })
})