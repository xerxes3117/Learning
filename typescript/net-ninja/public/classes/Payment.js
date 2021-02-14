class Payment {
    constructor(recepient, details, amount) {
        this.recepient = recepient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return this.recepient + ' ' + this.details + ' ' + this.amount;
    }
}
export default Payment;
