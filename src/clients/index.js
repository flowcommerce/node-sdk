import Attributes from './attributes';
import Catalogs from './catalogs';
import Experiences from './experiences';
import Items from './items';
import Orders from './orders';
import Subcatalogs from './subcatalogs';
import SubcatalogItems from './subcatalog-items';
import ItemFunctions from './item-functions';
import OrganizationCurrencySettings from './organization-currency-settings';
import Rates from './rates';
import SpotRates from './spot-rates';
import Duties from './duties';
import HarmonizationSettings from './harmonization-settings';
import HarmonizedItems from './harmonized-items';
import HarmonizedItemDuties from './harmonized-item-duties';
import HarmonizedLandedCosts from './harmonized-landed-costs';
import Hs10 from './hs10';
import Hs6 from './hs6';
import Taxes from './taxes';
import Authorizations from './authorizations';
import Captures from './captures';
import Cards from './cards';
import Refunds from './refunds';
import Bookings from './bookings';
import Carriers from './carriers';
import CarrierAccounts from './carrier-accounts';
import Centers from './centers';
import DeliveryWindows from './delivery-windows';
import InventoryRules from './inventory-rules';
import InventorySnapshots from './inventory-snapshots';
import InventoryUpdates from './inventory-updates';
import Labels from './labels';
import LabelEvents from './label-events';
import Lanes from './lanes';
import Quotes from './quotes';
import Ratecards from './ratecards';
import RatecardEstimates from './ratecard-estimates';
import RatecardLanes from './ratecard-lanes';
import RatecardRates from './ratecard-rates';
import Services from './services';
import Shipments from './shipments';
import ShipmentLabels from './shipment-labels';
import Tiers from './tiers';
import TierDefaults from './tier-defaults';
import TierRules from './tier-rules';
import Trackings from './trackings';
import Addresses from './addresses';
import Countries from './countries';
import Currencies from './currencies';
import Languages from './languages';
import Regions from './regions';
import Timezones from './timezones';
import Documents from './documents';
import EmailVerifications from './email-verifications';
import Healthchecks from './healthchecks';
import Invitations from './invitations';
import Memberships from './memberships';
import Organizations from './organizations';
import OrganizationAuthorizations from './organization-authorizations';
import PasswordResetForms from './password-reset-forms';
import Suggestions from './suggestions';
import Tokens from './tokens';
import Users from './users';
import Validations from './validations';

export default class ApiClient {
  constructor(opts) {
    let options = opts;
    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }
    this.attributes = new Attributes(options);
    this.catalogs = new Catalogs(options);
    this.experiences = new Experiences(options);
    this.items = new Items(options);
    this.orders = new Orders(options);
    this.subcatalogs = new Subcatalogs(options);
    this.subcatalog_items = new SubcatalogItems(options);
    this.item_functions = new ItemFunctions(options);
    this.organization_currency_settings = new OrganizationCurrencySettings(options);
    this.rates = new Rates(options);
    this.spot_rates = new SpotRates(options);
    this.duties = new Duties(options);
    this.harmonization_settings = new HarmonizationSettings(options);
    this.harmonized_items = new HarmonizedItems(options);
    this.harmonized_item_duties = new HarmonizedItemDuties(options);
    this.harmonized_landed_costs = new HarmonizedLandedCosts(options);
    this.hs10 = new Hs10(options);
    this.hs6 = new Hs6(options);
    this.taxes = new Taxes(options);
    this.authorizations = new Authorizations(options);
    this.captures = new Captures(options);
    this.cards = new Cards(options);
    this.refunds = new Refunds(options);
    this.bookings = new Bookings(options);
    this.carriers = new Carriers(options);
    this.carrier_accounts = new CarrierAccounts(options);
    this.centers = new Centers(options);
    this.delivery_windows = new DeliveryWindows(options);
    this.inventory_rules = new InventoryRules(options);
    this.inventory_snapshots = new InventorySnapshots(options);
    this.inventory_updates = new InventoryUpdates(options);
    this.labels = new Labels(options);
    this.label_events = new LabelEvents(options);
    this.lanes = new Lanes(options);
    this.quotes = new Quotes(options);
    this.ratecards = new Ratecards(options);
    this.ratecard_estimates = new RatecardEstimates(options);
    this.ratecard_lanes = new RatecardLanes(options);
    this.ratecard_rates = new RatecardRates(options);
    this.services = new Services(options);
    this.shipments = new Shipments(options);
    this.shipment_labels = new ShipmentLabels(options);
    this.tiers = new Tiers(options);
    this.tier_defaults = new TierDefaults(options);
    this.tier_rules = new TierRules(options);
    this.trackings = new Trackings(options);
    this.addresses = new Addresses(options);
    this.countries = new Countries(options);
    this.currencies = new Currencies(options);
    this.languages = new Languages(options);
    this.regions = new Regions(options);
    this.timezones = new Timezones(options);
    this.documents = new Documents(options);
    this.email_verifications = new EmailVerifications(options);
    this.healthchecks = new Healthchecks(options);
    this.invitations = new Invitations(options);
    this.memberships = new Memberships(options);
    this.organizations = new Organizations(options);
    this.organization_authorizations = new OrganizationAuthorizations(options);
    this.password_reset_forms = new PasswordResetForms(options);
    this.suggestions = new Suggestions(options);
    this.tokens = new Tokens(options);
    this.users = new Users(options);
    this.validations = new Validations(options);
  }
}
