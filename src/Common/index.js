import Healthchecks from './healthchecks';

export default class CommonClient {
  constructor(host, auth, headers) {
    this.healthchecks = new Healthchecks(host, auth, headers);
  }
}
