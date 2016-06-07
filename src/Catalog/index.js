import Catalogs from './catalogs';
import Functions from './functions';
import Items from './items';
import Subcatalogs from './subcatalogs';
import SubcatalogItems from './subcatalog-items';

export default class CatalogClient {
  constructor(host, auth, headers) {
    this.catalogs = new Catalogs(host, auth, headers);
    this.functions = new Functions(host, auth, headers);
    this.items = new Items(host, auth, headers);
    this.subcatalogs = new Subcatalogs(host, auth, headers);
    this.subcatalog_items = new SubcatalogItems(host, auth, headers);
  }
}
