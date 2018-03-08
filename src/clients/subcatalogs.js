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
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs`, {
      ...options,
       method: 'POST',
    });
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/versions`, options);
  }

  getById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${id}`, options);
  }

  putById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${id}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${id}`, {
      ...options,
       method: 'DELETE',
    });
  }

  getSettingsById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${id}/settings`, options);
  }

  putSettingsById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${id}/settings`, {
      ...options,
       method: 'PUT',
    });
  }

  getExclusionsBySubcatalogId(organization, subcatalogId, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/exclusions`, options);
  }

  getExclusionsBySubcatalogIdAndNumber(organization, subcatalogId, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/exclusions/${number}`, options);
  }

  putExclusionsBySubcatalogIdAndNumber(organization, subcatalogId, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/exclusions/${number}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteExclusionsBySubcatalogIdAndNumber(organization, subcatalogId, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/exclusions/${number}`, {
      ...options,
       method: 'DELETE',
    });
  }

  getFunctionsBySubcatalogId(organization, subcatalogId, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/functions`, options);
  }

  postFunctionsBySubcatalogId(organization, subcatalogId, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/functions`, {
      ...options,
       method: 'POST',
    });
  }

  getFunctionsAndVersionsBySubcatalogId(organization, subcatalogId, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/functions/versions`, options);
  }

  getFunctionsBySubcatalogIdAndId(organization, subcatalogId, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/functions/${id}`, options);
  }

  deleteFunctionsBySubcatalogIdAndId(organization, subcatalogId, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/functions/${id}`, {
      ...options,
       method: 'DELETE',
    });
  }

  getInclusionsBySubcatalogId(organization, subcatalogId, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/inclusions`, options);
  }

  getInclusionsBySubcatalogIdAndNumber(organization, subcatalogId, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/inclusions/${number}`, options);
  }

  putInclusionsBySubcatalogIdAndNumber(organization, subcatalogId, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/inclusions/${number}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteInclusionsBySubcatalogIdAndNumber(organization, subcatalogId, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/inclusions/${number}`, {
      ...options,
       method: 'DELETE',
    });
  }

  getQueriesBySubcatalogId(organization, subcatalogId, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/queries`, options);
  }

  postQueriesBySubcatalogId(organization, subcatalogId, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/queries`, {
      ...options,
       method: 'POST',
    });
  }

  getQueriesBySubcatalogIdAndId(organization, subcatalogId, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/queries/${id}`, options);
  }

  deleteQueriesBySubcatalogIdAndId(organization, subcatalogId, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/queries/${id}`, {
      ...options,
       method: 'DELETE',
    });
  }

  getStatisticsBySubcatalogId(organization, subcatalogId, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/statistics`, options);
  }

}
