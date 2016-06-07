import Initializations from './initializations';
import Tribes from './tribes';
import TribeStatus from './tribe-status';

export default class PaymentInternalClient {
  constructor(host, auth, headers) {
    this.initializations = new Initializations(host, auth, headers);
    this.tribes = new Tribes(host, auth, headers);
    this.tribe_status = new TribeStatus(host, auth, headers);
  }
}
