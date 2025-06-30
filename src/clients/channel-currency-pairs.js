import Client from './client';

export default class ChannelCurrencyPairs extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(channelId, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channelId)}/currency/pairs`, options);
  }

}
