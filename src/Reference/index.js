import Countries from './countries';
import Currencies from './currencies';
import Languages from './languages';
import Timezones from './timezones';

export default class ReferenceClient {
  constructor(host, auth, headers) {
    this.countries = new Countries(host, auth, headers);
    this.currencies = new Currencies(host, auth, headers);
    this.languages = new Languages(host, auth, headers);
    this.timezones = new Timezones(host, auth, headers);
  }
}
