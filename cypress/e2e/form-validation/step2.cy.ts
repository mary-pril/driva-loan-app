
function fillInStep1(){
    cy.get('input[name="firstName"]').type('John');
    cy.get('input[name="lastName"]').type('Doe');
    cy.get('input[name="dob"]').type('1990-01-01');
    cy.get('input[name="email"]').type('myemail@email.com');
    cy.get('input[name="mobile"]').type('1234567890');
    cy.get('input[name="address"]').type('123 Main St');
    cy.get('select[name="empStatus"]').select('Self-Employed');
    cy.get('input[name="income"]').type('50000');  
    cy.get('button').contains('Next').click();
}

describe('Form Validation', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('should display validation messages for empty required fields', () => {
      fillInStep1();
      cy.get('button').contains('Submit').click();
  
      // Check for validation messages
      cy.get('select[name="loanPurpose"]').then(($input) => {
        cy.wrap($input).siblings('.error-message').should("not.exist");
      });
      cy.get('input[name="price"]').then(($input) => {
        cy.wrap($input).siblings('.error-message').should("not.exist");
        cy.wrap($input).should('have.value', '2000')
      });

      cy.get('input[name="depositAmount"]').then(($input) => {
        cy.wrap($input).siblings('.error-message').should('contain', 'Deposit amount is required');
      });
      cy.get('input[name="loanTerm"]').then(($input) => {
        cy.wrap($input).siblings('.error-message').should('contain', 'Loan term is required');
      });
     
    });
  
    it('should display validation messages for invalid values', () => {
   
        fillInStep1();
        cy.get('input[name="price"]').clear().type('100');
        cy.get('input[name="depositAmount"]').clear().type('100');
        cy.get('input[name="loanTerm"]').clear().type('100');

        cy.get('button').contains('Submit').click();
  
      cy.get('input[name="price"]').then(($input) => {
        cy.wrap($input).siblings('.error-message').should('contain', 'Price is required to be minimum 2000');
      });
      cy.get('input[name="depositAmount"]').then(($input) => {
        cy.wrap($input).siblings('.error-message').should('contain', 'Deposit should be should not exceed price');
      });
      cy.get('input[name="loanTerm"]').then(($input) => {
        cy.wrap($input).siblings('.error-message').should('contain', 'Maximum 7 years');
      });
    });

    it('should display validation messages for deposit less than 2000 from price', () => {
   
        fillInStep1();
        cy.get('input[name="price"]').clear().type('3000');
        cy.get('input[name="depositAmount"]').clear().type('2000');
        cy.get('input[name="loanTerm"]').clear().type('1');

        cy.get('button').contains('Submit').click();
  
        cy.get('input[name="price"]').siblings('.error-message').should("not.exist");

        cy.get('input[name="depositAmount"]').siblings('.error-message').should('contain', 'Deposit amount should be at least 2000$ less than price');
      
        cy.get('input[name="loanTerm"]').siblings('.error-message').should("not.exist");

    });
  
    it('should not display validation messages after correct input', ()=>{
        fillInStep1();
        cy.get('input[name="price"]').clear().type('3001');
        cy.get('input[name="depositAmount"]').clear().type('1000');
        cy.get('input[name="loanTerm"]').clear().type('1');

        cy.get('button').contains('Submit').click();
  
        cy.get('.error-message').should('not.exist');
    })
    
  });