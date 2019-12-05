import Client from './client';

export default class FtpFolders extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/ftp/folders`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/ftp/folders`, {
      ...options,
       method: 'POST',
    });
  }

  getById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/ftp/folders/${encodeURIComponent(id)}`, options);
  }

  deleteById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/ftp/folders/${encodeURIComponent(id)}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
