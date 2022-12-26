class Login {

    get emailInput () {
        return cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner')
    }

    get passwordInput () {
        return cy.get('[type="password"]')
    }
    get submitBtn () {
        return cy.get('.vs-u-text--left > .vs-c-btn')
    }

    login (email, password) {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.submitBtn.click()
    }
}

export const login = new Login ()