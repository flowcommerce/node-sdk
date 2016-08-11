import Client from './client';

export default class RatecardRates extends Client {
  constructor(opts) {
    let options = opts;
    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }
    options.serviceName = 'API';
    super(options);
  }

  get(organization, ratecardId, laneId, options) {
    return this.makeRequest(`${this.host}/${organization}/ratecards/${ratecardId}/lanes/${laneId}/rates`, options);
  }

  post(organization, ratecardId, laneId, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/ratecards/${ratecardId}/lanes/${laneId}/rates`, options);
  }

  getById(organization, ratecardId, laneId, id, options) {
    return this.makeRequest(`${this.host}/${organization}/ratecards/${ratecardId}/lanes/${laneId}/rates/${id}`, options);
  }

  putById(organization, ratecardId, laneId, id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/ratecards/${ratecardId}/lanes/${laneId}/rates/${id}`, options);
  }

  getVersions(organization, ratecardId, laneId, options) {
    return this.makeRequest(`${this.host}/${organization}/ratecards/${ratecardId}/lanes/${laneId}/rates/versions`, options);
  }

}
