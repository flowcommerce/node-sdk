import Client from './client';

export default class Hs6 extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/harmonization/hs6`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/harmonization/hs6/versions`, options);
  }

}
