import Client from './client';

export default class Products extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'Shopify',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getProductsjson(options) {
    return this.makeRequest(`${this.host}/admin/products.json`, options);
  }

  getProductsByIdjson(id, options) {
    return this.makeRequest(`${this.host}/admin/products/${id.json}`, options);
  }

  postProductsjson(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/admin/products.json`, options);
  }

  deleteProductsByIdjson(id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/admin/products/${id.json}`, options);
  }

}
