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

  getByKey(organization, key, options) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}`, options);
  }

  putByKey(organization, key, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}`, options);
  }

  deleteByKey(organization, key, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}`, options);
  }

  getItemsAndPriceByKeyAndNumber(organization, key, number, options) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}/items/${number}/price`, options);
  }

  getMarginsByKey(organization, key, options) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}/margins`, options);
  }

  postMarginsByKey(organization, key, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}/margins`, options);
  }

  getMarginsByKeyAndId(organization, key, id, options) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}/margins/${id}`, options);
  }

  putMarginsByKeyAndId(organization, key, id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}/margins/${id}`, options);
  }

  deleteMarginsByKeyAndId(organization, key, id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}/margins/${id}`, options);
  }

  getMarginsAndVersionsByKey(organization, key, options) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}/margins/versions`, options);
  }

  getPricingByKey(organization, key, options) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}/pricing`, options);
  }

  putPricingByKey(organization, key, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}/pricing`, options);
  }

  getItems(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/experiences/items`, options);
  }

  getItemsByNumber(organization, number, options) {
    return this.makeRequest(`${this.host}/${organization}/experiences/items/${number}`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/experiences/versions`, options);
  }

}
