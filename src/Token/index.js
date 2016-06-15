import Tokens from './tokens';
import Validations from './validations';

export default class TokenClient {
  constructor(host, auth, headers) {
    this.tokens = new Tokens(host, auth, headers);
    this.validations = new Validations(host, auth, headers);
  }
}
