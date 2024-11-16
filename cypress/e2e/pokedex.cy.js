describe("Pokedex", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:5000");
    cy.contains("ivysaur");
    cy.contains(
      "Pokémon and Pokémon character names are trademarks of Nintendo."
    );
  });

  it("pokemon page can be navigated to", function () {
    cy.visit("http://localhost:5000");
    const element = cy.contains("ivysaur");
    element.click();
    cy.contains("chlorophyll");
  });
});
