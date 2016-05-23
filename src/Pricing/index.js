import Displays from './displays';
import Healthchecks from './healthchecks';

export default class PricingClient {
  constructor(host, auth, headers) {
    this.displays = new Displays(host, auth, headers);
    this.healthchecks = new Healthchecks(host, auth, headers);
  }
}
