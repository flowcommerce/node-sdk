import Domains from './domains';
import Statistics from './statistics';

export default class ResearchClient {
  constructor(host, auth, headers) {
    this.domains = new Domains(host, auth, headers);
    this.statistics = new Statistics(host, auth, headers);
  }
}
