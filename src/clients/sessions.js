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

  postOrganizationsByOrganization(organization, options = {}) {
    return this.makeRequest(`${this.host}/sessions/organizations/${organization}`, {
      ...options,
       method: 'POST',
    });
  }

  getBySession(session, options = {}) {
    return this.makeRequest(`${this.host}/sessions/${session}`, options);
  }

  putBySession(session, options = {}) {
    return this.makeRequest(`${this.host}/sessions/${session}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteBySession(session, options = {}) {
    return this.makeRequest(`${this.host}/sessions/${session}`, {
      ...options,
       method: 'DELETE',
    });
  }

  putOrganizationsBySessionAndOrganization(session, organization, options = {}) {
    return this.makeRequest(`${this.host}/sessions/${session}/organizations/${organization}`, {
      ...options,
       method: 'PUT',
    });
  }

  putResetBySession(session, options = {}) {
    return this.makeRequest(`${this.host}/sessions/${session}/reset`, {
      ...options,
       method: 'PUT',
    });
  }

}
