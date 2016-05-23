import EnvVars from './env-vars';
import Repos from './repos';
import Settings from './settings';

export default class TravisCiClient {
  constructor(host, auth, headers) {
    this.env_vars = new EnvVars(host, auth, headers);
    this.repos = new Repos(host, auth, headers);
    this.settings = new Settings(host, auth, headers);
  }
}
