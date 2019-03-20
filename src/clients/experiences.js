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

  getConversionsByBaseAndAmount(organization, base, amount, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/conversions/${base}/${amount}`, options);
  }

  getItems(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/items`, options);
  }

  getItemsByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/items/${number}`, options);
  }

  postQueryAndBuilders(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/query/builders`, {
      ...options,
       method: 'POST',
    });
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/versions`, options);
  }

  getCurrencyAndFormatsByExperienceKey(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${experienceKey}/currency/formats`, options);
  }

  putCurrencyAndFormatsByExperienceKey(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${experienceKey}/currency/formats`, {
      ...options,
       method: 'PUT',
    });
  }

  getLogisticsAndSummaryByExperienceKey(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${experienceKey}/logistics/summary`, options);
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

  getMarginsAndVersionsByExperienceKey(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${experienceKey}/margins/versions`, options);
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

  getPriceAndBooksByExperienceKey(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${experienceKey}/price/books`, options);
  }

  postPriceAndBooksByExperienceKey(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${experienceKey}/price/books`, {
      ...options,
       method: 'POST',
    });
  }

  putPriceAndBooksByExperienceKey(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${experienceKey}/price/books`, {
      ...options,
       method: 'PUT',
    });
  }

  getPriceAndBooksByExperienceKeyAndKey(organization, experienceKey, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${experienceKey}/price/books/${key}`, options);
  }

  deletePriceAndBooksByExperienceKeyAndKey(organization, experienceKey, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${experienceKey}/price/books/${key}`, {
      ...options,
       method: 'DELETE',
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

  postCloneByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}/clone`, {
      ...options,
       method: 'POST',
    });
  }

  getCloneByKeyAndId(organization, key, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}/clone/${id}`, options);
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

  putStatusByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${key}/status`, {
      ...options,
       method: 'PUT',
    });
  }

}
