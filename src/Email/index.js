import Emails from './emails';
import Healthchecks from './healthchecks';
import Reports from './reports';

export default class EmailClient {
  constructor(host, auth, headers) {
    this.emails = new Emails(host, auth, headers);
    this.healthchecks = new Healthchecks(host, auth, headers);
    this.reports = new Reports(host, auth, headers);
  }
}
