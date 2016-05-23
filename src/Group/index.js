import Groups from './groups';
import Healthchecks from './healthchecks';
import Memberships from './memberships';

export default class GroupClient {
  constructor(host, auth, headers) {
    this.groups = new Groups(host, auth, headers);
    this.healthchecks = new Healthchecks(host, auth, headers);
    this.memberships = new Memberships(host, auth, headers);
  }
}
