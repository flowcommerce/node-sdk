import Client from './client';

export default class ChannelStatements extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(channel, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channel)}/billing/statements`, options);
  }

  getById(channel, id, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channel)}/billing/statements/${encodeURIComponent(id)}`, options);
  }

}
