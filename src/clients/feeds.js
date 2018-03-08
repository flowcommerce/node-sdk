import Client from './client';

export default class Feeds extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/feeds`, options);
  }

  postCatalog(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/feeds/catalog`, {
      ...options,
       method: 'POST',
    });
  }

  putCatalogById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/feeds/catalog/${id}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/feeds/${id}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
