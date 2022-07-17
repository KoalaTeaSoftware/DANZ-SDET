import {HomePage} from "./home-page";

export class SignInPage{
    myHomePage = new HomePage();

    goToSignInPage(){
        /*
        The web site does not like you to go directly ther, but it will let you go there from the home page
         */
        this.myHomePage.goToHome();
        // find the sign-in link
        cy.contains("Sign in")
        // click it
        .click()
        // and you get there
        cy.get('h1').should('contain', 'SIGN IN')
    }
}