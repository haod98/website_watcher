describe("Watch if a PS5 is available", () => {
    beforeEach(() => {
        cy.visit("https://www.mediamarkt.at/de/product/_sony-playstation%C2%AE5-digital-1797340.html");
    });
    it("Add to basket button is NOT available", () => {
        cy.get("[data-product-online-status=CURRENTLY_NOT_AVAILABLE]").should('exist');
    });
});