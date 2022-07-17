import {HomePage} from "./ui-objects/home-page";

describe('the home page', ()=>{
    const myHomePage = new HomePage()

    it('should be able to get the home page', ()=>{
        myHomePage.goToHome();

        // cy.get('.app').should('exist')
    })
})