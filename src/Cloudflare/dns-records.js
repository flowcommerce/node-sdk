import Client from './client';

export default class DnsRecords extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'cloudflare',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(zoneIdentifier, options) {
    return this.makeRequest(`${this.host}/zones/${zoneIdentifier}/dns_records`, options);
  }

  getById(zoneIdentifier, id, options) {
    return this.makeRequest(`${this.host}/zones/${zoneIdentifier}/dns_records/${id}`, options);
  }

  post(zoneIdentifier, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/zones/${zoneIdentifier}/dns_records`, options);
  }

  putById(zoneIdentifier, id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/zones/${zoneIdentifier}/dns_records/${id}`, options);
  }

}
