import Client from './client';

export default class Experiences extends Client {
  constructor(opts) {
    let options = opts;
    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }
    options.serviceName = 'API';
    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences`, options);
  }

  post(organization, options = {}) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/experiences`, options);
  }

  getMarginsByExperienceKey(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${experienceKey}/margins`, options);
  }

  postMarginsByExperienceKey(organization, experienceKey, options = {}) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/experiences/${experienceKey}/margins`, options);
  }

  getMarginsByExperienceKeyAndKey(organization, experienceKey, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${experienceKey}/margins/${key}`, options);
  }

  putMarginsByExperienceKeyAndKey(organization, experienceKey, key, options = {}) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/experiences/${experienceKey}/margins/${key}`, options);
  }

  deleteMarginsByExperienceKeyAndKey(organization, experienceKey, key, options = {}) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/experiences/${experienceKey}/margins/${key}`, options);
  }

  getMarginsAndVersionsByExperienceKey(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${experienceKey}/margins/versions`, options);
  }

  getByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}`, options);
  }

  putByKey(organization, key, options = {}) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}`, options);
  }

  deleteByKey(organization, key, options = {}) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}`, options);
  }

  getItemsAndPriceByKeyAndNumber(organization, key, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}/items/${number}/price`, options);
  }

  getPricingByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}/pricing`, options);
  }

  putPricingByKey(organization, key, options = {}) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}/pricing`, options);
  }

  getPromotionsAndAvailableByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}/promotions/available`, options);
  }

  getConversionsByBaseAndAmount(organization, base, amount, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/conversions/${base}/${amount}`, options);
  }

  getItems(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/items`, options);
  }

  getItemsByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/items/${number}`, options);
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/versions`, options);
  }

}
