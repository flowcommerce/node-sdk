import Codes from './codes';
import Duties from './duties';
import Items from './items';
import ItemDuties from './item-duties';
import Settings from './settings';
import Taxes from './taxes';

export default class HarmonizationClient {
  constructor(host, auth, headers) {
    this.codes = new Codes(host, auth, headers);
    this.duties = new Duties(host, auth, headers);
    this.items = new Items(host, auth, headers);
    this.item_duties = new ItemDuties(host, auth, headers);
    this.settings = new Settings(host, auth, headers);
    this.taxes = new Taxes(host, auth, headers);
  }
}
