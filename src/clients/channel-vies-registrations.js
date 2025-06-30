import Client from './client';

export default class ChannelViesRegistrations extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  post(channelId, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channelId)}/vies/registrations`, {
      ...options,
       method: 'POST',
    });
  }

  putByKey(channelId, key, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channelId)}/vies/registrations/${encodeURIComponent(key)}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteByKey(channelId, key, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channelId)}/vies/registrations/${encodeURIComponent(key)}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
