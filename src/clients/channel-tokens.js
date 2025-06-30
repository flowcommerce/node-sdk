import Client from './client';

export default class ChannelTokens extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(channelId, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channelId)}/tokens`, options);
  }

  getById(channelId, id, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channelId)}/tokens/${encodeURIComponent(id)}`, options);
  }

  putById(channelId, id, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channelId)}/tokens/${encodeURIComponent(id)}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteById(channelId, id, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channelId)}/tokens/${encodeURIComponent(id)}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
