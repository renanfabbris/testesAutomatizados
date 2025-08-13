
class APIPage {
    constructor() {
        this.url_api = Cypress.env('url_api');
        if (!this.url_api) {
            throw new Error('URL_API não está definida nas variáveis de ambiente (.env)');
        }
    }
    apiRequest() {
        cy.request(this.url_api)
            .then((response) => {
                expect(response.status).to.eq(200);
            })
    };

    getAPIRequest() {
        cy.request(this.url_api).then((res) => {
        })
    };

    statusCodeAPI(statusCode) {
        cy.request(this.url_api)
            .then((response) => {
                expect(response.status).to.eq(statusCode);
            })

    }

    verifyFieldName() {
        let response;
        cy.request(this.url_api).then((res) => {
            response = res;
            const listName = response.body.data.list.name;
            cy.log('Nome da lista:', listName);
            expect(listName).to.be.a('string').and.not.be.empty;
        })
    }

}

export default new APIPage();