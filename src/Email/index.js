import Emails from './emails';
import Healthchecks from './healthchecks';

export default class EmailClient {
  constructor(host, auth, headers) {
    this.emails = new Emails(host, auth, headers);
    this.healthchecks = new Healthchecks(host, auth, headers);
  }
}
