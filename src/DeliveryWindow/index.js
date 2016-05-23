import DeliveryWindows from './delivery-windows';

export default class DeliveryWindowClient {
  constructor(host, auth, headers) {
    this.delivery_windows = new DeliveryWindows(host, auth, headers);
  }
}
