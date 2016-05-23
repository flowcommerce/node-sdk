import CardPaymentRequests from './card-payment-requests';

export default class AdyenClient {
  constructor(host, auth, headers) {
    this.card_payment_requests = new CardPaymentRequests(host, auth, headers);
  }
}
