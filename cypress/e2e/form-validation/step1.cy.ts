describe('Form Validation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display validation messages for empty required fields', () => {
    // Attempt to go to the next step without filling out the form
    cy.get('button').contains('Next').click();

    // Check for validation messages
    cy.get('input[name="firstName"]').then(($input) => {
      cy.wrap($input).siblings('.error-message').should('contain', 'First name is required');
    });
    cy.get('input[name="lastName"]').then(($input) => {
      cy.wrap($input).siblings('.error-message').should('contain', 'Last name is required');
    });
    cy.get('input[name="dob"]').then(($input) => {
      cy.wrap($input).siblings('.error-message').should('contain', 'Date of birth is not valid');
    });
    cy.get('input[name="email"]').then(($input) => {
      cy.wrap($input).siblings('.error-message').should('contain', 'Email is required');
    });
    cy.get('input[name="mobile"]').then(($input) => {
      cy.wrap($input).siblings('.error-message').should('contain', 'Mobile is required');
    });
    cy.get('input[name="address"]').then(($input) => {
      cy.wrap($input).siblings('.error-message').should('contain', 'Address is required');
    });
    cy.get('input[name="empName"]').then(($select) => {
      cy.wrap($select).siblings('.error-message').should('contain', 'Employer name is required');
    });
    cy.get('input[name="income"]').then(($input) => {
      cy.wrap($input).siblings('.error-message').should('contain', 'Income is required');
    });
  });

  it('should display validation messages for invalid values step 1', () => {
 
    cy.get('input[name="firstName"]').type('John');
    cy.get('input[name="lastName"]').type('Doe');
    cy.get('input[name="dob"]').type('1990-01-01');
    cy.get('input[name="address"]').type('123 Main St');
    cy.get('select[name="empStatus"]').select('Employed');
    cy.get('input[name="empName"]').type('VVV');

    cy.get('input[name="email"]').type('invalid-email');
    cy.get('input[name="mobile"]').type('my number');
    cy.get('input[name="income"]').type('-50000');

    cy.get('button').contains('Next').click(); 

    cy.get('input[name="email"]').then(($input) => {
      cy.wrap($input).siblings('.error-message').should('contain', 'Email is not valid');
    });
    cy.get('input[name="mobile"]').then(($input) => {
      cy.wrap($input).siblings('.error-message').should('contain', 'Mobile is not valid');
    });
    cy.get('input[name="income"]').then(($input) => {
      cy.wrap($input).siblings('.error-message').should('contain', 'Income is required');
    });
  });

  it('should not display validation messages after correct input', ()=>{
    // fill spep 1 with valid values
    cy.get('input[name="firstName"]').type('John');
    cy.get('input[name="lastName"]').type('Doe');
    cy.get('input[name="dob"]').type('1990-01-01');
    cy.get('input[name="email"]').type('myemail@email.com');
    cy.get('input[name="mobile"]').type('1234567890');
    cy.get('input[name="address"]').type('123 Main St');
    cy.get('select[name="empStatus"]').select('Self-Employed');
    cy.get('input[name="income"]').type('50000');

    cy.get('input[name="empName"]').should('not.exist');

    cy.get('button').contains('Next').click();

    cy.get('.error-message').should('not.exist');
  })
  
});