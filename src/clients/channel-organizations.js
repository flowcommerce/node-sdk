import Client from './client';

export default class ChannelOrganizations extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(channelId, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channelId)}/organizations`, options);
  }

  post(channelId, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channelId)}/organizations`, {
      ...options,
       method: 'POST',
    });
  }

  getByKey(channelId, key, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channelId)}/organizations/${encodeURIComponent(key)}`, options);
  }

  putByKey(channelId, key, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channelId)}/organizations/${encodeURIComponent(key)}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteByKey(channelId, key, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channelId)}/organizations/${encodeURIComponent(key)}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
