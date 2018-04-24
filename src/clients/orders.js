import Client from './client';

export default class Orders extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders`, {
      ...options,
       method: 'POST',
    });
  }

  getIdentifierByIdentifier(organization, identifier, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/identifier/${identifier}`, options);
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/versions`, options);
  }

  getByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/${number}`, options);
  }

  putByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/${number}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/${number}`, {
      ...options,
       method: 'DELETE',
    });
  }

  getAllocationsByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/${number}/allocations`, options);
  }

  postAuthorizationsByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/${number}/authorizations`, {
      ...options,
       method: 'POST',
    });
  }

  putDestinationByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/${number}/destination`, {
      ...options,
       method: 'PUT',
    });
  }

  postInstallmentAndPlanAndAuthorizationsByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/${number}/installment/plan/authorizations`, {
      ...options,
       method: 'POST',
    });
  }

  putInventoryAndReservationsByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/${number}/inventory/reservations`, {
      ...options,
       method: 'PUT',
    });
  }

  putPromotionsAndFreeShippingByNumberAndKey(organization, number, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/${number}/promotions/${key}/free_shipping`, {
      ...options,
       method: 'PUT',
    });
  }

  putSubmissionsByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/${number}/submissions`, {
      ...options,
       method: 'PUT',
    });
  }

  getStatusAndFraudByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/${number}/status/fraud`, options);
  }

  postLabelsByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/${number}/labels`, {
      ...options,
       method: 'POST',
    });
  }

}
