import Classifications from './classifications';
import Details from './details';
import Lanes from './lanes';

export default class HarmonizationInternalClient {
  constructor(host, auth, headers) {
    this.classifications = new Classifications(host, auth, headers);
    this.details = new Details(host, auth, headers);
    this.lanes = new Lanes(host, auth, headers);
  }
}
