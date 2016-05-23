import Invitations from './invitations';
import Organizations from './organizations';
import Memberships from './memberships';

export default class OrganizationClient {
  constructor(host, auth, headers) {
    this.invitations = new Invitations(host, auth, headers);
    this.organizations = new Organizations(host, auth, headers);
    this.memberships = new Memberships(host, auth, headers);
  }
}
