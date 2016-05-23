import Tokens from './tokens';

export default class TokenClient {
  constructor(host, auth, headers) {
    this.tokens = new Tokens(host, auth, headers);
  }
}
