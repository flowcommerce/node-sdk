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

  postShopifyAndOrganizationsByOrganization(organization, options = {}) {
    return this.makeRequest(`${this.host}/sessions/shopify/organizations/${encodeURIComponent(organization)}`, {
      ...options,
       method: 'POST',
    });
  }

  getShopifyBySession(session, options = {}) {
    return this.makeRequest(`${this.host}/sessions/shopify/${encodeURIComponent(session)}`, options);
  }

  putShopifyBySession(session, options = {}) {
    return this.makeRequest(`${this.host}/sessions/shopify/${encodeURIComponent(session)}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteShopifyBySession(session, options = {}) {
    return this.makeRequest(`${this.host}/sessions/shopify/${encodeURIComponent(session)}`, {
      ...options,
       method: 'DELETE',
    });
  }

  putShopifyAndClearBySession(session, options = {}) {
    return this.makeRequest(`${this.host}/sessions/shopify/${encodeURIComponent(session)}/clear`, {
      ...options,
       method: 'PUT',
    });
  }

  putShopifyAndOrganizationsBySessionAndOrganization(session, organization, options = {}) {
    return this.makeRequest(`${this.host}/sessions/shopify/${encodeURIComponent(session)}/organizations/${encodeURIComponent(organization)}`, {
      ...options,
       method: 'PUT',
    });
  }

  putShopifyAndResetBySession(session, options = {}) {
    return this.makeRequest(`${this.host}/sessions/shopify/${encodeURIComponent(session)}/reset`, {
      ...options,
       method: 'PUT',
    });
  }

  postOrganizationsByOrganization(organization, options = {}) {
    return this.makeRequest(`${this.host}/sessions/organizations/${encodeURIComponent(organization)}`, {
      ...options,
       method: 'POST',
    });
  }

  getBySession(session, options = {}) {
    return this.makeRequest(`${this.host}/sessions/${encodeURIComponent(session)}`, options);
  }

  putBySession(session, options = {}) {
    return this.makeRequest(`${this.host}/sessions/${encodeURIComponent(session)}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteBySession(session, options = {}) {
    return this.makeRequest(`${this.host}/sessions/${encodeURIComponent(session)}`, {
      ...options,
       method: 'DELETE',
    });
  }

  putClearBySession(session, options = {}) {
    return this.makeRequest(`${this.host}/sessions/${encodeURIComponent(session)}/clear`, {
      ...options,
       method: 'PUT',
    });
  }

  putOrganizationsBySessionAndOrganization(session, organization, options = {}) {
    return this.makeRequest(`${this.host}/sessions/${encodeURIComponent(session)}/organizations/${encodeURIComponent(organization)}`, {
      ...options,
       method: 'PUT',
    });
  }

  putResetBySession(session, options = {}) {
    return this.makeRequest(`${this.host}/sessions/${encodeURIComponent(session)}/reset`, {
      ...options,
       method: 'PUT',
    });
  }

}
