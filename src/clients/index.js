import Attributes from './attributes';
import Catalogs from './catalogs';
import Experiences from './experiences';
import Items from './items';
import Orders from './orders';
import OrderEstimates from './order-estimates';
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
import Quotes from './quotes';
import QuoteEstimates from './quote-estimates';
import Services from './services';
import ShippingLabels from './shipping-labels';
import Tiers from './tiers';
import TierDefaults from './tier-defaults';
import TierRules from './tier-rules';
import Trackings from './trackings';
import TrackingEvents from './tracking-events';
import TrackingLabels from './tracking-labels';
import Webhooks from './webhooks';
import WebhookDeliveries from './webhook-deliveries';
import Addresses from './addresses';
import CountryDefaults from './country-defaults';
import Timezones from './timezones';
import Countries from './countries';
import Currencies from './currencies';
import Languages from './languages';
import Regions from './regions';
import Documents from './documents';
import EmailVerifications from './email-verifications';
import Exports from './exports';
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
  eventType: ['catalog_upserted', 'catalog_deleted', 'subcatalog_upserted', 'subcatalog_deleted', 'catalog_item_upserted', 'catalog_item_deleted', 'subcatalog_item_upserted', 'subcatalog_item_deleted', 'flow_currency_setting_deleted', 'flow_currency_setting_upserted', 'rate_deleted', 'rate_upserted', 'spot_rate_deleted', 'spot_rate_upserted', 'organization_currency_setting_deleted', 'organization_currency_setting_upserted', 'contracted_rate_upserted', 'experience_deleted', 'experience_upserted', 'item_margin_deleted', 'item_margin_upserted', 'order_deleted', 'order_upserted', 'order_booking_deleted', 'order_booking_upserted', 'hs6_code_upserted', 'hs6_code_deleted', 'hs10_code_upserted', 'hs10_code_deleted', 'label_upserted', 'localized_item_upserted', 'localized_item_deleted', 'localized_item_snapshot', 'organization_upserted', 'organization_deleted', 'authorization_upserted', 'authorization_deleted', 'capture_upserted', 'card_upserted', 'card_deleted', 'refund_upserted', 'tracking_label_event_upserted'],
  exceptionType: ['open', 'closed'],
  exportStatus: ['created', 'processing', 'completed', 'failed'],
  holidayCalendar: ['us_bank_holidays', 'jewish_holidays'],
  levyComponent: ['goods', 'duty', 'insurance', 'freight', 'vat'],
  levyStrategy: ['minimum', 'average', 'maximum'],
  localizedPriceKey: ['price', 'subtotal', 'vat', 'duty', 'discount', 'shipping', 'total'],
  marginType: ['fixed', 'percent'],
  measurementSystem: ['imperial', 'metric'],
  method: ['post'],
  orderPriceDetailComponentKey: ['adjustment', 'tax_deminimus', 'duty_deminimus', 'duties_item_price', 'duties_freight', 'duties_insurance', 'vat_item_price', 'vat_freight', 'vat_insurance', 'vat_duties_item_price', 'vat_duties_freight', 'vat_duties_insurance', 'item_price', 'rounding', 'insurance', 'shipping', 'order_discount'],
  orderPriceDetailKey: ['adjustment', 'subtotal', 'vat', 'duty', 'shipping', 'insurance', 'discount'],
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
  webhookStatus: ['pending', 'success', 'failure'],
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
    this.orderEstimates = new OrderEstimates(options);
    this.subcatalogs = new Subcatalogs(options);
    this.subcatalogItems = new SubcatalogItems(options);
    this.itemFunctions = new ItemFunctions(options);
    this.organizationCurrencySettings = new OrganizationCurrencySettings(options);
    this.rates = new Rates(options);
    this.spotRates = new SpotRates(options);
    this.duties = new Duties(options);
    this.harmonizationSettings = new HarmonizationSettings(options);
    this.harmonizedCategories = new HarmonizedCategories(options);
    this.harmonizedItems = new HarmonizedItems(options);
    this.harmonizedItemDuties = new HarmonizedItemDuties(options);
    this.harmonizedLandedCosts = new HarmonizedLandedCosts(options);
    this.hs10 = new Hs10(options);
    this.hs6 = new Hs6(options);
    this.taxes = new Taxes(options);
    this.authorizations = new Authorizations(options);
    this.captures = new Captures(options);
    this.cards = new Cards(options);
    this.publicKeys = new PublicKeys(options);
    this.refunds = new Refunds(options);
    this.carriers = new Carriers(options);
    this.centers = new Centers(options);
    this.deliveryWindows = new DeliveryWindows(options);
    this.inventoryRules = new InventoryRules(options);
    this.inventorySnapshots = new InventorySnapshots(options);
    this.inventoryUpdates = new InventoryUpdates(options);
    this.quotes = new Quotes(options);
    this.quoteEstimates = new QuoteEstimates(options);
    this.services = new Services(options);
    this.shippingLabels = new ShippingLabels(options);
    this.tiers = new Tiers(options);
    this.tierDefaults = new TierDefaults(options);
    this.tierRules = new TierRules(options);
    this.trackings = new Trackings(options);
    this.trackingEvents = new TrackingEvents(options);
    this.trackingLabels = new TrackingLabels(options);
    this.webhooks = new Webhooks(options);
    this.webhookDeliveries = new WebhookDeliveries(options);
    this.addresses = new Addresses(options);
    this.countryDefaults = new CountryDefaults(options);
    this.timezones = new Timezones(options);
    this.countries = new Countries(options);
    this.currencies = new Currencies(options);
    this.languages = new Languages(options);
    this.regions = new Regions(options);
    this.documents = new Documents(options);
    this.emailVerifications = new EmailVerifications(options);
    this.exports = new Exports(options);
    this.healthchecks = new Healthchecks(options);
    this.invitations = new Invitations(options);
    this.memberships = new Memberships(options);
    this.organizations = new Organizations(options);
    this.organizationAuthorizations = new OrganizationAuthorizations(options);
    this.passwordResetForms = new PasswordResetForms(options);
    this.suggestions = new Suggestions(options);
    this.tokens = new Tokens(options);
    this.users = new Users(options);
    this.validations = new Validations(options);
  }
}
