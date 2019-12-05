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

  getExclusionsBySubcatalogId(organization, subcatalogId, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/subcatalogs/${encodeURIComponent(subcatalogId)}/exclusions`, options);
  }

  getExclusionsBySubcatalogIdAndNumber(organization, subcatalogId, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/subcatalogs/${encodeURIComponent(subcatalogId)}/exclusions/${encodeURIComponent(number)}`, options);
  }

  putExclusionsBySubcatalogIdAndNumber(organization, subcatalogId, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/subcatalogs/${encodeURIComponent(subcatalogId)}/exclusions/${encodeURIComponent(number)}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteExclusionsBySubcatalogIdAndNumber(organization, subcatalogId, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/subcatalogs/${encodeURIComponent(subcatalogId)}/exclusions/${encodeURIComponent(number)}`, {
      ...options,
       method: 'DELETE',
    });
  }

  getInclusionsBySubcatalogId(organization, subcatalogId, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/subcatalogs/${encodeURIComponent(subcatalogId)}/inclusions`, options);
  }

  getInclusionsBySubcatalogIdAndNumber(organization, subcatalogId, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/subcatalogs/${encodeURIComponent(subcatalogId)}/inclusions/${encodeURIComponent(number)}`, options);
  }

  putInclusionsBySubcatalogIdAndNumber(organization, subcatalogId, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/subcatalogs/${encodeURIComponent(subcatalogId)}/inclusions/${encodeURIComponent(number)}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteInclusionsBySubcatalogIdAndNumber(organization, subcatalogId, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/subcatalogs/${encodeURIComponent(subcatalogId)}/inclusions/${encodeURIComponent(number)}`, {
      ...options,
       method: 'DELETE',
    });
  }

  getQueriesBySubcatalogId(organization, subcatalogId, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/subcatalogs/${encodeURIComponent(subcatalogId)}/queries`, options);
  }

  postQueriesBySubcatalogId(organization, subcatalogId, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/subcatalogs/${encodeURIComponent(subcatalogId)}/queries`, {
      ...options,
       method: 'POST',
    });
  }

  getQueriesBySubcatalogIdAndId(organization, subcatalogId, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/subcatalogs/${encodeURIComponent(subcatalogId)}/queries/${encodeURIComponent(id)}`, options);
  }

  deleteQueriesBySubcatalogIdAndId(organization, subcatalogId, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/subcatalogs/${encodeURIComponent(subcatalogId)}/queries/${encodeURIComponent(id)}`, {
      ...options,
       method: 'DELETE',
    });
  }

  getStatisticsBySubcatalogId(organization, subcatalogId, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/subcatalogs/${encodeURIComponent(subcatalogId)}/statistics`, options);
  }

}
