describe('Pizza Order Application', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const nameInput = () => cy.get('input[id="name-input"]')
    const sizeDropdown = () => cy.get('select')
    const toppingBoxes = () => cy.get('[type="checkbox"]')
    const specialInstructions = () => cy.get('input[name=specialInstructions]')
    const submitButton = () => cy.get('button[id="order-button"]')
    const sauce = () => cy.get('[type="radio"]')

    it('Sanity test', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })

    it('Elements are showing?', () => {
        nameInput().should('exist')
        sizeDropdown().should('exist')
        toppingBoxes().should('exist')
        specialInstructions().should('exist')
        submitButton().should('exist')
        sauce().should('exist')
    })

    describe('Inputs can be filled and submitted?', () => {
        it('Inputs with interaction?', () => {
            nameInput()
                .should('have.value', '')
                .type('Hughes')
                .should('have.value', 'Hughes')
            sizeDropdown()
                .should('have.value', '')
                .select('Small')
                .select('Medium')
                .select('Large')
                .select('Extra Large')
            toppingBoxes()
                .check()
            specialInstructions()
                .should('have.value', '')
                .type('Extra crispy crust')
                .should('have.value', 'Extra crispy crust')
            sauce()
                .check('BBQ')
        })

        it('Add to Order button works?', () => {
            nameInput()
                .type('Hughes')
            sizeDropdown()
                .select('Large')
            toppingBoxes()
                .check()
            specialInstructions()
                .type('Extra crispy crust')
            sauce()
                .check('GR')
            submitButton()
                .click()
        })
    })

})