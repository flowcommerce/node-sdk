import Rates from './rates';

export default class FixerClient {
  constructor(host, auth, headers) {
    this.rates = new Rates(host, auth, headers);
  }
}
