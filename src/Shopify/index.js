import Products from './products';

export default class ShopifyClient {
  constructor(host, auth, headers) {
    this.products = new Products(host, auth, headers);
  }
}
