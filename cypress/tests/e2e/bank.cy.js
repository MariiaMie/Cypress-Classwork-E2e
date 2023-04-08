/// <reference types="cypress" />

import MainMenuComponent from "../../page-components/main-menu-components";
import PayBillsTabComponent from "../../page-components/pay-bills-tabs-component";
import AddNewPayeePage from "../../pages/add-new-payee";
import PaySavedPayee from "../../pages/pay-saved-payee-page";

describe("Pay Bills Test", () => {
	let mainMenuComponent;
	let payBillsTabComponent;
	let paySavedPayee;
	let addNewPayee;

	before(() => {
		mainMenuComponent = new MainMenuComponent();
		payBillsTabComponent = new PayBillsTabComponent();
		paySavedPayee = new PaySavedPayee();
		addNewPayee = new AddNewPayeePage();
	});

	beforeEach(() => {
		cy.visit("http://zero.webappsecurity.com/");
		cy.login("username", "password");
		mainMenuComponent.getPayBillsTab().click();
	});

	it("Make succesfull payment to Saved Payee", () => {
		// Step 1
		payBillsTabComponent
			.getCurrentTab()
			.should("have.text", "Pay Saved Payee");
		cy.log("Verify that Pay Saved Payee tab is active");
		// Step 2
		paySavedPayee.getAmountInput().type("100");
		paySavedPayee.getDataInput().type("2023-04-12");
		paySavedPayee.getAmountInput().click();
		paySavedPayee.getDescriotionInput().type("Czesne");
		cy.log("Populate all the fields");
		// Step 3
		paySavedPayee.getPayButton().click();
		paySavedPayee
			.getConfirmationMessage()
			.should("have.text", "The payment was successfully submitted.");
		cy.log("Confirm payment and verify confirmation massege");

		// cy.get("#sp_amount").type("100");
		// cy.get("#sp_date").type("2023-04-12");
		// cy.get("#sp_amount").click();
		// cy.get("#sp_description").type("Czesne");
		// cy.get("#pay_saved_payees").click();
		// cy.get("#alert_content > span").should(
		// 	"have.text",
		// 	"The payment was successfully submitted."
		// );
	});

	it("Add new payee and verify confirmation message", () => {
		// Step 1
		payBillsTabComponent.getAddNewPayeeTab().click();
		payBillsTabComponent
			.getCurrentTab()
			.should("have.text", "Add New Payee");
		cy.log("Navigate to Add New Payment tab");
		// Step 2
		addNewPayee.getPayeeNameInput().type("John");
		addNewPayee.getPayeeAdressInput().type("23234 Boston, Main Aveniue 2");
		addNewPayee.getAccoutInput().type("1234 343343 4343434 343434");
		addNewPayee.getPayeeDetails().type("no data");
		cy.log("Filling all");
		// Step 3
		addNewPayee.getAddButton().click();
		addNewPayee
			.getConfirmationMessage()
			.should(
				"have.text",
				"The new payee John was successfully created."
			);
		cy.log("Confirm payment and verify confirmation massege");
	});
});
