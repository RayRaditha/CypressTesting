describe("Open URL", () => {
  it("Open the URL", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
  });
});

describe("Search for query", () => {
  it('finds the content "login"', () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.contains("login");
  });
});

describe("Click element", () => {
  it('clicks the button "submit"', () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.contains("Submit").click();
  });
});

describe("E2E Login", () => {
  it("input valid username dan password then Submit data", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.get("#username").type("student");
    cy.get("#password").type("Password123");
    cy.contains("Submit").click();
  });
});

describe("Assertion", () => {
  it('clicking "submit" navigates to a new url', () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.get("#username").type("student");
    cy.get("#password").type("Password123");
    cy.contains("Submit").click();
    // Should be on a new URL which includes 'practicetestautomation.com/logged-in-successfully/'
    cy.url().should(
      "include",
      "practicetestautomation.com/logged-in-successfully/"
    );
  });
});

describe("Click Element Logout", () => {
  it('clicks the button "Log out"', () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.get("#username").type("student");
    cy.get("#password").type("Password123");
    cy.contains("Submit").click();
    cy.contains("Log out").click();
  });
});
