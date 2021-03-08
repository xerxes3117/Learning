import {HasFormatter} from '../interfaces/HasFormatter';

class Invoice implements HasFormatter {
  constructor(
    public client : string, 
    private details : string,
    readonly amount : number,
    ) {}

  format(){
    return this.client + ' ' + this.details + ' ' + this.amount;
  }
}

export default Invoice;