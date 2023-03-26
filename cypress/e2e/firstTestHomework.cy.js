/// <reference types="cypress" />

// describe("Pierwszy test", () => {
// 	it("Logowanie na stronie edukacyjnej LMS", () => {
// 		cy.visit("https://www.edu.goit.global/account/login");
// 		cy.get("#user_email")
// 			.type("user888@gmail.com")
// 			.should("have.value", "user888@gmail.com");
// 		cy.get("#user_password").type("1234567890");
// 		cy.get(".eckniwg2").click();
// 		cy.get(".css-7afvtf").click();
// 		cy.get(":nth-child(9) > .css-bve2vl").click();
// 	});
// });

describe("Drugi test", () => {
	it("Drugie logowanie na stronie edukacyjnej LMS", () => {
		cy.visit("https://www.edu.goit.global/account/login");
		cy.get("#user_email")
			.type("testowyqa@qa.team")
			.should("have.value", "testowyqa@qa.team");
		cy.get("#user_password")
			.type("QA!automation-1")
			.should("have.value", "QA!automation-1");
		cy.get(".eckniwg2").click();
		cy.get(".css-7afvtf").click();
		cy.get(":nth-child(7) > .css-bve2vl").click();
	});
});
