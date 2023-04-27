import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import NavigationTabComponent from "../page-components/navigation-tab-component";
import PayBillsTab from "../page-components/pay-bills-tab-component";
import AddNewPayeePage from "../pages/add-new-payee-page";
import PaySavedPayee from "../pages/pay-saved-payee-page";

const paySavedPayee = new PaySavedPayee();
const navigationTabComponent = new NavigationTabComponent();
const addNewPayee = new AddNewPayeePage();
const payBillsTab = new PayBillsTab();

Given(`I'm logged in to application`, () => {
	cy.visit("http://zero.webappsecurity.com/");
	cy.login("username", "password");
});

Given(`I navigate to Pay Bills tab`, () => {
	navigationTabComponent.getPayBillsTab().click();
	payBillsTab.getActiveTab().should("have.text", "Pay Saved Payee");
	cy.log('"Pay Saved Payee" tab is displayed.');
});

When(`I populate all fields in form`, () => {
	paySavedPayee.getAmountInput().type("100");
	paySavedPayee.getDataInput().type("2023-03-08");
	paySavedPayee.getAmountInput().click(); // Workaround to remove focus from calendar after typing
	paySavedPayee.getDescriotionInput().type("Czesne");
	cy.log("All fields were populated with data.");
});

When(`I click Pay button`, () => {
	paySavedPayee.getPayButton().click();
});

Then(`I see confirmation message: Payment was confirmred succesfully.`, () => {
	paySavedPayee
		.getConfirmationMessage()
		.should("have.text", "The payment was successfully submitted.");
	cy.log("Payment was confirmred succesfully.");
});
