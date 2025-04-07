import Login from "cypress\support\pages\login.js";



describe('End to end ecommerce testing', () => {
    beforeEach('', () => {
        const url = "https://www.saucedemo.com/"
        cy.visit(url)
    });
    it('End to end product buying', () => {
        const loginPage= new Login()
        loginPage.login()
    });
});