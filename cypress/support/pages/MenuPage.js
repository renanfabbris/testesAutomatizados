class MenuPage {
    menuProducts() {
    cy.xpath("//li/a[@href='/products']").click() };
}

export default new MenuPage();