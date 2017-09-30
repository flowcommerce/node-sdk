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
    return this.makeRequest(`${this.host}/${organization}/experiences`, {
      ...options,
       method: 'POST',
    });
  }

  getMarginsByExperienceKey(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${experienceKey}/margins`, options);
  }

  postMarginsByExperienceKey(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${experienceKey}/margins`, {
      ...options,
       method: 'POST',
    });
  }

  getMarginsByExperienceKeyAndKey(organization, experienceKey, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${experienceKey}/margins/${key}`, options);
  }

  putMarginsByExperienceKeyAndKey(organization, experienceKey, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${experienceKey}/margins/${key}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteMarginsByExperienceKeyAndKey(organization, experienceKey, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${experienceKey}/margins/${key}`, {
      ...options,
       method: 'DELETE',
    });
  }

  getMarginsAndVersionsByExperienceKey(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${experienceKey}/margins/versions`, options);
  }

  getPaymentMethodTypesByExperienceKey(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${experienceKey}/payment-method-types`, options);
  }

  getPaymentAndMethodAndRulesByExperienceKey(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${experienceKey}/payment/method/rules`, options);
  }

  putPaymentAndMethodAndRulesByExperienceKey(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${experienceKey}/payment/method/rules`, {
      ...options,
       method: 'PUT',
    });
  }

  getByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}`, options);
  }

  putByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}`, {
      ...options,
       method: 'DELETE',
    });
  }

  getItemsAndPriceByKeyAndNumber(organization, key, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}/items/${number}/price`, options);
  }

  getPricingByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}/pricing`, options);
  }

  putPricingByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}/pricing`, {
      ...options,
       method: 'PUT',
    });
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
