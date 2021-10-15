describe('Pizza Order Application', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const nameInput = () => cy.get('input[id="name-input"]')
    const sizeDropdown = () => cy.get('select')
    const toppingBoxes = () => cy.get('[type="checkbox"]')
    const specialInstructions = () => cy.get('input[name=specialInstructions]')
    const sauce = () => cy.get('[type="radio"]')
    const submitButton = () => cy.get('button[id="order-button"]')

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
        sauce().should('exist')
        submitButton().should('exist')
    })

    describe('Can all inputs can be filled and submitted?', () => {
        it('Inputs with interaction?', () => {
            nameInput()
                .should('have.value', '')
                .type('Pizza Man')
                .should('have.value', 'Pizza Man')
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
                .type('Extra thiccc crust')
                .should('have.value', 'Extra thiccc crust')
            sauce()
                .check('Tomato')
        })

        it('Does submit your order button works?', () => {
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