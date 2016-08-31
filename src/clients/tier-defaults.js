import Client from './client';

export default class TierDefaults extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/tier_defaults`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/tier_defaults`, options);
  }

  getById(organization, id, options) {
    return this.makeRequest(`${this.host}/${organization}/tier_defaults/${id}`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/tier_defaults/versions`, options);
  }

}
