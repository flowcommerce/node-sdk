import Cards from './cards';

export default class PaymentClient {
  constructor(host, auth, headers) {
    this.cards = new Cards(host, auth, headers);
  }
}
