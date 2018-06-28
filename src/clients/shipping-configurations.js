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
    return this.makeRequest(`${this.host}/${organization}/shipping/configuration`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/shipping/configuration`, {
      ...options,
       method: 'POST',
    });
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/shipping/configuration/versions`, options);
  }

  getByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/shipping/configuration/${key}`, options);
  }

  putByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/shipping/configuration/${key}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/shipping/configuration/${key}`, {
      ...options,
       method: 'DELETE',
    });
  }

  getLanesByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/shipping/configuration/${key}/lanes`, options);
  }

  postLanesByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/shipping/configuration/${key}/lanes`, {
      ...options,
       method: 'POST',
    });
  }

  getLanesAndVersionsByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/shipping/configuration/${key}/lanes/versions`, options);
  }

  getLanesByKeyAndId(organization, key, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/shipping/configuration/${key}/lanes/${id}`, options);
  }

  putLanesByKeyAndId(organization, key, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/shipping/configuration/${key}/lanes/${id}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteLanesByKeyAndId(organization, key, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/shipping/configuration/${key}/lanes/${id}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
