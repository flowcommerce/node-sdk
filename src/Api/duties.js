import Client from './client';

export default class Duties extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, origin, options) {
    return this.makeRequest(`${this.host}/${organization}/harmonization/duties/${origin}`, options);
  }

}
