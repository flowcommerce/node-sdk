import Client from './client';

export default class PaymentRequests extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/payment/requests`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/payment/requests`, {
      ...options,
       method: 'POST',
    });
  }

  getById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/payment/requests/${encodeURIComponent(id)}`, options);
  }

  putById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/payment/requests/${encodeURIComponent(id)}`, {
      ...options,
       method: 'PUT',
    });
  }

  postCancelById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/payment/requests/${encodeURIComponent(id)}/cancel`, {
      ...options,
       method: 'POST',
    });
  }

  postCaptureById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/payment/requests/${encodeURIComponent(id)}/capture`, {
      ...options,
       method: 'POST',
    });
  }

  postPaymentAndMethodAndDataById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/payment/requests/${encodeURIComponent(id)}/payment/method/data`, {
      ...options,
       method: 'POST',
    });
  }

  postPaymentMethodDataById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/payment/requests/${encodeURIComponent(id)}/payment_method_data`, {
      ...options,
       method: 'POST',
    });
  }

  postRefundById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/payment/requests/${encodeURIComponent(id)}/refund`, {
      ...options,
       method: 'POST',
    });
  }

  postRefundAndReversalById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/payment/requests/${encodeURIComponent(id)}/refund/reversal`, {
      ...options,
       method: 'POST',
    });
  }

  postReversalById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/payment/requests/${encodeURIComponent(id)}/reversal`, {
      ...options,
       method: 'POST',
    });
  }

  postReverseById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/payment/requests/${encodeURIComponent(id)}/reverse`, {
      ...options,
       method: 'POST',
    });
  }

}
