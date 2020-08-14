import Client from './client';

export default class SyncRecords extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/sync/records`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/sync/records`, {
      ...options,
       method: 'POST',
    });
  }

  putStreamsAndSystemsAndValuesByStreamKeyAndSystemAndValue(organization, streamKey, system, value, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/sync/records/streams/${encodeURIComponent(streamKey)}/systems/${encodeURIComponent(system)}/values/${encodeURIComponent(value)}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteStreamsAndSystemsAndValuesByStreamKeyAndSystemAndValue(organization, streamKey, system, value, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/sync/records/streams/${encodeURIComponent(streamKey)}/systems/${encodeURIComponent(system)}/values/${encodeURIComponent(value)}`, {
      ...options,
       method: 'DELETE',
    });
  }

  getById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/sync/records/${encodeURIComponent(id)}`, options);
  }

  putById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/sync/records/${encodeURIComponent(id)}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/sync/records/${encodeURIComponent(id)}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
