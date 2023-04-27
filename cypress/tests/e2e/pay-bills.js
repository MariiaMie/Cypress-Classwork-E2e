import { Given } from "@badeball/cypress-cucumber-preprocessor";
import MainMenuComponent from "../../page-components/main-menu-components";
import PayBillsTabComponent from "../../page-components/pay-bills-tabs-component";
import AddNewPayeePage from "../../pages/add-new-payee";
import PaySavedPayee from "../../pages/pay-saved-payee-page";

const mainMenuComponent = new MainMenuComponent();
const payBillsTabComponent = new PayBillsTabComponent();
const paySavedPayee = new PaySavedPayee();
const addNewPayee = new AddNewPayeePage();

Given(`I'm logging to application`, () => {
	cy.visit("http://zero.webappsecurity.com/");
	cy.login("username", "password");
});

Given(`I navigate to Pay Bills tab`, () => {
	payBillsTabComponent.getCurrentTab().should("have.text", "Pay Saved Payee");
	cy.log("Verify that Pay Saved Payee tab is active");
});
