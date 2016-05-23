import Codes from './codes';
import Sources from './sources';

export default class ClassificationInternalClient {
  constructor(host, auth, headers) {
    this.codes = new Codes(host, auth, headers);
    this.sources = new Sources(host, auth, headers);
  }
}
