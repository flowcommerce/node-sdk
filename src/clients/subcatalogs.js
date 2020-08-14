import Client from './client';

export default class Subcatalogs extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/subcatalogs`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/subcatalogs`, {
      ...options,
       method: 'POST',
    });
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/subcatalogs/versions`, options);
  }

  getById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/subcatalogs/${encodeURIComponent(id)}`, options);
  }

  putById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/subcatalogs/${encodeURIComponent(id)}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/subcatalogs/${encodeURIComponent(id)}`, {
      ...options,
       method: 'DELETE',
    });
  }

  getSettingsById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/subcatalogs/${encodeURIComponent(id)}/settings`, options);
  }

  putSettingsById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/subcatalogs/${encodeURIComponent(id)}/settings`, {
      ...options,
       method: 'PUT',
    });
  }

  getStatisticsBySubcatalogId(organization, subcatalogId, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/subcatalogs/${encodeURIComponent(subcatalogId)}/statistics`, options);
  }

}
