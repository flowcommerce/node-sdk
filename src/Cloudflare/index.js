import DnsRecords from './dns-records';
import Zones from './zones';

export default class CloudflareClient {
  constructor(host, auth, headers) {
    this.dns_records = new DnsRecords(host, auth, headers);
    this.zones = new Zones(host, auth, headers);
  }
}
