describe("Car API testing", () => {
	it("GET car list", () => {
		// Step 1
		cy.request({
			method: "GET",
			url: "http://localhost:8080/cars",
		}).as("details");
		cy.log("Request was sent");

		// Step 2
		cy.get("@details").its("status").should("eq", 200);
		cy.get("@details").its("body").should("not.be.empty");
		cy.log("Request status is correct and response body in not empty");

		// Debug
		cy.get("@details").then((response) => {
			cy.log("Response was: " + JSON.stringify(response.body));
		});
	});

	it("POST add new car: Kia Creed", () => {
		// Step 1
		cy.request({
			method: "POST",
			url: "http://localhost:8080/cars",
			body: {
				manufacturer: "Kia",
				model: "Creed",
			},
		}).as("details");
		cy.log("Request was sent");

		// Step 2
		cy.get("@details").its("status").should("eq", 200);
		cy.get("@details").its("body").should("not.be.empty");
		cy.log("Request status is correct and response body in not empty");

		// Step 3
		cy.get("@details").then((response) => {
			cy.wrap(JSON.stringify(response.body))
				.should("include", "Kia")
				.should("include", "Ceed");
		});
	});

	it.only("DELETE newly added car", () => {
		// Set-up
		cy.request({
			method: "POST",
			url: "http://localhost:8080/cars",
			body: {
				manufacturer: "Tesla",
				model: "Model 5 ",
			},
		}).as("testData");
		cy.get("@testData").its("status").should("eq", 200);
		cy.get("@testData").then((response) => {
			const carId = response.body.length;
			cy.log("Cat was created with id = " + carId);
			Cypress.env("carId", carId);
		});
		cy.log("Test data created correctly");

		// Step 1

		cy.then(() => {
			const carId = Cypress.env("carId");
			cy.request({
				method: "DELETE",
				url: `http://localhost:8080/cars/${carId}`,
			}).as("details");
			cy.get("@details").its("status").should("eq", 200);
		});

		// Step 2

		cy.get("@details").then((response) => {
			cy.wrap(JSON.stringify(response.body))
				.should("not.include", "Tesla")
				.should("not.include", "Model 5");
		});
	});
});
