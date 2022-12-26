/// <reference types = "cypress" />
import { addNewBoard } from "../PageObjects/AddBoard"
import { login } from "../PageObjects/Login"
const { faker } = require ("@faker-js/faker")

describe('Add new board test', () => {

    before('Visit login page', () => {
        cy.visit('/')
        login.login('testiranje@test.com', '123454321')

    })

    it('Add new board', () => {
        cy.intercept('POST', 'https://cypress-api.vivifyscrum-stage.com/api/v2/boards', (req) => {
        }).as('createData')
        addNewBoard.addBoard(faker.random.word())
        cy.wait('@createData').then((request) => {
            expect(request.response.statusCode).to.eql(201)
        })
        cy.get('vs-c-col__title vs-c-col__title-backlog').should('have.text', 'Backlog')
        cy.get('vs-c-col__head').should('have.css', 'background-color', 'rgb(254, 87, 35)')
    })
})