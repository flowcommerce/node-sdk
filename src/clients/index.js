import Allocations from './allocations';
import Attributes from './attributes';
import Catalogs from './catalogs';
import CreditPayments from './credit-payments';
import Experiences from './experiences';
import ExperienceDefaults from './experience-defaults';
import Items from './items';
import Orders from './orders';
import OrderEstimates from './order-estimates';
import OrderIdentifiers from './order-identifiers';
import Organizations from './organizations';
import Queries from './queries';
import Subcatalogs from './subcatalogs';
import SubcatalogItems from './subcatalog-items';
import Targetings from './targetings';
import TargetingItems from './targeting-items';
import ItemFunctions from './item-functions';
import OrganizationCurrencySettings from './organization-currency-settings';
import Rates from './rates';
import HarmonizationSettings from './harmonization-settings';
import HarmonizedCategories from './harmonized-categories';
import HarmonizedItems from './harmonized-items';
import HarmonizedItemDuties from './harmonized-item-duties';
import HarmonizedLandedCosts from './harmonized-landed-costs';
import Hs10 from './hs10';
import Hs6 from './hs6';
import HsCodes from './hs-codes';
import Authorizations from './authorizations';
import Captures from './captures';
import Cards from './cards';
import Payments from './payments';
import PublicKeys from './public-keys';
import Refunds from './refunds';
import Centers from './centers';
import DeliveryWindows from './delivery-windows';
import InventoryRules from './inventory-rules';
import InventorySnapshots from './inventory-snapshots';
import InventoryUpdates from './inventory-updates';
import Manifests from './manifests';
import Quotes from './quotes';
import Returns from './returns';
import ShippingLabels from './shipping-labels';
import ShippingNotifications from './shipping-notifications';
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
import Locales from './locales';
import PaymentMethods from './payment-methods';
import Provinces from './provinces';
import Regions from './regions';
import Documents from './documents';
import EmailVerifications from './email-verifications';
import Exports from './exports';
import Feeds from './feeds';
import Healthchecks from './healthchecks';
import Imports from './imports';
import Invitations from './invitations';
import Links from './links';
import Memberships from './memberships';
import OrganizationAuthorizations from './organization-authorizations';
import OrganizationTokens from './organization-tokens';
import PartnerTokens from './partner-tokens';
import PasswordResetForms from './password-reset-forms';
import ScheduledExports from './scheduled-exports';
import Sessions from './sessions';
import SessionAuthorizations from './session-authorizations';
import Suggestions from './suggestions';
import Tokens from './tokens';
import TokenValidations from './token-validations';
import Uploads from './uploads';
import Users from './users';


