import Locations from './locations';

export default class LocationClient {
  constructor(host, auth, headers) {
    this.locations = new Locations(host, auth, headers);
  }
}
