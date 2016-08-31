import Client from './client';

export default class Subcatalogs extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
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

  getFunctionsBySubcatalogId(organization, subcatalogId, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/functions`, options);
  }

  postFunctionsBySubcatalogId(organization, subcatalogId, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/functions`, options);
  }

  getFunctionsBySubcatalogIdAndId(organization, subcatalogId, id, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/functions/${id}`, options);
  }

  deleteFunctionsBySubcatalogIdAndId(organization, subcatalogId, id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/functions/${id}`, options);
  }

  getFunctionsAndVersionsBySubcatalogId(organization, subcatalogId, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/functions/versions`, options);
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
