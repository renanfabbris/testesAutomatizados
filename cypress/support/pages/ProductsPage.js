class ProductsPage {
    searchProduto() {
        cy.fixture('dadosProduto').then((dados) => {
            cy.xpath("//input[@id='search_product']").click()
            cy.xpath("//input[@id='search_product']").clear().type(dados.dadosProduto.nomeProduto);
        })
    };

    btnSurch() {
        cy.xpath("//button[@id='submit_search']").click();
    }

    btnAddToCart() {
        cy.xpath("//div[@class='productinfo text-center']/a[text()='Add to cart']").click()
    }

    btnViewToCart() {
        cy.xpath("//p/a/u[text()='View Cart']").click();
    }

    verifyText() {
        cy.fixture('dadosProduto').then((dados) => {
        cy.xpath("//h4/a")
            .should('have.text', dados.dadosProduto.nomeProduto);
    })}

    verifyProductInfo() {
        cy.fixture('dadosProduto').then((dados) => {
            cy.xpath("//div[@class='productinfo text-center']/p")
                .should('have.text', dados.dadosProduto.nomeProduto)
        })
    };

    btnProceedToCheckout(){
        cy.xpath("//a[@class='btn btn-default check_out']").click()
    }

}
export default new ProductsPage();