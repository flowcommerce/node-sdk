import Client from './client';

export default class AwsActors extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'delta',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  postByBuildId(buildId, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/actors/aws/${buildId}`, options);
  }

}
