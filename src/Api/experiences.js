import Client from './client';

export default class Experiences extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/experiences`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/experiences`, options);
  }

  deleteById(organization, id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/experiences/${id}`, options);
  }

  getByKey(organization, key, options) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}`, options);
  }

  putByKey(organization, key, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}`, options);
  }

  putDisplayByKeyAndId(organization, key, id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}/display/${id}`, options);
  }

  postCheckout(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/experiences/checkout`, options);
  }

  getItems(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/experiences/items`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/experiences/versions`, options);
  }

}
