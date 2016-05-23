import Events from './events';
import Labels from './labels';
import Trackings from './trackings';

export default class TrackingClient {
  constructor(host, auth, headers) {
    this.events = new Events(host, auth, headers);
    this.labels = new Labels(host, auth, headers);
    this.trackings = new Trackings(host, auth, headers);
  }
}
