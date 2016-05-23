import Classifications from './classifications';
import Propagations from './propagations';

export default class ThreeceClient {
  constructor(host, auth, headers) {
    this.classifications = new Classifications(host, auth, headers);
    this.propagations = new Propagations(host, auth, headers);
  }
}
