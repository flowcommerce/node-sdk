import Authorizations from './authorizations';
import Checks from './checks';
import Healthchecks from './healthchecks';
import Memberships from './memberships';
import Roles from './roles';

export default class AuthorizationClient {
  constructor(host, auth, headers) {
    this.authorizations = new Authorizations(host, auth, headers);
    this.checks = new Checks(host, auth, headers);
    this.healthchecks = new Healthchecks(host, auth, headers);
    this.memberships = new Memberships(host, auth, headers);
    this.roles = new Roles(host, auth, headers);
  }
}
