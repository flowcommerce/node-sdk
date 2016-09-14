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
import HarmonizedCategories from './harmonized-categories';
import HarmonizedItems from './harmonized-items';
import HarmonizedItemDuties from './harmonized-item-duties';
import HarmonizedLandedCosts from './harmonized-landed-costs';
import Hs10 from './hs10';
import Hs6 from './hs6';
import Taxes from './taxes';
import Authorizations from './authorizations';
import Captures from './captures';
import Cards from './cards';
import PublicKeys from './public-keys';
import Refunds from './refunds';
import Carriers from './carriers';
import Centers from './centers';
import DeliveryWindows from './delivery-windows';
import InventoryRules from './inventory-rules';
import InventorySnapshots from './inventory-snapshots';
import InventoryUpdates from './inventory-updates';
import Labels from './labels';
import LabelEvents from './label-events';
import Quotes from './quotes';
import Services from './services';
import ShippingLabels from './shipping-labels';
import Tiers from './tiers';
import TierDefaults from './tier-defaults';
import TierRules from './tier-rules';
import Trackings from './trackings';
import Webhooks from './webhooks';
import WebhookRequests from './webhook-requests';
import Addresses from './addresses';
import CountryDefaults from './country-defaults';
import Timezones from './timezones';
import Countries from './countries';
import Currencies from './currencies';
import Languages from './languages';
import Regions from './regions';
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


const enums = {
  authorizationDeclineCode: ['expired', 'invalid_number', 'invalid_expiration', 'no_account', 'avs', 'cvv', 'fraud', 'duplicate', 'unknown'],
  authorizationStatus: ['pending', 'pending_call_bank', 'authorized', 'declined', 'voided'],
  avsCode: ['match', 'partial', 'unsupported', 'no_match'],
  calendar: ['weekdays', 'everyday'],
  capability: ['crossdock'],
  captureDeclineCode: ['expired', 'unknown'],
  cardType: ['american_express', 'china_union_pay', 'dankort', 'diners_club', 'discover', 'jcb', 'maestro', 'mastercard', 'visa'],
  changeType: ['insert', 'update', 'delete'],
  cvvCode: ['match', 'suspicious', 'unsupported', 'no_match'],
  deliveredDuty: ['paid', 'unpaid', 'choice'],
  environment: ['sandbox', 'production'],
  eventType: ['catalog_upserted', 'catalog_deleted', 'subcatalog_upserted', 'subcatalog_deleted', 'catalog_item_upserted', 'catalog_item_deleted', 'subcatalog_item_upserted', 'subcatalog_item_deleted', 'flow_currency_setting_deleted', 'flow_currency_setting_upserted', 'rate_deleted', 'rate_upserted', 'spot_rate_deleted', 'spot_rate_upserted', 'organization_currency_setting_deleted', 'organization_currency_setting_upserted', 'contracted_rate_upserted', 'experience_deleted', 'experience_upserted', 'item_margin_deleted', 'item_margin_upserted', 'hs6_code_upserted', 'hs6_code_deleted', 'hs10_code_upserted', 'hs10_code_deleted', 'localized_item_upserted', 'localized_item_deleted', 'organization_upserted', 'organization_deleted', 'tracking_label_event_upserted'],
  exceptionType: ['open', 'closed'],
  holidayCalendar: ['us_bank_holidays', 'jewish_holidays'],
  levyComponent: ['goods', 'duty', 'insurance', 'freight', 'vat'],
  levyStrategy: ['minimum', 'average', 'maximum'],
  localizedPriceKey: ['price', 'subtotal', 'vat', 'duty', 'discount', 'shipping', 'total'],
  marginType: ['fixed', 'percent'],
  measurementSystem: ['imperial', 'metric'],
  method: ['post'],
  pricingLevySetting: ['included', 'displayed', 'ignored'],
  queryType: ['exclusion', 'inclusion'],
  role: ['admin', 'member'],
  roundingMethod: ['up', 'down', 'nearest'],
  roundingType: ['pattern', 'multiple'],
  scheduleExceptionStatus: ['Open', 'Closed'],
  shipmentIntegrationType: ['direct', 'information', 'preadvice'],
  sortDirection: ['ascending', 'descending'],
  strategy: ['range', 'from', 'to'],
  subcatalogItemStatus: ['excluded', 'included', 'restricted'],
  tierStrategy: ['fastest', 'lowest_cost'],
  trackingStatus: ['pending', 'info_received', 'in_transit', 'out_for_delivery', 'attempt_fail', 'delivered', 'exception', 'expired'],
  unitOfMeasurement: ['millimeter', 'centimeter', 'inch', 'foot', 'cubic_inch', 'cubic_meter', 'gram', 'kilogram', 'meter', 'ounce', 'pound'],
  unitOfTime: ['day', 'hour', 'minute'],
  updatePolicy: ['auto', 'queue', 'discard'],
  updateType: ['change', 'set'],
  valueAddedService: ['Hazardous Material'],
  visibility: ['public', 'private'],
  webhookRequestStatus: ['pending', 'success', 'failure'],
};


export default class ApiClient {
  constructor(opts) {
    let options = opts;
    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    this.enums = enums;

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
    this.harmonized_categories = new HarmonizedCategories(options);
    this.harmonized_items = new HarmonizedItems(options);
    this.harmonized_item_duties = new HarmonizedItemDuties(options);
    this.harmonized_landed_costs = new HarmonizedLandedCosts(options);
    this.hs10 = new Hs10(options);
    this.hs6 = new Hs6(options);
    this.taxes = new Taxes(options);
    this.authorizations = new Authorizations(options);
    this.captures = new Captures(options);
    this.cards = new Cards(options);
    this.public_keys = new PublicKeys(options);
    this.refunds = new Refunds(options);
    this.carriers = new Carriers(options);
    this.centers = new Centers(options);
    this.delivery_windows = new DeliveryWindows(options);
    this.inventory_rules = new InventoryRules(options);
    this.inventory_snapshots = new InventorySnapshots(options);
    this.inventory_updates = new InventoryUpdates(options);
    this.labels = new Labels(options);
    this.label_events = new LabelEvents(options);
    this.quotes = new Quotes(options);
    this.services = new Services(options);
    this.shipping_labels = new ShippingLabels(options);
    this.tiers = new Tiers(options);
    this.tier_defaults = new TierDefaults(options);
    this.tier_rules = new TierRules(options);
    this.trackings = new Trackings(options);
    this.webhooks = new Webhooks(options);
    this.webhook_requests = new WebhookRequests(options);
    this.addresses = new Addresses(options);
    this.country_defaults = new CountryDefaults(options);
    this.timezones = new Timezones(options);
    this.countries = new Countries(options);
    this.currencies = new Currencies(options);
    this.languages = new Languages(options);
    this.regions = new Regions(options);
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
