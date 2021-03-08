class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return this.client + ' ' + this.details + ' ' + this.amount;
    }
}
export default Invoice;
