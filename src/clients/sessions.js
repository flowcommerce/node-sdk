import Client from './client';

export default class Sessions extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  getBySession(session, options = {}) {
    return this.makeRequest(`${this.host}/sessions/${session}`, options);
  }

  putBySession(session, options = {}) {
    return this.makeRequest(`${this.host}/sessions/${session}`, {
      ...options,
      method: 'PUT',
    });
  }

  deleteBySession(session, options = {}) {
    return this.makeRequest(`${this.host}/sessions/${session}`, {
      ...options,
      method: 'DELETE',
    });
  }

  putResetBySession(session, options = {}) {
    return this.makeRequest(`${this.host}/sessions/${session}/reset`, {
      ...options,
      method: 'PUT',
    });
  }

  postOrganizationsByOrganization(organization, options = {}) {
    return this.makeRequest(`${this.host}/sessions/organizations/${organization}`, {
      ...options,
      method: 'POST',
    });
  }

  postShopifyByShop(shop, options = {}) {
    return this.makeRequest(`${this.host}/sessions/shopify/${shop}`, {
      ...options,
      method: 'POST',
    });
  }

}
