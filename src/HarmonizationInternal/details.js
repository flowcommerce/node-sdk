import Client from './client';

export default class Details extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'harmonization-internal',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/harmonization/details`, options);
  }

  getById(organization, id, options) {
    return this.makeRequest(`${this.host}/${organization}/harmonization/details/${id}`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/harmonization/details`, options);
  }

  deleteById(organization, id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/harmonization/details/${id}`, options);
  }

}
