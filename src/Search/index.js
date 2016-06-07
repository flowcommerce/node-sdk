import Documents from './documents';

export default class SearchClient {
  constructor(host, auth, headers) {
    this.documents = new Documents(host, auth, headers);
  }
}
