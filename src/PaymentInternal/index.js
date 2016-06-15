import Keys from './keys';
import Passphrases from './passphrases';
import Tribes from './tribes';

export default class PaymentInternalClient {
  constructor(host, auth, headers) {
    this.keys = new Keys(host, auth, headers);
    this.passphrases = new Passphrases(host, auth, headers);
    this.tribes = new Tribes(host, auth, headers);
  }
}
