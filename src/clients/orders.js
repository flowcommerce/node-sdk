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

  postSubmissions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/submissions`, {
      ...options,
       method: 'POST',
    });
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

  postServiceAndChangesByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/${number}/service/changes`, {
      ...options,
       method: 'POST',
    });
  }

  putSubmissionsByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/${number}/submissions`, {
      ...options,
       method: 'PUT',
    });
  }

  putTaxAndRegistrationByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/${number}/tax/registration`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteTaxAndRegistrationByNumberAndKey(organization, number, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/${number}/tax/registration/${key}`, {
      ...options,
       method: 'DELETE',
    });
  }

  getStatusAndFraudByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/${number}/status/fraud`, options);
  }

  postLabelsAndDocumentsAndInvoiceByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/${number}/labels/documents/invoice`, {
      ...options,
       method: 'POST',
    });
  }

}
