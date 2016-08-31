import Client from './client';

export default class Hs10 extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/harmonization/hs10`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/harmonization/hs10/versions`, options);
  }

}
