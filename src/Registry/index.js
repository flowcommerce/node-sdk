import Applications from './applications';
import Services from './services';

export default class RegistryClient {
  constructor(host, auth, headers) {
    this.applications = new Applications(host, auth, headers);
    this.services = new Services(host, auth, headers);
  }
}
