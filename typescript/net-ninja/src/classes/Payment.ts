import {HasFormatter} from '../interfaces/HasFormatter';

class Payment implements HasFormatter {
  constructor(
    public recepient : string, 
    private details : string,
    readonly amount : number,
    ) {}

  format(){
    return this.recepient + ' ' + this.details + ' ' + this.amount;
  }
}

export default Payment;