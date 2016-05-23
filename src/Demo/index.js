import Healthchecks from './healthchecks';
import Samples from './samples';

export default class DemoClient {
  constructor(host, auth, headers) {
    this.healthchecks = new Healthchecks(host, auth, headers);
    this.samples = new Samples(host, auth, headers);
  }
}
