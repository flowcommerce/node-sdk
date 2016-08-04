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

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs`, options);
  }

  getById(organization, id, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${id}`, options);
  }

  putById(organization, id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${id}`, options);
  }

  deleteById(organization, id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${id}`, options);
  }

  getSettingsById(organization, id, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${id}/settings`, options);
  }

  putSettingsById(organization, id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${id}/settings`, options);
  }

  getExclusionsBySubcatalogId(organization, subcatalogId, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/exclusions`, options);
  }

  getExclusionsBySubcatalogIdAndNumber(organization, subcatalogId, number, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/exclusions/${number}`, options);
  }

  putExclusionsBySubcatalogIdAndNumber(organization, subcatalogId, number, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/exclusions/${number}`, options);
  }

  deleteExclusionsBySubcatalogIdAndNumber(organization, subcatalogId, number, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/exclusions/${number}`, options);
  }

  getInclusionsBySubcatalogId(organization, subcatalogId, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/inclusions`, options);
  }

  getInclusionsBySubcatalogIdAndNumber(organization, subcatalogId, number, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/inclusions/${number}`, options);
  }

  putInclusionsBySubcatalogIdAndNumber(organization, subcatalogId, number, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/inclusions/${number}`, options);
  }

  deleteInclusionsBySubcatalogIdAndNumber(organization, subcatalogId, number, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/inclusions/${number}`, options);
  }

  getQueriesBySubcatalogId(organization, subcatalogId, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/queries`, options);
  }

  postQueriesBySubcatalogId(organization, subcatalogId, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/queries`, options);
  }

  getQueriesBySubcatalogIdAndId(organization, subcatalogId, id, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/queries/${id}`, options);
  }

  deleteQueriesBySubcatalogIdAndId(organization, subcatalogId, id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/queries/${id}`, options);
  }

  getStatisticsBySubcatalogId(organization, subcatalogId, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/statistics`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/versions`, options);
  }

}
