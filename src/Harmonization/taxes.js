import Client from './client';

export default class Taxes extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'harmonization',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/harmonization/taxes`, options);
  }

}
