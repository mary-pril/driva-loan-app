// cypress/e2e/formNavigation.cy.ts

describe('Form Navigation', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should navigate through the form steps', () => {
      // Step 1: Personal details
      cy.get('input[name="firstName"]').type('John');
      cy.get('input[name="lastName"]').type('Doe');
      cy.get('input[name="dob"]').type('1990-01-01');
      cy.get('input[name="email"]').type('john.doe@example.com');
      cy.get('input[name="mobile"]').type('1234567890');
      cy.get('input[name="address"]').type('123 Main St');
      cy.get('select[name="empStatus"]').select('Unemployed');
      cy.get('input[name="income"]').type('50000');
      cy.get('button').contains('Next').click();
  
      // Step 2: Loan details
      cy.url().should('include', '/step2');
      cy.get('input[name="price"]').type('25000');
      cy.get('input[name="depositAmount"]').type('5000');
      cy.get('input[name="loanTerm"]').type('1');
      cy.get('button').contains('Submit').click();
  
      // Step 3: Loan summary
      cy.url().should('include', '/summary');
      cy.contains('Step 3: Summary of loan details').should('be.visible');
    });

    it('Navigate to error page', () => {
        cy.intercept('POST', '/api/loan', {
            statusCode: 500,
            body: { message: 'something wrong' },
        }).as('postSubmit');

      // Step 1: Personal details
      cy.get('input[name="firstName"]').type('John');
      cy.get('input[name="lastName"]').type('Doe');
      cy.get('input[name="dob"]').type('1990-01-01');
      cy.get('input[name="email"]').type('john.doe@example.com');
      cy.get('input[name="mobile"]').type('1234567890');
      cy.get('input[name="address"]').type('123 Main St');
      cy.get('select[name="empStatus"]').select('Unemployed');
      cy.get('input[name="income"]').type('50000');
      cy.get('button').contains('Next').click();
  
      // Step 2: Loan details
      cy.url().should('include', '/step2');
      cy.get('input[name="price"]').type('25000');
      cy.get('input[name="depositAmount"]').type('5000');
      cy.get('input[name="loanTerm"]').type('1');
      cy.get('button').contains('Submit').click();

      //Error
      cy.url().should('include', '/error');
      cy.contains('Oops, something goes wrong').should('be.visible');

      //Go back
      cy.get('button').contains('Go Back').click();
      cy.url().should('include', '/step2');
    });
     
    it('should display error page for unknown routes', () => {
        cy.request({url: '/unknown-route', failOnStatusCode: false}).its('status').should('equal', 404);
    });
  });