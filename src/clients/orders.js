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
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/orders`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/orders`, {
      ...options,
       method: 'POST',
    });
  }

  getIdentifierByIdentifier(organization, identifier, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/orders/identifier/${encodeURIComponent(identifier)}`, options);
  }

  postSubmissions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/orders/submissions`, {
      ...options,
       method: 'POST',
    });
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/orders/versions`, options);
  }

  getByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/orders/${encodeURIComponent(number)}`, options);
  }

  putByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/orders/${encodeURIComponent(number)}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/orders/${encodeURIComponent(number)}`, {
      ...options,
       method: 'DELETE',
    });
  }

  getAllocationsByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/orders/${encodeURIComponent(number)}/allocations`, options);
  }

  getAllocationsAndSummariesAndLineByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/orders/${encodeURIComponent(number)}/allocations/summaries/line`, options);
  }

  postAuthorizationsByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/orders/${encodeURIComponent(number)}/authorizations`, {
      ...options,
       method: 'POST',
    });
  }

  putDestinationByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/orders/${encodeURIComponent(number)}/destination`, {
      ...options,
       method: 'PUT',
    });
  }

  putInventoryAndReservationsByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/orders/${encodeURIComponent(number)}/inventory/reservations`, {
      ...options,
       method: 'PUT',
    });
  }

  postPaymentsByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/orders/${encodeURIComponent(number)}/payments`, {
      ...options,
       method: 'POST',
    });
  }

  putPromotionsAndFreeShippingByNumberAndKey(organization, number, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/orders/${encodeURIComponent(number)}/promotions/${encodeURIComponent(key)}/free_shipping`, {
      ...options,
       method: 'PUT',
    });
  }

  postRefundsAndSummariesByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/orders/${encodeURIComponent(number)}/refunds/summaries`, {
      ...options,
       method: 'POST',
    });
  }

  postReplacementsByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/orders/${encodeURIComponent(number)}/replacements`, {
      ...options,
       method: 'POST',
    });
  }

  postServiceAndChangesByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/orders/${encodeURIComponent(number)}/service/changes`, {
      ...options,
       method: 'POST',
    });
  }

  putSubmissionsByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/orders/${encodeURIComponent(number)}/submissions`, {
      ...options,
       method: 'PUT',
    });
  }

  putTaxAndRegistrationByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/orders/${encodeURIComponent(number)}/tax/registration`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteTaxAndRegistrationByNumberAndKey(organization, number, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/orders/${encodeURIComponent(number)}/tax/registration/${encodeURIComponent(key)}`, {
      ...options,
       method: 'DELETE',
    });
  }

  getStatusAndFraudByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/orders/${encodeURIComponent(number)}/status/fraud`, options);
  }

  postLabelsAndDocumentsAndInvoiceByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/orders/${encodeURIComponent(number)}/labels/documents/invoice`, {
      ...options,
       method: 'POST',
    });
  }

}
