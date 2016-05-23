import Items from './items';

export default class SearchClient {
  constructor(host, auth, headers) {
    this.items = new Items(host, auth, headers);
  }
}
