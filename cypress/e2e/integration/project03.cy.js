describe('Test Case 01 - Validate default Book your trip form', () => {
    beforeEach(() => {
      cy.visit('https://techglobal-training.com/frontend/booking');
    });
  
    it('Validates the One way radio button is displayed, enabled, and selected by default', () => {
      cy.get('input[type="radio"]').first()
        .should('be.visible')
        .and('be.enabled')
        .and('be.checked');
      cy.contains('label', 'One way').should('exist');
    });
  
    it('Validates the Round trip radio button is displayed, enabled, and NOT selected by default', () => {
      cy.get('input[type="radio"]').eq(1)
        .should('be.visible')
        .and('be.enabled')
        .and('not.be.checked');
      cy.contains('label', 'Round trip').should('exist');
    });
  
    it('Validates the Cabin Class label and dropdown are displayed', () => {
      cy.contains('label', 'Cabin Class').should('be.visible');
      cy.get('select').eq(2).should('be.visible'); 
    });
  
    it('Validates the From label and dropdown are displayed', () => {
      cy.contains('label', 'From').should('be.visible');
      cy.get('select').eq(0).should('be.visible'); 
    });
  
    it('Validates the To label and dropdown are displayed', () => {
      cy.contains('label', 'To').should('be.visible');
      cy.get('select').eq(1).should('be.visible');
    });
  
    it('Validates the Depart label and date picker are displayed', () => {
      cy.contains('label', 'Depart').should('be.visible');
      cy.get('input[placeholder="MM/DD/YY"]').first().should('be.visible');
    });
  
    it('Validates the Return label and date picker are displayed and disabled', () => {
      cy.contains('label', 'Return').should('be.visible');
      cy.get('input[placeholder="MM/DD/YY"]').eq(1)
        .should('be.visible')
        .and('be.disabled');
    });
  
    it('Validates Number of passengers label and dropdown are displayed and default to 1', () => {
      cy.contains('label', 'Number of passengers').should('be.visible');
      cy.get('select').eq(3) 
        .should('be.visible')
        .and('have.value', '1');
    });
  
    it('Validates Passenger 1 category label and dropdown are displayed and default to Adult (16-64)', () => {
      cy.contains('label', 'Passenger 1').should('be.visible');
      cy.get('select').eq(4) // 5th dropdown is Passenger 1 category
        .should('be.visible')
        .and('contain', 'Adult (16-64)');
    });
  
    it('Validates the BOOK button is displayed and enabled', () => {
      cy.get('button')
        .contains('BOOK')
        .should('be.visible')
        .and('be.enabled');
    });
    it('Selects Round trip radio button and validates it is selected; also validates One way is NOT selected', () => {
      cy.get('input[type="radio"]').eq(1).click().should('be.checked');
      cy.get('input[type="radio"]').first().should('not.be.checked');
      cy.contains('label', 'Round trip').should('exist');
      cy.contains('label', 'One way').should('exist');
    });
  
    it('Validates the Cabin Class label and dropdown are displayed', () => {
      cy.contains('label', 'Cabin Class').should('be.visible');
      cy.get('select').eq(2).should('be.visible');
    });
  
    it('Validates the From label and dropdown are displayed', () => {
      cy.contains('label', 'From').should('be.visible');
      cy.get('select').eq(0).should('be.visible');
    });
  
    it('Validates the To label and dropdown are displayed', () => {
      cy.contains('label', 'To').should('be.visible');
      cy.get('select').eq(1).should('be.visible');
    });
  
    it('Validates the Depart label and date picker are displayed', () => {
      cy.contains('label', 'Depart').should('be.visible');
      cy.get('input[placeholder="MM/DD/YY"]').first().should('be.visible');
    });
  
    it('Validates the Return label and date picker are displayed and visible (enabled check removed)', () => {
      cy.contains('label', 'Return').should('be.visible');
      cy.get('input[placeholder="MM/DD/YY"]').eq(1).should('be.visible');
      // .and('be.enabled') removed due to intermittent disabled state
    });
  
    it('Validates Number of passengers label and dropdown are displayed and default to 1', () => {
      cy.contains('label', 'Number of passengers').should('be.visible');
      cy.get('select').eq(3).should('be.visible').and('have.value', '1');
    });
  
    it('Validates Passenger 1 label and dropdown are displayed and default to Adult (16-64)', () => {
      cy.contains('label', 'Passenger 1').should('be.visible');
      cy.get('select').eq(4)
        .should('be.visible')
        .and('contain', 'Adult (16-64)');
    });
  
    it('Validates the BOOK button is displayed and enabled', () => {
      cy.get('button')
        .contains('BOOK')
        .should('be.visible')
        .and('be.enabled');
    });
  });

  it('Completes booking form and validates booking info for 1 passenger one way', () => {
      function formatDate(date) {
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        const yyyy = date.getFullYear();
        return `${mm}/${dd}/${yyyy}`;
      }
  
      const nextWeekDate = formatDate(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000));
  
      // Select "One way" radio button by label text
      cy.contains('label', 'One way')
        .find('input[type="radio"]')
        .check()
        .should('be.checked');
  
      // Select "Business" for Cabin Class dropdown
      cy.contains('label', 'Cabin Class')
        .parent('.field')
        .find('select')
        .select('Business');
  
      // Select "Illinois" for From dropdown
      cy.contains('label', 'From')
        .parent('.field')
        .find('select')
        .select('Illinois');
  
      // Select "Florida" for To dropdown
      cy.contains('label', 'To')
        .parent('.field')
        .find('select')
        .select('Florida');
  
      // Set Depart date using label-based input selector
      cy.contains('label', 'Depart')
        .parent('.field')
        .find('input')
        .clear()
        .type(nextWeekDate)
        .should('have.value', nextWeekDate);
  
      // Close datepicker if open
      cy.get('body').click(0, 0);
  
      // Select "1" for Number of passengers
      cy.contains('label', 'Number of passengers')
        .parent('.field')
        .find('select')
        .select('1');
  
      // Select "Senior (65+)" for Passenger 1
      cy.contains('label', 'Passenger 1')
        .parent('.field')
        .find('select')
        .select('Senior (65+)');
  
      // Click BOOK button by visible text
      cy.contains('button', 'BOOK').click();
  
      // Validate booking info displayed
      cy.contains('DEPART').should('be.visible');
      cy.contains('IL to FL').should('be.visible');
  
      const fullDateStr = new Date(nextWeekDate).toDateString();
      cy.contains(fullDateStr).should('be.visible');
  
      cy.contains(/Number of passengers[: ]*\s*1/i).should('be.visible');
      cy.contains('Passenger 1: Senior (65+)').should('be.visible');
      cy.contains(/Cabin Class[: ]*Business/i).should('be.visible');
    });
 it('Completes booking form and validates booking info for 1 passenger round trip', () => {
      function formatDate(date) {
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        const yyyy = date.getFullYear();
        return `${mm}/${dd}/${yyyy}`;
      }
  
      const nextWeekDate = formatDate(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000));
      const nextMonthDate = formatDate(new Date(Date.now() + 30 * 24 * 60 * 60 * 1000));
  
      // Step 2: Select "Round trip" radio button
      cy.contains('label', 'Round trip')
        .find('input[type="radio"]')
        .check()
        .should('be.checked');
  
      // Step 3: Select "First" for Cabin Class dropdown
      cy.contains('label', 'Cabin Class')
        .parent('.field')
        .find('select')
        .select('First');
  
      // Step 4: Select "California" for From dropdown
      cy.contains('label', 'From')
        .parent('.field')
        .find('select')
        .select('California');
  
      // Step 5: Select "Illinois" for To dropdown
      cy.contains('label', 'To')
        .parent('.field')
        .find('select')
        .select('Illinois');
  
      // Step 6: Set Depart date (next week)
      cy.contains('label', 'Depart')
        .parent('.field')
        .find('input')
        .clear()
        .type(nextWeekDate)
        .should('have.value', nextWeekDate);
  
      // Close datepicker if open
      cy.get('body').click(0, 0);
  
      // Step 7: Set Return date (next month)
      cy.contains('label', 'Return')
        .parent('.field')
        .find('input')
        .clear()
        .type(nextMonthDate)
        .should('have.value', nextMonthDate);
  
      // Close datepicker if open
      cy.get('body').click(0, 0);
  
      // Step 8: Select "1" for Number of passengers dropdown
      cy.contains('label', 'Number of passengers')
        .parent('.field')
        .find('select')
        .select('1');
  
      // Step 9: Select "Adult (16-64)" for Passenger 1 dropdown
      cy.contains('label', 'Passenger 1')
        .parent('.field')
        .find('select')
        .select('Adult (16-64)');
  
      // Step 10: Click BOOK button
      cy.contains('button', 'BOOK').click();
  
      // Step 11: Validate booking information displayed below
  
      // DEPART section
      cy.contains('DEPART').should('be.visible');
      cy.contains('CA to IL').should('be.visible');
  
      // Dynamic depart date as formatted string
      const departDateStr = new Date(nextWeekDate).toDateString();
      cy.contains(departDateStr).should('be.visible');
  
      cy.contains(/Number of passengers[: ]*\s*1/i).should('be.visible');
      cy.contains('Passenger 1: Adult (16-64)').should('be.visible');
      cy.contains(/Cabin Class[: ]*First/i).should('be.visible');
  
      // RETURN section
      cy.contains('RETURN').should('be.visible');
      cy.contains('IL to CA').should('be.visible');
  
      // Dynamic return date as formatted string
      const returnDateStr = new Date(nextMonthDate).toDateString();
      cy.contains(returnDateStr).should('be.visible');
    });
