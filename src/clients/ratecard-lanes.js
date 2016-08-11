import Client from './client';

export default class RatecardLanes extends Client {
  constructor(opts) {
    let options = opts;
    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }
    options.serviceName = 'API';
    super(options);
  }

  get(organization, ratecardId, options) {
    return this.makeRequest(`${this.host}/${organization}/ratecards/${ratecardId}/lanes`, options);
  }

  post(organization, ratecardId, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/ratecards/${ratecardId}/lanes`, options);
  }

  getById(organization, ratecardId, id, options) {
    return this.makeRequest(`${this.host}/${organization}/ratecards/${ratecardId}/lanes/${id}`, options);
  }

  putById(organization, ratecardId, id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/ratecards/${ratecardId}/lanes/${id}`, options);
  }

  getVersions(organization, ratecardId, options) {
    return this.makeRequest(`${this.host}/${organization}/ratecards/${ratecardId}/lanes/versions`, options);
  }

}
