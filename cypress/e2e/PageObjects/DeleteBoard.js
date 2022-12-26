class DeleteBoard {

    get configBoard () {
        return cy.get('[data-cy="board-configuration"] > span > div > .vs-c-site-logo')
    }

    get deleteBtn () {
        return cy.get(':nth-child(8) > .vs-c-settings-section > .vs-c-settings-section-form > .vs-c-btn')
    }

    get configBtn () {
        return cy.get('.vs-u-text--right > .el-button--success')
    }

    get ok () {
        return cy.get('.vs-c-modal--features-button > .vs-c-btn')
    }

    deleteBoard () {
        this.configBoard.click()
        this.deleteBtn.click()
        this.configBtn.click()
        this.ok.click()
    }
}

export const deleteBoard = new DeleteBoard ()