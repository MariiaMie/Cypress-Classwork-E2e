/// <reference types="cypress" />

describe("template spec", () => {
	beforeEach(() => {
		cy.visit("http://zero.webappsecurity.com/");
		cy.login("username", "password");
	});

	it("Pay Saved Payee", () => {
		cy.get("#pay_bills_tab > a").click();
		cy.get(".ui-tabs-selected > a").should("have.text", "Pay Saved Payee");
		cy.get("#sp_amount").type("100");
		cy.get("#sp_date").type("2023-04-12");
		cy.get("#sp_amount").click();
		cy.get("#sp_description").type("Czesne");
		cy.get("#pay_saved_payees").click();
		cy.get("#alert_content > span").should(
			"have.text",
			"The payment was successfully submitted."
		);
	});
});
