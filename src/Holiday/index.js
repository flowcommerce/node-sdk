import Holidays from './holidays';

export default class HolidayClient {
  constructor(host, auth, headers) {
    this.holidays = new Holidays(host, auth, headers);
  }
}
