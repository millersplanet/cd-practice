describe("template spec", () => {
  beforeEach(() => {
    cy.visit("https://cd-practice-steel.vercel.app");
  });

  it('should contain "App Router" text', () => {
    cy.contains("App Router");
  });
});
