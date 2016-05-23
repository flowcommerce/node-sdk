import Client from './client';

export default class Groups extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'group',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/groups`, options);
  }

  getVersions(options) {
    return this.makeRequest(`${this.host}/groups/versions`, options);
  }

}
