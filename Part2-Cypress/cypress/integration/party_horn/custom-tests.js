describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('50');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(50);
    });
  });

  it('Test Slider if changed to 33', () => {
    cy.get('#volume-number').clear();
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(($num) => {
      expect($num).to.have.value(33);
    });
  });

  it('Test audio to see if set to 33', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(($num) => {
      expect($num).to.have.prop('volume', 0.33);
    });
  });

  // Test if the image and sound sources change when you select the party horn radio button

  it('Test if image/source change on click for party', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#horn-sound')
      .should('have.attr', 'src')
      .should('contains', 'party-horn.mp3');
    cy.get('#sound-image')
      .should('have.attr', 'src')
      .should('contains', 'party-horn.svg');
  });

  it('Test if image/source change on click for car', () => {
    cy.get('#radio-car-horn').check();
    cy.get('#sound-image')
      .should('have.attr', 'src')
      .should('contains', 'car.svg');
    cy.get('#horn-sound')
      .should('have.attr', 'src')
      .should('contains', 'car-horn.mp3');
  });

  it('Test if image/source change on click for air', () => {
    cy.get('#radio-air-horn').check();
    cy.get('#sound-image')
      .should('have.attr', 'src')
      .should('contains', 'air-horn.svg');
    cy.get('#horn-sound')
      .should('have.attr', 'src')
      .should('contains', 'air-horn.mp3');
  });

  //Test if the volume image changes when increasing volumes (you must test for all 3 cases)

  it('Check volume when volume 0', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image')
      .should('have.attr', 'src')
      .should('contains', 'volume-level-0.svg');
  });

  it('Check volume when volume above 0 and below 33', () => {
    cy.get('#volume-number').clear().type('15');
    cy.get('#volume-image')
      .should('have.attr', 'src')
      .should('contains', 'volume-level-1.svg');
  });

  it('Check volume when volume above 34 and below 65', () => {
    cy.get('#volume-number').clear().type('40');
    cy.get('#volume-image')
      .should('have.attr', 'src')
      .should('contains', 'volume-level-2.svg');
  });

  it('Check volume when volume above 66 and below 100', () => {
    cy.get('#volume-number').clear().type('69');
    cy.get('#volume-image')
      .should('have.attr', 'src')
      .should('contains', 'volume-level-3.svg');
  });

  //Test if the honk button is disabled when the textbox input is a empty or a non-number

  it('Test honk button if disabled', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').should('be.disabled');
  });

  it('Test button if given non number', () => {
    cy.get('#volume-number').clear().type('zxvdsaselgkjaselkgj');
    cy.get('#honk-btn').should('be.disabled');
  });

  // Test if an error is shown when you type a number outside of the given range for the volume textbox input 
  it('Test out of bounds', () => {
    cy.get('#volume-number').clear().type('9001');
    cy.get('input:invalid').should('have.length', 1);
  });
});

