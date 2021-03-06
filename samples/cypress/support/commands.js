// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { registerCommand } = require("cypress-get-by-label");
registerCommand();

Cypress.Commands.add("getCardByText", (text) => {
  const selector = 'div.card-body'
  cy.contains(selector, text)
});

Cypress.Commands.add("openReservationPlan", (planName) => {
  const buttonText = "このプランで予約"
  cy
    .getCardByText(planName)
    .contains(buttonText)
    .invoke("removeAttr", "target")
    .click()
})

Cypress.Commands.add("fill", { prevSubject: 'element' }, (subject, text) => {
  cy.wrap(subject).clear()
  cy.wrap(subject).type(text)
})
