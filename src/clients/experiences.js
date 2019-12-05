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
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences`, {
      ...options,
       method: 'POST',
    });
  }

  getConversionsByBaseAndAmount(organization, base, amount, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/conversions/${encodeURIComponent(base)}/${encodeURIComponent(amount)}`, options);
  }

  getItems(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/items`, options);
  }

  getItemsByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/items/${encodeURIComponent(number)}`, options);
  }

  postQueryAndBuilders(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/query/builders`, {
      ...options,
       method: 'POST',
    });
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/versions`, options);
  }

  getCurrencyAndFormatsByExperienceKey(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(experienceKey)}/currency/formats`, options);
  }

  putCurrencyAndFormatsByExperienceKey(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(experienceKey)}/currency/formats`, {
      ...options,
       method: 'PUT',
    });
  }

  getLocalAndItemsByExperienceKey(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(experienceKey)}/local/items`, options);
  }

  getLogisticsAndSummaryByExperienceKey(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(experienceKey)}/logistics/summary`, options);
  }

  getMarginsByExperienceKey(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(experienceKey)}/margins`, options);
  }

  postMarginsByExperienceKey(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(experienceKey)}/margins`, {
      ...options,
       method: 'POST',
    });
  }

  getMarginsAndVersionsByExperienceKey(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(experienceKey)}/margins/versions`, options);
  }

  getMarginsByExperienceKeyAndKey(organization, experienceKey, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(experienceKey)}/margins/${encodeURIComponent(key)}`, options);
  }

  putMarginsByExperienceKeyAndKey(organization, experienceKey, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(experienceKey)}/margins/${encodeURIComponent(key)}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteMarginsByExperienceKeyAndKey(organization, experienceKey, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(experienceKey)}/margins/${encodeURIComponent(key)}`, {
      ...options,
       method: 'DELETE',
    });
  }

  getPaymentMethodTypesByExperienceKey(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(experienceKey)}/payment-method-types`, options);
  }

  getPaymentAndMethodAndRulesByExperienceKey(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(experienceKey)}/payment/method/rules`, options);
  }

  putPaymentAndMethodAndRulesByExperienceKey(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(experienceKey)}/payment/method/rules`, {
      ...options,
       method: 'PUT',
    });
  }

  getPriceAndBooksByExperienceKey(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(experienceKey)}/price/books`, options);
  }

  postPriceAndBooksByExperienceKey(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(experienceKey)}/price/books`, {
      ...options,
       method: 'POST',
    });
  }

  putPriceAndBooksByExperienceKey(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(experienceKey)}/price/books`, {
      ...options,
       method: 'PUT',
    });
  }

  getPriceAndBooksByExperienceKeyAndKey(organization, experienceKey, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(experienceKey)}/price/books/${encodeURIComponent(key)}`, options);
  }

  deletePriceAndBooksByExperienceKeyAndKey(organization, experienceKey, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(experienceKey)}/price/books/${encodeURIComponent(key)}`, {
      ...options,
       method: 'DELETE',
    });
  }

  getByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(key)}`, options);
  }

  putByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(key)}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(key)}`, {
      ...options,
       method: 'DELETE',
    });
  }

  postCloneByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(key)}/clone`, {
      ...options,
       method: 'POST',
    });
  }

  getCloneByKeyAndId(organization, key, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(key)}/clone/${encodeURIComponent(id)}`, options);
  }

  getItemsAndPriceByKeyAndNumber(organization, key, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(key)}/items/${encodeURIComponent(number)}/price`, options);
  }

  getPricingByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(key)}/pricing`, options);
  }

  putPricingByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(key)}/pricing`, {
      ...options,
       method: 'PUT',
    });
  }

  getPromotionsAndAvailableByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(key)}/promotions/available`, options);
  }

  putStatusByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(key)}/status`, {
      ...options,
       method: 'PUT',
    });
  }

}
