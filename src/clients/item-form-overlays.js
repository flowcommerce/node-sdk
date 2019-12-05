import Client from './client';

export default class ItemFormOverlays extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/item/overlays`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/item/overlays`, {
      ...options,
       method: 'POST',
    });
  }

  getByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/item/overlays/${key}`, options);
  }

  putByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/item/overlays/${key}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/item/overlays/${key}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