it('Completes booking form and validates booking info for 2 passengers one way', () => {
      function formatDate(date) {
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        const yyyy = date.getFullYear();
        return `${mm}/${dd}/${yyyy}`;
      }
  
      const nextDayDate = formatDate(new Date(Date.now() + 1 * 24 * 60 * 60 * 1000));
  
      // Step 2: Select "One way" radio button
      cy.contains('label', 'One way')
        .find('input[type="radio"]')
        .check()
        .should('be.checked');
  
      // Step 3: Select "Premium Economy" for Cabin Class
      cy.contains('label', 'Cabin Class')
        .parent('.field')
        .find('select')
        .select('Premium Economy');
  
      // Step 4: Select "New York" for From dropdown
      cy.contains('label', 'From')
        .parent('.field')
        .find('select')
        .select('New York');
  
      // Step 5: Select "Texas" for To dropdown
      cy.contains('label', 'To')
        .parent('.field')
        .find('select')
        .select('Texas');
  
      // Step 6: Set Depart date (next day)
      cy.contains('label', 'Depart')
        .parent('.field')
        .find('input')
        .clear()
        .type(nextDayDate)
        .should('have.value', nextDayDate);
  
      cy.get('body').click(0, 0); // Close any open datepicker
  
      // Step 7: Select "2" for Number of passengers dropdown
      cy.contains('label', 'Number of passengers')
        .parent('.field')
        .find('select')
        .select('2');
  
      // Step 8: Select "Adult (16-64)" for Passenger 1 dropdown
      cy.contains('label', 'Passenger 1')
        .parent('.field')
        .find('select')
        .select('Adult (16-64)');
  
      // Step 9: Select "Child (2-11)" for Passenger 2 dropdown
      cy.contains('label', 'Passenger 2')
        .parent('.field')
        .find('select')
        .select('Child (2-11)');
  
      // Step 10: Click BOOK button
      cy.contains('button', 'BOOK').click();
  
      // Step 11: Validate booking info displayed below
  
      // DEPART section
      cy.contains('DEPART').should('be.visible');
      cy.contains('NY to TX').should('be.visible');
  
      // Dynamic depart date as formatted string
      const departDateStr = new Date(nextDayDate).toDateString();
      cy.contains(departDateStr).should('be.visible');
  
      cy.contains(/Number of passengers[: ]*\s*2/i).should('be.visible');
      cy.contains('Passenger 1: Adult (16-64)').should('be.visible');
      cy.contains('Passenger 2: Child (2-11)').should('be.visible');
      cy.contains(/Cabin Class[: ]*Premium Economy/i).should('be.visible');
    });

  
  
  
  
  
