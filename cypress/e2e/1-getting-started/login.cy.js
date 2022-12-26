/// <reference types = "cypress" />
import { login } from "../PageObjects/Login"


describe('Login test', () => {

before(' Visit login page', () => {
    cy.visit('/')
})
    it('Login', () => {
        cy.intercept('POST', 'https://cypress-api.vivifyscrum-stage.com/api/v2/login', (req) =>{
    }).as('loginData')
        login.submitBtn.should('have.css', 'background-color', 'rgb(78, 174, 147)')
        login.login('testiranje@test.com', '123454321')
        cy.wait('@loginData').then((request) => {
            expect(request.response.statusCode).to.eql(200)
            expect(request.response.body.user.first_name).to.eql('Petar')
        })


   })
})