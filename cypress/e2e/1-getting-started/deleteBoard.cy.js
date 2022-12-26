/// <reference types = "cypress" />
import { login } from "../PageObjects/Login"
import { addNewBoard } from "../PageObjects/AddBoard"
import { deleteBoard } from "../PageObjects/DeleteBoard"
const { faker } = require ("@faker-js/faker")



describe('Delete board test', () => {

    before('Visit login page', () => {
        cy.visit('/')
        login.login('testiranje@test.com', '123454321')
    })

    it('Delete board', () => {
        addNewBoard.addBoard(faker.random.word())
        cy.intercept('DELETE', 'https://cypress-api.vivifyscrum-stage.com/api/v2/boards/13666', (req) => {
    }).as('deleteData')
        deleteBoard.deleteBoard()
        cy.wait('@deleteData').then((request) => {
            expect(request.response.statusCode).to.eql(200)
        })
    })
})