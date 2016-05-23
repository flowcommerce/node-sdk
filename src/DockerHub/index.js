import Jwts from './jwts';

export default class DockerHubClient {
  constructor(host, auth, headers) {
    this.jwts = new Jwts(host, auth, headers);
  }
}
