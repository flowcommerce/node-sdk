import Rates from './rates';

export default class CurrencyClient {
  constructor(host, auth, headers) {
    this.rates = new Rates(host, auth, headers);
  }
}
