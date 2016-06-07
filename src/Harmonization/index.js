import Codes from './codes';
import Duties from './duties';
import HarmonizedItems from './harmonized-items';
import HarmonizedItemDuties from './harmonized-item-duties';
import Settings from './settings';
import Taxes from './taxes';

export default class HarmonizationClient {
  constructor(host, auth, headers) {
    this.codes = new Codes(host, auth, headers);
    this.duties = new Duties(host, auth, headers);
    this.harmonized_items = new HarmonizedItems(host, auth, headers);
    this.harmonized_item_duties = new HarmonizedItemDuties(host, auth, headers);
    this.settings = new Settings(host, auth, headers);
    this.taxes = new Taxes(host, auth, headers);
  }
}
