import CartQuotes from './cart-quotes';

export default class TemandoClient {
  constructor(host, auth, headers) {
    this.cart_quotes = new CartQuotes(host, auth, headers);
  }
}
