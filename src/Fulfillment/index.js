import Bookings from './bookings';
import Carriers from './carriers';
import CarrierAccounts from './carrier-accounts';
import Centers from './centers';
import Experiences from './experiences';
import Labels from './labels';
import Lanes from './lanes';
import Quotes from './quotes';
import Services from './services';
import Shipments from './shipments';
import Tiers from './tiers';

export default class FulfillmentClient {
  constructor(host, auth, headers) {
    this.bookings = new Bookings(host, auth, headers);
    this.carriers = new Carriers(host, auth, headers);
    this.carrier_accounts = new CarrierAccounts(host, auth, headers);
    this.centers = new Centers(host, auth, headers);
    this.experiences = new Experiences(host, auth, headers);
    this.labels = new Labels(host, auth, headers);
    this.lanes = new Lanes(host, auth, headers);
    this.quotes = new Quotes(host, auth, headers);
    this.services = new Services(host, auth, headers);
    this.shipments = new Shipments(host, auth, headers);
    this.tiers = new Tiers(host, auth, headers);
  }
}
