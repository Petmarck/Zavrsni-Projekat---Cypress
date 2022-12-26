class AddNewBoard {

    get openOption () {
        return cy.get('.vb-content > div.vs-c-list > .vs-c-list__item > .vs-c-list__btn')
    }

    get addBaord () {
        return cy.get('li:nth-of-type(2) > a')
    }

    get organisation () {
        return cy.get('.el-input__inner')
    }

    get selectOrganisation () {
        return cy.get('.el-scrollbar__view > :nth-child(1)')
    }

    get boardTitle () {
        return cy.get('.vs-input-border > input')
    }

    get next1 () {
        return cy.get('[name="next_btn"]')
    }

    get boardType () {
        return cy.get(':nth-child(1) > .vs-c-radio > .vs-c-radio-check')
    }

    get next2 () {
        return cy.get('[name="next_btn"]')
    }

    get next3 () {
        return cy.get('[name="next_btn"]')
    }

    get next4 () {
        return cy.get('[name="next_btn"]')
    }

    get finish () {
        return cy.get('[name="next_btn"]')
    }

    addBoard (title) {
        this.openOption.click()
        this.addBaord.click()
        this.organisation.click()
        this.selectOrganisation.click()
        this.boardTitle.type(title)
        this.next1.click()
        this.boardType.click()
        this.next2.click()
        this.next3.click()
        this.next4.click()
        this.finish.click()
    }
}

export const addNewBoard = new AddNewBoard ()