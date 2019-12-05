import Client from './client';

export default class ShippingConfigurations extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shipping/configuration`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shipping/configuration`, {
      ...options,
       method: 'POST',
    });
  }

  getByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shipping/configuration/${encodeURIComponent(key)}`, options);
  }

  putByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shipping/configuration/${encodeURIComponent(key)}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shipping/configuration/${encodeURIComponent(key)}`, {
      ...options,
       method: 'DELETE',
    });
  }

  getLanesByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shipping/configuration/${encodeURIComponent(key)}/lanes`, options);
  }

  postLanesByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shipping/configuration/${encodeURIComponent(key)}/lanes`, {
      ...options,
       method: 'POST',
    });
  }

  getLanesByKeyAndId(organization, key, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shipping/configuration/${encodeURIComponent(key)}/lanes/${encodeURIComponent(id)}`, options);
  }

  putLanesByKeyAndId(organization, key, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shipping/configuration/${encodeURIComponent(key)}/lanes/${encodeURIComponent(id)}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteLanesByKeyAndId(organization, key, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shipping/configuration/${encodeURIComponent(key)}/lanes/${encodeURIComponent(id)}`, {
      ...options,
       method: 'DELETE',
    });
  }

  getLanesAndDefaultsAndTiersByKeyAndId(organization, key, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shipping/configuration/${encodeURIComponent(key)}/lanes/${encodeURIComponent(id)}/defaults/tiers`, options);
  }

  putLanesAndDefaultsAndTiersByKeyAndId(organization, key, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shipping/configuration/${encodeURIComponent(key)}/lanes/${encodeURIComponent(id)}/defaults/tiers`, {
      ...options,
       method: 'PUT',
    });
  }

}
