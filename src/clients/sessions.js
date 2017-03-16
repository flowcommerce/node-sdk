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
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/sessions/${session}`, options);
  }

  putResetBySession(session, options = {}) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/sessions/${session}/reset`, options);
  }

  postOrganizationsByOrganization(organization, options = {}) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/sessions/organizations/${organization}`, options);
  }

}