const enums = {
  adjustmentReasonKey: ['duty_deminimis', 'vat_deminimis'],
  attributeDataType: ['decimal', 'string'],
  attributeIntent: ['fulfillment_method', 'price', 'taxability'],
  authorizationDeclineCode: ['expired', 'invalid_name', 'invalid_number', 'invalid_expiration', 'no_account', 'avs', 'cvv', 'fraud', 'duplicate', 'not_supported', 'unknown'],
  authorizationDeleteErrorCode: ['expired', 'captured', 'unknown'],
  authorizationOption: ['store_card'],
  authorizationStatus: ['pending', 'pending_call_bank', 'authorized', 'declined', 'voided'],
  avsCode: ['match', 'partial', 'unsupported', 'no_match'],
  calendar: ['weekdays', 'everyday'],
  capability: ['crossdock'],
  captureDeclineCode: ['expired', 'insufficient_funds', 'unknown'],
  cardErrorCode: ['invalid_address', 'invalid_name', 'invalid_number', 'invalid_expiration', 'avs', 'cvv', 'fraud', 'unknown'],
  cardType: ['american_express', 'cartes_bancaires', 'china_union_pay', 'dankort', 'diners_club', 'discover', 'jcb', 'maestro', 'mastercard', 'visa'],
  changeType: ['insert', 'update', 'delete'],
  creditPaymentErrorCode: ['generic_error', 'invalid_order_number', 'invalid_currency', 'invalid_description', 'duplicate', 'amount_must_be_positive', 'amount_exceeds_balance'],
  cvvCode: ['match', 'suspicious', 'unsupported', 'no_match'],
  dayOfWeek: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
  deliveredDuty: ['paid', 'unpaid'],
  direction: ['outbound', 'return'],
  environment: ['sandbox', 'production'],
  eventType: ['attribute_upserted', 'attribute_deleted', 'catalog_upserted', 'catalog_deleted', 'subcatalog_upserted', 'subcatalog_deleted', 'catalog_item_upserted', 'catalog_item_deleted', 'subcatalog_item_upserted', 'subcatalog_item_deleted', 'rate_deleted', 'rate_upserted', 'available_promotions_upserted', 'available_promotions_deleted', 'allocation_deleted', 'allocation_upserted', 'experience_deleted', 'experience_upserted', 'item_margin_deleted', 'item_margin_upserted', 'item_sales_margin_deleted', 'item_sales_margin_upserted', 'label_format_deleted', 'label_format_upserted', 'order_deleted', 'order_upserted', 'order_identifier_deleted', 'order_identifier_upserted', 'pricing_deleted', 'pricing_upserted', 'tier_upserted', 'tier_deleted', 'hs6_code_upserted', 'hs6_code_deleted', 'hs10_code_upserted', 'hs10_code_deleted', 'item_origin_upserted', 'item_origin_deleted', 'harmonized_item_upserted', 'harmonized_item_deleted', 'snapshot_upserted', 'snapshot_deleted', 'label_upserted', 'notification_upserted', 'notification_deleted', 'localized_item_upserted', 'localized_item_upserted_v2', 'localized_item_deleted', 'localized_item_deleted_v2', 'localized_item_snapshot', 'localized_item_snapshot_v2', 'membership_upserted', 'membership_deleted', 'organization_upserted', 'organization_deleted', 'authorization_upserted', 'authorization_deleted', 'authorization_deleted_v2', 'authorization_status_changed', 'card_authorization_upserted', 'card_authorization_upserted_v2', 'online_authorization_upserted', 'online_authorization_upserted_v2', 'capture_upserted', 'capture_upserted_v2', 'card_upserted', 'card_upserted_v2', 'card_deleted', 'payment_upserted', 'payment_deleted', 'refund_upserted', 'refund_upserted_v2', 'return_upserted', 'return_deleted', 'targeting_item_upserted', 'targeting_item_deleted', 'tracking_label_event_upserted'],
  exceptionType: ['open', 'closed'],
  experiencePaymentMethodTag: ['display'],
  exportStatus: ['created', 'processing', 'completed', 'failed'],
  flowFieldName: ['item-number', 'sku-attribute', 'product_id-attribute'],
  fulfillmentMethodType: ['fulfillment_method'],
  fulfillmentMethodValue: ['digital', 'physical'],
  genericErrorCode: ['generic_error', 'client_error', 'server_error'],
  holidayCalendar: ['us_bank_holidays', 'jewish_holidays'],
  importType: ['harmonization_codes', 'catalog_items'],
  includedLevyKey: ['duty', 'vat', 'vat_and_duty'],
  incomingFeedFormat: ['google-xml', 'google-sheet'],
  incomingFieldName: ['id', 'mpn'],
  invitationErrorCode: ['expired', 'invalid_email'],
  levyComponent: ['goods', 'duty', 'insurance', 'freight', 'vat'],
  levyStrategy: ['minimum', 'average', 'maximum'],
  manifestType: ['all', 'list'],
  marginType: ['fixed', 'percent'],
  measurementSystem: ['imperial', 'metric'],
  method: ['post'],
  orderErrorCode: ['generic_error', 'order_item_not_available', 'order_identifier_error', 'domestic_shipping_unavailable'],
  orderPaymentType: ['card', 'online', 'credit', 'cash_on_delivery'],
  orderPriceDetailComponentKey: ['adjustment', 'vat_deminimis', 'duty_deminimis', 'duties_item_price', 'duties_freight', 'duties_insurance', 'vat_item_price', 'vat_freight', 'vat_insurance', 'vat_duties_item_price', 'vat_duties_freight', 'vat_duties_insurance', 'item_price', 'rounding', 'insurance', 'shipping', 'order_discount', 'subtotal_percent_sales_margin', 'subtotal_vat_percent_sales_margin', 'subtotal_duty_percent_sales_margin', 'vat_subsidy', 'duty_subsidy'],
  orderPriceDetailKey: ['adjustment', 'subtotal', 'vat', 'duty', 'shipping', 'insurance', 'discount'],
  orderStatus: ['open', 'submitted'],
  organizationPaymentMethodTag: ['deny'],
  outgoingFeedFormat: ['facebook-xml', 'google-tsv', 'google-xml', 'criteo-xml'],
  paymentErrorCode: ['duplicate', 'invalid_amount', 'invalid_currency', 'invalid_method', 'invalid_order', 'invalid_customer', 'invalid_destination', 'unknown'],
  paymentMethodType: ['card', 'online', 'offline'],
  priceDetailComponentKey: ['base_price', 'discount', 'currency_margin', 'percent_item_margin', 'fixed_item_margin', 'duties_item_price', 'duties_added_margin', 'duties_rounding', 'duties_deminimis', 'vat_item_price', 'vat_added_margin', 'vat_rounding', 'vat_duties_item_price', 'vat_duties_added_margin', 'vat_duties_rounding', 'vat_deminimis', 'item_price_percent_sales_margin', 'margins_percent_sales_margin', 'rounding_percent_sales_margin', 'vat_percent_sales_margin', 'vat_duty_percent_sales_margin', 'duty_percent_sales_margin'],
  priceDetailKey: ['item_price', 'margins', 'vat', 'duty', 'rounding', 'adjustment'],
  pricingLevySetting: ['included', 'displayed', 'ignored'],
  promotionTriggerType: ['order_subtotal'],
  provinceType: ['city', 'dependency', 'district', 'emirate', 'entity', 'municipality', 'outlying_area', 'parish', 'province', 'state', 'territory', 'other'],
  queryType: ['exclusion', 'inclusion'],
  quoteErrorCode: ['generic_error', 'items_not_available'],
  refundDeclineCode: ['expired', 'insufficient_funds', 'unknown'],
  returnStatus: ['open', 'refunded'],
  role: ['admin', 'member'],
  roundingMethod: ['up', 'down', 'nearest'],
  roundingType: ['pattern', 'multiple'],
  scheduleExceptionStatus: ['Open', 'Closed'],
  shipmentIntegrationType: ['direct', 'information', 'preadvice'],
  sortDirection: ['ascending', 'descending'],
  strategy: ['range', 'from', 'to'],
  subcatalogItemStatus: ['excluded', 'included', 'restricted'],
  taxabilityType: ['tax_rule'],
  taxabilityValue: ['exempt'],
  tierDirection: ['outbound', 'return'],
  tierStrategy: ['fastest', 'lowest_cost'],
  trackingNumberType: ['flow', 'carrier'],
  trackingStatus: ['label_created', 'pending', 'info_received', 'in_transit', 'out_for_delivery', 'attempt_fail', 'delivered', 'exception', 'expired'],
  unitOfMeasurement: ['millimeter', 'centimeter', 'inch', 'foot', 'cubic_inch', 'cubic_meter', 'gram', 'kilogram', 'meter', 'ounce', 'pound'],
  unitOfTime: ['year', 'month', 'week', 'day', 'hour', 'minute'],
  updatePolicy: ['auto', 'queue', 'discard'],
  updateType: ['change', 'set'],
  userStatus: ['pending', 'active', 'inactive'],
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

    this.allocations = new Allocations(options);
    this.attributes = new Attributes(options);
    this.catalogs = new Catalogs(options);
    this.creditPayments = new CreditPayments(options);
    this.experiences = new Experiences(options);
    this.experienceDefaults = new ExperienceDefaults(options);
    this.items = new Items(options);
    this.orders = new Orders(options);
    this.orderEstimates = new OrderEstimates(options);
    this.orderIdentifiers = new OrderIdentifiers(options);
    this.organizations = new Organizations(options);
    this.queries = new Queries(options);
    this.subcatalogs = new Subcatalogs(options);
    this.subcatalogItems = new SubcatalogItems(options);
    this.targetings = new Targetings(options);
    this.targetingItems = new TargetingItems(options);
    this.itemFunctions = new ItemFunctions(options);
    this.organizationCurrencySettings = new OrganizationCurrencySettings(options);
    this.rates = new Rates(options);
    this.harmonizationSettings = new HarmonizationSettings(options);
    this.harmonizedCategories = new HarmonizedCategories(options);
    this.harmonizedItems = new HarmonizedItems(options);
    this.harmonizedItemDuties = new HarmonizedItemDuties(options);
    this.harmonizedLandedCosts = new HarmonizedLandedCosts(options);
    this.hs10 = new Hs10(options);
    this.hs6 = new Hs6(options);
    this.hsCodes = new HsCodes(options);
    this.authorizations = new Authorizations(options);
    this.captures = new Captures(options);
    this.cards = new Cards(options);
    this.payments = new Payments(options);
    this.publicKeys = new PublicKeys(options);
    this.refunds = new Refunds(options);
    this.centers = new Centers(options);
    this.deliveryWindows = new DeliveryWindows(options);
    this.inventoryRules = new InventoryRules(options);
    this.inventorySnapshots = new InventorySnapshots(options);
    this.inventoryUpdates = new InventoryUpdates(options);
    this.manifests = new Manifests(options);
    this.quotes = new Quotes(options);
    this.returns = new Returns(options);
    this.shippingLabels = new ShippingLabels(options);
    this.shippingNotifications = new ShippingNotifications(options);
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
    this.locales = new Locales(options);
    this.paymentMethods = new PaymentMethods(options);
    this.provinces = new Provinces(options);
    this.regions = new Regions(options);
    this.documents = new Documents(options);
    this.emailVerifications = new EmailVerifications(options);
    this.exports = new Exports(options);
    this.feeds = new Feeds(options);
    this.healthchecks = new Healthchecks(options);
    this.imports = new Imports(options);
    this.invitations = new Invitations(options);
    this.links = new Links(options);
    this.memberships = new Memberships(options);
    this.organizationAuthorizations = new OrganizationAuthorizations(options);
    this.organizationTokens = new OrganizationTokens(options);
    this.partnerTokens = new PartnerTokens(options);
    this.passwordResetForms = new PasswordResetForms(options);
    this.scheduledExports = new ScheduledExports(options);
    this.sessions = new Sessions(options);
    this.sessionAuthorizations = new SessionAuthorizations(options);
    this.suggestions = new Suggestions(options);
    this.tokens = new Tokens(options);
    this.tokenValidations = new TokenValidations(options);
    this.uploads = new Uploads(options);
    this.users = new Users(options);
  }
}
