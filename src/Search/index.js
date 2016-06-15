import Documents from './documents';
import Suggestions from './suggestions';

export default class SearchClient {
  constructor(host, auth, headers) {
    this.documents = new Documents(host, auth, headers);
    this.suggestions = new Suggestions(host, auth, headers);
  }
}
