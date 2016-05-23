import Client from './client';

export default class Views extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'view',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/views/versions`, options);
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/views`, options);
  }

  getItems(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/views/items`, options);
  }

  postCheckout(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/views/checkout`, options);
  }

  getByKey(organization, key, options) {
    return this.makeRequest(`${this.host}/${organization}/views/${key}`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/views`, options);
  }

  putByKey(organization, key, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/views/${key}`, options);
  }

  putDisplayByKeyAndId(organization, key, id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/views/${key}/display/${id}`, options);
  }

  putFunctionByKeyAndId(organization, key, id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/views/${key}/function/${id}`, options);
  }

  deleteById(organization, id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/views/${id}`, options);
  }

}
