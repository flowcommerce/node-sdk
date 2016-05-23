import Client from './client';

export default class EnvVars extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'travis-ci',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/settings/env_vars`, options);
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/settings/env_vars`, options);
  }

  patchById(id, options) {
    Object.assign(options, { method: 'PATCH' });
    return this.makeRequest(`${this.host}/settings/env_vars/${id}`, options);
  }

  deleteById(id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/settings/env_vars/${id}`, options);
  }

}
