/// <reference types="cypress" />

describe("Pierwszy test", () => {
	it("Logowanie na stronie edukacyjnej LMS", () => {
		cy.visit("https://www.edu.goit.global/account/login");
		cy.get("#user_email")
			.type("user888@gmail.com")
			.should("have.value", "user888@gmail.com");
		cy.get("#user_password").type("1234567890");
		cy.get(".eckniwg2").contains("Log in").click();
		cy.get(".css-7afvtf").click();
		cy.get(":nth-child(9) > .css-bve2vl").contains("Log out").click();
	});
});
