import Client from './client';

export default class Experiences extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'experience',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/experiences/versions`, options);
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/experiences`, options);
  }

  getItems(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/experiences/items`, options);
  }

  postCheckout(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/experiences/checkout`, options);
  }

  getByKey(organization, key, options) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/experiences`, options);
  }

  putByKey(organization, key, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}`, options);
  }

  putDisplayByKeyAndId(organization, key, id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}/display/${id}`, options);
  }

  deleteById(organization, id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/experiences/${id}`, options);
  }

}
