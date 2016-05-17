import Organizations from './organizations';
import Memberships from './memberships';
import Invitations from './invitations';

export default class OrganizationsClient {
  constructor(host, auth, headers) {
    this.organizations = new Organizations(host, auth, headers);
    this.memberships = new Memberships(host, auth, headers);
    this.invitations = new Invitations(host, auth, headers);
  }
}
