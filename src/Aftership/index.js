import Trackings from './trackings';

export default class AftershipClient {
  constructor(host, auth, headers) {
    this.trackings = new Trackings(host, auth, headers);
  }
}
