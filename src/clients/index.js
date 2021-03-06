import AddressConfigurations from './address-configurations';
import Allocations from './allocations';
import Attributes from './attributes';
import Catalogs from './catalogs';
import CheckoutAttributes from './checkout-attributes';
import CheckoutItemContents from './checkout-item-contents';
import CreditPayments from './credit-payments';
import DiscountRuleSettings from './discount-rule-settings';
import Experiences from './experiences';
import ExperienceCheckoutSettings from './experience-checkout-settings';
import ExperienceDefaults from './experience-defaults';
import ExperienceLogisticsSettings from './experience-logistics-settings';
import ExperiencePriceConversions from './experience-price-conversions';
import ExperiencePriceFacetConversions from './experience-price-facet-conversions';
import Items from './items';
import ItemFormOverlays from './item-form-overlays';
import Orders from './orders';
import OrderBuilders from './order-builders';
import OrderEstimates from './order-estimates';
import OrderIdentifiers from './order-identifiers';
import OrderNumberGenerators from './order-number-generators';
import OrderPromotions from './order-promotions';
import OrderSummaries from './order-summaries';
import Organizations from './organizations';
import PaymentMethodRules from './payment-method-rules';
import PriceBooks from './price-books';
import PriceBookItems from './price-book-items';
import Subcatalogs from './subcatalogs';
import SubcatalogItems from './subcatalog-items';
import OrganizationCurrencySettings from './organization-currency-settings';
import Rates from './rates';
import HarmonizedCategories from './harmonized-categories';
import HarmonizedLandedCosts from './harmonized-landed-costs';
import Hs10 from './hs10';
import TaxRegistrations from './tax-registrations';
import Authorizations from './authorizations';
import Captures from './captures';
import Cards from './cards';
import CardPaymentSources from './card-payment-sources';
import GatewayAuthenticationData from './gateway-authentication-data';
import Payments from './payments';
import PublicKeys from './public-keys';
import Refunds from './refunds';
import Reversals from './reversals';
import VirtualCards from './virtual-cards';
import VirtualCardCaptures from './virtual-card-captures';
import VirtualCardRefunds from './virtual-card-refunds';
import Centers from './centers';
import DeliveryWindows from './delivery-windows';
import DimensionEstimates from './dimension-estimates';
import InventoryRules from './inventory-rules';
import InventorySnapshots from './inventory-snapshots';
import InventoryUpdates from './inventory-updates';
import Manifests from './manifests';
import Quotes from './quotes';
import Ratecards from './ratecards';
import RatecardEstimates from './ratecard-estimates';
import RatecardLanes from './ratecard-lanes';
import RatecardRates from './ratecard-rates';
import Returns from './returns';
import ShippingConfigurations from './shipping-configurations';
import ShippingConfigurationCopies from './shipping-configuration-copies';
import ShippingLabels from './shipping-labels';
import ShippingNotifications from './shipping-notifications';
import SurchargeSettings from './surcharge-settings';
import Tiers from './tiers';
import Trackings from './trackings';
import TrackingEvents from './tracking-events';
import TrackingLabels from './tracking-labels';
import Webhooks from './webhooks';
import WebhookDeliveries from './webhook-deliveries';
import WebhookSettings from './webhook-settings';
import Addresses from './addresses';
import CountryDefaults from './country-defaults';
import Timezones from './timezones';
import Carriers from './carriers';
import CarrierServices from './carrier-services';
import Countries from './countries';
import Currencies from './currencies';
import Languages from './languages';
import Locales from './locales';
import PaymentMethods from './payment-methods';
import Provinces from './provinces';
import Regions from './regions';
import AbandonedOrderSettings from './abandoned-order-settings';
import B2bCreditMemos from './b2b-credit-memos';
import B2bInvoices from './b2b-invoices';
import CatalogPriceBookItemDocuments from './catalog-price-book-item-documents';
import CheckoutTokens from './checkout-tokens';
import ConsumerInvoices from './consumer-invoices';
import ConsumerInvoiceDocuments from './consumer-invoice-documents';
import CountryPickers from './country-pickers';
import CreditMemos from './credit-memos';
import Customers from './customers';
import CustomerAddressBook from './customer-address-book';
import CustomerAddressBookContacts from './customer-address-book-contacts';
import CustomerBundles from './customer-bundles';
import CustomerPurgeSettings from './customer-purge-settings';
import CustomerTokens from './customer-tokens';
import Documents from './documents';
import EcommercePlatforms from './ecommerce-platforms';
import EmailVerifications from './email-verifications';
import ExclusionRules from './exclusion-rules';
import Exports from './exports';
import FlowRoles from './flow-roles';
import FraudEmailRules from './fraud-email-rules';
import FtpFiles from './ftp-files';
import FtpFolders from './ftp-folders';
import FtpOrganizationSettings from './ftp-organization-settings';
import Fulfillments from './fulfillments';
import Healthchecks from './healthchecks';
import Imports from './imports';
import ImportTemplates from './import-templates';
import Invitations from './invitations';
import PriceRules from './price-rules';
import ItemQuerySuggestions from './item-query-suggestions';
import Links from './links';
import Memberships from './memberships';
import MerchantGiftCardBalances from './merchant-gift-card-balances';
import MerchantGiftCardRedemptions from './merchant-gift-card-redemptions';
import MerchantGiftCardReversals from './merchant-gift-card-reversals';
import OrganizationAuthorizations from './organization-authorizations';
import OrganizationDefaultConfigurations from './organization-default-configurations';
import OrganizationTokens from './organization-tokens';
import PartnerTokens from './partner-tokens';
import PasswordResetForms from './password-reset-forms';
import PermissionChecks from './permission-checks';
import ScheduledExports from './scheduled-exports';
import Sessions from './sessions';
import SessionAuthorizations from './session-authorizations';
import ShopifyCarts from './shopify-carts';
import ShopifyCartConversions from './shopify-cart-conversions';
import ShopifyLocalizationSettings from './shopify-localization-settings';
import ShopifyLocationFlowCenterMappings from './shopify-location-flow-center-mappings';
import ShopifyPrivateApps from './shopify-private-apps';
import ShopifySyncStatuses from './shopify-sync-statuses';
import Suggestions from './suggestions';
import SyncPendingRecords from './sync-pending-records';
import SyncRecords from './sync-records';
import SyncRecordFailures from './sync-record-failures';
import SyncStreams from './sync-streams';
import TaxSettings from './tax-settings';
import Tokens from './tokens';
import TokenValidations from './token-validations';
import Uploads from './uploads';
import Users from './users';


const enums = {
  abandonedOrderSettingStatus: ['active', 'inactive'],
  addressFieldName: ['first_name', 'last_name', 'street_1', 'street_2', 'city', 'province', 'postal', 'country', 'phone', 'company'],
  adjustmentReasonKey: ['duty_deminimis', 'vat_deminimis'],
  aggregate: ['maximum', 'minimum'],
  attributeDataType: ['boolean', 'decimal', 'string', 'json_array'],
  attributeIntent: ['brand', 'color', 'countries_of_origin', 'product_id', 'fulfillment_method', 'hazardous', 'price', 'size', 'sku', 'taxability', 'consumer_url', 'gtin', 'mpn', 'facet'],
  authenticationTechnique: ['anonymous', 'session', 'token', 'partner_token', 'user'],
  authorizationDeclineCode: ['expired', 'invalid_name', 'invalid_number', 'invalid_expiration', 'invalid_address', 'invalid_token_type', 'invalid_token', 'no_account', 'avs', 'cvv', 'fraud', 'duplicate', 'not_supported', 'unknown'],
  authorizationOption: ['store_card'],
  authorizationResultActionType: ['native', 'redirect', 'wait'],
  authorizationStatus: ['pending', 'expired', 'authorized', 'review', 'declined', 'reversed'],
  availabilityStatus: ['enabled', 'disabled'],
  availableFilterFormat: ['boolean', 'date', 'money', 'decimal', 'string', 'unit_of_length', 'unit_of_mass'],
  avsCode: ['match', 'partial', 'unsupported', 'no_match'],
  calendar: ['weekdays', 'everyday'],
  cancelReason: ['out_of_stock', 'consumer_requested', 'flow_cancel'],
  capability: ['crossdock'],
  captureDeclineCode: ['expired', 'insufficient_funds', 'unknown'],
  captureStatus: ['pending', 'succeeded', 'failed', 'canceled'],
  cardErrorCode: ['invalid_address', 'invalid_currency', 'invalid_name', 'invalid_number', 'invalid_expiration', 'invalid_token_type', 'avs', 'cvv', 'fraud', 'unknown'],
  cardType: ['american_express', 'cartes_bancaires', 'china_union_pay', 'dankort', 'diners_club', 'discover', 'jcb', 'maestro', 'mastercard', 'visa'],
  centerCapability: ['international', 'domestic', 'crossdock', 'commercial_invoice'],
  changeType: ['insert', 'update', 'delete'],
  consumerInvoiceCustomerType: ['business_eu_verified', 'business_non_verified', 'individual'],
  consumerInvoiceDocumentType: ['pdf'],
  consumerInvoiceStatus: ['pending', 'available', 'invalid'],
  countryPickerSource: ['experience', 'destination'],
  creditPaymentErrorCode: ['generic_error', 'invalid_order_number', 'invalid_currency', 'invalid_description', 'duplicate', 'amount_must_be_positive', 'amount_exceeds_balance', 'insufficient_amount'],
  currencyLabelFormatter: ['strip_trailing_zeros'],
  currencySymbolFormat: ['narrow', 'primary'],
  customerAddressType: ['billing', 'invoice', 'shipping'],
  cvvCode: ['match', 'suspicious', 'unsupported', 'no_match'],
  dayOfWeek: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
  deliveredDuty: ['paid', 'unpaid'],
  deliveredDutyDisplayType: ['all', 'single'],
  deliveryOptionCostDetailComponentKey: ['ratecard_base_cost', 'ratecard_ddp_fee', 'ratecard_fuel_surcharge', 'ratecard_oversized_shipment_fee', 'ratecard_rural_shipment_fee', 'ratecard_emergency_situation_surcharge_fee', 'center_commercial_invoice_fee', 'center_inbound_carton_fee', 'center_outbound_carton_fee'],
  deliveryOptionCostDetailSource: ['center', 'ratecard'],
  deliveryWindowComponentSource: ['flow', 'organization', 'carrier', 'center', 'mixed'],
  deliveryWindowLocation: ['center', 'crossdock', 'customer'],
  direction: ['outbound', 'return'],
  discountRuleStatus: ['active', 'scheduled', 'expired'],
  discountRuleSubsidyTarget: ['vat', 'duty'],
  discountTarget: ['item', 'shipping'],
  ecommercePlatformType: ['commercetools', 'custom', 'magento', 'shopify', 'sfcc', 'solidus', 'workarea'],
  economicTitleLocation: ['high_seas', 'origination', 'destination'],
  environment: ['sandbox', 'production'],
  eventType: ['attribute_upserted', 'attribute_deleted', 'attribute_upserted_v2', 'attribute_deleted_v2', 'catalog_upserted', 'catalog_deleted', 'subcatalog_upserted', 'subcatalog_deleted', 'catalog_item_upserted', 'catalog_item_deleted', 'catalog_item_upserted_v2', 'catalog_item_deleted_v2', 'subcatalog_item_upserted', 'subcatalog_item_deleted', 'b2b_invoice_upserted', 'b2b_invoice_deleted', 'b2b_credit_memo_upserted', 'b2b_credit_memo_deleted', 'consumer_invoice_upserted', 'consumer_invoice_deleted', 'credit_memo_upserted', 'credit_memo_deleted', 'crossdock_shipment_upserted', 'rate_deleted', 'rate_upserted', 'rate_deleted_v3', 'rate_upserted_v3', 'customer_upserted', 'customer_deleted', 'customer_address_book_contact_upserted', 'customer_address_book_contact_deleted', 'email_notification_upserted', 'email_notification_deleted', 'available_promotions_upserted', 'available_promotions_deleted', 'available_promotions_upserted_v2', 'available_promotions_deleted_v2', 'allocation_deleted_v2', 'allocation_upserted_v2', 'currency_format_deleted', 'currency_format_upserted', 'experience_deleted', 'experience_upserted', 'experience_deleted_v2', 'experience_upserted_v2', 'experience_price_book_mapping_deleted', 'experience_price_book_mapping_upserted', 'experience_logistics_settings_upserted', 'experience_logistics_settings_deleted', 'item_margin_deleted', 'item_margin_upserted', 'item_sales_margin_deleted', 'item_sales_margin_upserted', 'label_format_deleted', 'label_format_upserted', 'order_deleted', 'order_upserted', 'order_deleted_v2', 'order_upserted_v2', 'order_identifier_deleted', 'order_identifier_upserted', 'order_identifier_deleted_v2', 'order_identifier_upserted_v2', 'order_identifier_upserted_v3', 'pricing_deleted', 'pricing_upserted', 'order_service_change_request', 'fraud_status_changed', 'center_upserted', 'center_deleted', 'shipping_configuration_upserted', 'shipping_configuration_deleted', 'tier_upserted_v2', 'tier_deleted_v2', 'shipping_lane_upserted', 'shipping_lane_deleted', 'shipping_configuration_item_availability_upserted', 'shipping_configuration_item_availability_deleted', 'shipping_configuration_item_shipping_pricing_upserted', 'shipping_configuration_item_shipping_pricing_deleted', 'hs6_code_upserted', 'hs6_code_deleted', 'hs10_code_upserted', 'hs10_code_deleted', 'item_origin_upserted', 'item_origin_deleted', 'harmonized_landed_cost_upserted', 'fully_harmonized_item_upserted', 'rule_upserted', 'rule_deleted', 'snapshot_upserted', 'snapshot_deleted', 'label_upserted', 'label_deleted_v2', 'label_upserted_v2', 'notification_upserted', 'notification_deleted', 'manifested_label_upserted', 'manifested_label_deleted', 'local_item_upserted', 'local_item_deleted', 'checkout_optin_responses_upserted', 'checkout_optin_responses_deleted', 'browse_optin_responses_upserted', 'browse_optin_responses_deleted', 'order_placed', 'order_placed_v2', 'ready_to_fulfill', 'membership_upserted_v2', 'membership_deleted_v2', 'organization_upserted', 'organization_deleted', 'organization_upserted_v2', 'organization_deleted_v2', 'organization_short_id_upserted', 'organization_short_id_deleted', 'organization_default_configurations_upserted', 'organization_default_configurations_deleted', 'ecommerce_platform_upserted', 'ecommerce_platform_deleted', 'authorization_deleted_v2', 'authorization_status_changed', 'card_authorization_upserted_v2', 'card_authorization_deleted_v2', 'online_authorization_upserted_v2', 'online_authorization_deleted_v2', 'capture_upserted_v2', 'capture_deleted', 'card_upserted_v2', 'card_deleted', 'payment_upserted', 'payment_deleted', 'refund_upserted_v2', 'refund_deleted_v2', 'refund_capture_upserted_v2', 'reversal_upserted', 'reversal_deleted', 'capture_identifier_upserted', 'capture_identifier_deleted', 'refund_identifier_upserted', 'refund_identifier_deleted', 'virtual_card_capture_upserted', 'virtual_card_capture_deleted', 'virtual_card_refund_upserted', 'virtual_card_refund_deleted', 'price_book_upserted', 'price_book_deleted', 'price_book_item_upserted', 'price_book_item_deleted', 'organization_rates_published', 'ratecard_lane_upserted', 'ratecard_lane_deleted', 'ratecard_upserted', 'ratecard_deleted', 'return_upserted', 'return_deleted', 'shopify_localization_setting_upserted', 'shopify_localization_setting_deleted', 'tracking_label_event_upserted'],
  exceptionType: ['open', 'closed'],
  exclusionRuleState: ['current', 'deleting', 'updating'],
  experienceCloneStatus: ['pending', 'updating', 'completed', 'failed'],
  experiencePaymentMethodTag: ['display'],
  experienceStatus: ['draft', 'active', 'archiving', 'archived'],
  exportStatus: ['created', 'processing', 'completed', 'failed'],
  flowBehavior: ['view_consumer_data'],
  flowRole: ['organization_admin', 'organization_merchant', 'organization_customer_service', 'organization_fulfillment', 'organization_marketing', 'organization_finance', 'flow_operations'],
  fraudEmailRuleDecision: ['approved', 'declined'],
  fraudLiability: ['flow', 'organization'],
  fraudStatus: ['pending', 'approved', 'declined', 'review'],
  ftpFileSource: ['flow', 'organization'],
  fulfillmentItemQuantityStatus: ['new', 'shipped', 'cancelled'],
  fulfillmentMethodType: ['fulfillment_method'],
  fulfillmentMethodValue: ['digital', 'physical'],
  genericErrorCode: ['generic_error', 'client_error', 'server_error'],
  goodsSupply: ['export', 'intra_community', 'local'],
  holidayCalendar: ['us_bank_holidays', 'jewish_holidays'],
  imageTag: ['thumbnail', 'checkout'],
  importType: ['catalog_items', 'customs_descriptions', 'customs_description_tariffs', 'experiences_with_settings', 'harmonization_codes', 'item_prices', 'item_form_overlays', 'price_book_items', 'price_book_items_query', 'ratecard_lanes', 'order_service_changes'],
  includedLevyKey: ['duty', 'vat', 'vat_and_duty', 'none'],
  incoterm: ['EXW', 'FCA', 'CPT', 'CIP', 'DAT', 'DAP', 'DDP', 'FAS', 'FOB', 'CFR', 'CIF', 'DAF', 'DES', 'DEQ', 'DDU'],
  inputSpecificationType: ['text', 'number'],
  inventoryStatus: ['has_inventory', 'no_inventory'],
  invitationErrorCode: ['expired', 'invalid_email'],
  itemAvailabilityStatus: ['available', 'low', 'out_of_stock'],
  laneDirection: ['outbound', 'return'],
  lanePreselectPreference: ['lowest_cost', 'default_tier'],
  laneStrategy: ['oldest', 'fastest', 'lowest_cost', 'highest_priority'],
  levyComponent: ['goods', 'duty', 'insurance', 'freight', 'vat'],
  levyStrategy: ['minimum', 'average', 'maximum'],
  locationErrorCode: ['address_required', 'ip_invalid', 'ip_required', 'timezone_unavailable'],
  marginType: ['fixed', 'percent'],
  measurementSystem: ['imperial', 'metric'],
  merchantGiftCardErrorCode: ['invalid', 'expired', 'empty', 'insufficient_funds', 'unsupported_currency'],
  merchantOfRecord: ['flow', 'organization'],
  method: ['post'],
  optinResponseType: ['not_shown', 'opted_in', 'opted_out'],
  orderChangeSource: ['consumer', 'retailer', 'fulfillment', 'flow', 'carrier'],
  orderErrorCode: ['generic_error', 'order_item_not_available', 'order_identifier_error', 'authorization_invalid', 'domestic_shipping_unavailable', 'shipping_unavailable', 'value_threshold_exceeded', 'invalid_currency', 'invalid_country', 'invalid_region', 'invalid_language', 'item_out_of_stock', 'gift_card_not_accepted', 'total_changed'],
  orderMerchantOfRecord: ['flow', 'organization', 'mixed'],
  orderPaymentType: ['card', 'online', 'credit', 'installment_plan', 'cash_on_delivery'],
  orderPriceDetailComponentKey: ['adjustment', 'vat_deminimis', 'duty_deminimis', 'duties_item_price', 'duties_freight', 'duties_insurance', 'vat_item_price', 'vat_freight', 'vat_insurance', 'vat_duties_item_price', 'vat_duties_freight', 'vat_duties_insurance', 'item_price', 'item_discount', 'rounding', 'insurance', 'shipping', 'order_discount', 'subtotal_percent_sales_margin', 'subtotal_vat_percent_sales_margin', 'subtotal_duty_percent_sales_margin', 'vat_subsidy', 'duty_subsidy', 'remote_area_surcharge', 'fuel_surcharge', 'emergency_situation_surcharge'],
  orderPriceDetailKey: ['adjustment', 'subtotal', 'vat', 'duty', 'shipping', 'insurance', 'discount', 'surcharges'],
  orderStatus: ['open', 'submitted'],
  orderStorage: ['do_not_persist', 'persist'],
  organizationPaymentMethodTag: ['deny'],
  paymentErrorCode: ['duplicate', 'invalid_amount', 'invalid_currency', 'invalid_method', 'invalid_order', 'invalid_customer', 'invalid_destination', 'unknown'],
  paymentMethodCapability: ['credit', 'debit'],
  paymentMethodRuleContentKey: ['description'],
  paymentMethodType: ['card', 'online', 'offline'],
  paymentSourceConfirmationActionType: ['cvv', 'billing_address', 'number'],
  permittedHttpMethod: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  physicalDeliverySpecialSerivce: ['cold_storage', 'hazardous', 'perishable'],
  priceAccuracy: ['calculated', 'estimated_from_partial_destination'],
  priceBookStatus: ['draft', 'published', 'archived'],
  priceDetailComponentKey: ['base_price', 'discount', 'currency_margin', 'percent_item_margin', 'fixed_item_margin', 'duties_item_price', 'duties_added_margin', 'duties_rounding', 'duties_deminimis', 'vat_item_price', 'vat_added_margin', 'vat_rounding', 'vat_duties_item_price', 'vat_duties_added_margin', 'vat_duties_rounding', 'vat_deminimis', 'item_price_percent_sales_margin', 'margins_percent_sales_margin', 'rounding_percent_sales_margin', 'vat_percent_sales_margin', 'vat_duty_percent_sales_margin', 'duty_percent_sales_margin'],
  priceDetailKey: ['item_price', 'margins', 'vat', 'duty', 'rounding', 'adjustment'],
  priceFacetBoundary: ['min', 'max'],
  pricingLevySetting: ['included', 'displayed', 'ignored'],
  promotionTriggerType: ['automatic', 'order_subtotal'],
  provinceType: ['city', 'dependency', 'district', 'emirate', 'entity', 'municipality', 'outlying_area', 'parish', 'province', 'state', 'territory', 'other'],
  quoteErrorCode: ['generic_error', 'items_not_available', 'shipping_unavailable'],
  rateType: ['flow', 'organization'],
  ratecardOwner: ['flow', 'organization'],
  refundDeclineCode: ['expired', 'insufficient_funds', 'unknown'],
  refundStatus: ['pending', 'succeeded', 'failed', 'canceled'],
  returnStatus: ['open', 'refunded'],
  reversalErrorCode: ['amount_exceeds_balance', 'authorization_declined', 'authorization_expired', 'invalid_authorization', 'invalid_key', 'invalid_amount', 'invalid_currency', 'no_remaining_balance', 'partial_reversal_not_supported', 'unknown'],
  reversalStatus: ['pending', 'processed', 'failed'],
  role: ['admin', 'member'],
  roundingMethod: ['up', 'down', 'nearest'],
  roundingType: ['pattern', 'multiple'],
  scheduleExceptionStatus: ['Open', 'Closed'],
  shipmentIntegrationType: ['direct', 'information', 'preadvice'],
  shipmentRecipient: ['customer', 'return', 'crossdock'],
  shippingConfigurationType: ['default', 'variant'],
  shopifyGrant: ['customer', 'discount', 'gift_card', 'metafield', 'order'],
  shopifyLocalizationMethod: ['api', 'ssr'],
  shopifySyncCheck: ['localized_variants', 'flow_variant_metafields'],
  sortDirection: ['ascending', 'descending'],
  strategy: ['range', 'from', 'to'],
  subcatalogItemStatus: ['excluded', 'included', 'restricted'],
  surchargeResponsibleParty: ['organization', 'customer'],
  syncRecordFailureReason: ['inventory', 'address', 'promotion', 'other'],
  syncStreamType: ['submitted_order'],
  syncUnitOfTime: ['day', 'hour', 'minute', 'second'],
  taxApplicability: ['none', 'all'],
  taxVerificationResult: ['valid', 'invalid', 'unable_to_validate'],
  taxabilityType: ['tax_rule'],
  taxabilityValue: ['exempt'],
  threeDSecureCode: ['verified', 'not_verified', 'failed'],
  tierAvailability: ['always', 'backup'],
  tierEstimateType: ['calculated', 'custom'],
  tierStrategy: ['fastest', 'lowest_cost'],
  tokenType: ['permanent', 'one_time'],
  trackingNumberType: ['flow', 'carrier'],
  trackingStatus: ['label_created', 'pending', 'info_received', 'picked_up', 'in_transit', 'out_for_delivery', 'attempt_fail', 'delivered', 'exception', 'returned', 'expired'],
  unitOfMeasurement: ['millimeter', 'centimeter', 'inch', 'foot', 'cubic_inch', 'cubic_meter', 'gram', 'kilogram', 'meter', 'ounce', 'pound'],
  unitOfTime: ['year', 'month', 'week', 'day', 'hour', 'minute'],
  updatePolicy: ['auto', 'queue', 'discard'],
  updateType: ['change', 'set'],
  userStatus: ['pending', 'active', 'inactive'],
  valueAddedService: ['Hazardous Material'],
  visibility: ['public', 'private'],
  webhookStatus: ['pending', 'success', 'failure'],
  zeroAmountIndicator: ['zero', 'free'],
};


export default class ApiClient {
  constructor(opts) {
    let options = opts;
    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    this.enums = enums;

    this.addressConfigurations = new AddressConfigurations(options);
    this.allocations = new Allocations(options);
    this.attributes = new Attributes(options);
    this.catalogs = new Catalogs(options);
    this.checkoutAttributes = new CheckoutAttributes(options);
    this.checkoutItemContents = new CheckoutItemContents(options);
    this.creditPayments = new CreditPayments(options);
    this.discountRuleSettings = new DiscountRuleSettings(options);
    this.experiences = new Experiences(options);
    this.experienceCheckoutSettings = new ExperienceCheckoutSettings(options);
    this.experienceDefaults = new ExperienceDefaults(options);
    this.experienceLogisticsSettings = new ExperienceLogisticsSettings(options);
    this.experiencePriceConversions = new ExperiencePriceConversions(options);
    this.experiencePriceFacetConversions = new ExperiencePriceFacetConversions(options);
    this.items = new Items(options);
    this.itemFormOverlays = new ItemFormOverlays(options);
    this.orders = new Orders(options);
    this.orderBuilders = new OrderBuilders(options);
    this.orderEstimates = new OrderEstimates(options);
    this.orderIdentifiers = new OrderIdentifiers(options);
    this.orderNumberGenerators = new OrderNumberGenerators(options);
    this.orderPromotions = new OrderPromotions(options);
    this.orderSummaries = new OrderSummaries(options);
    this.organizations = new Organizations(options);
    this.paymentMethodRules = new PaymentMethodRules(options);
    this.priceBooks = new PriceBooks(options);
    this.priceBookItems = new PriceBookItems(options);
    this.subcatalogs = new Subcatalogs(options);
    this.subcatalogItems = new SubcatalogItems(options);
    this.organizationCurrencySettings = new OrganizationCurrencySettings(options);
    this.rates = new Rates(options);
    this.harmonizedCategories = new HarmonizedCategories(options);
    this.harmonizedLandedCosts = new HarmonizedLandedCosts(options);
    this.hs10 = new Hs10(options);
    this.taxRegistrations = new TaxRegistrations(options);
    this.authorizations = new Authorizations(options);
    this.captures = new Captures(options);
    this.cards = new Cards(options);
    this.cardPaymentSources = new CardPaymentSources(options);
    this.gatewayAuthenticationData = new GatewayAuthenticationData(options);
    this.payments = new Payments(options);
    this.publicKeys = new PublicKeys(options);
    this.refunds = new Refunds(options);
    this.reversals = new Reversals(options);
    this.virtualCards = new VirtualCards(options);
    this.virtualCardCaptures = new VirtualCardCaptures(options);
    this.virtualCardRefunds = new VirtualCardRefunds(options);
    this.centers = new Centers(options);
    this.deliveryWindows = new DeliveryWindows(options);
    this.dimensionEstimates = new DimensionEstimates(options);
    this.inventoryRules = new InventoryRules(options);
    this.inventorySnapshots = new InventorySnapshots(options);
    this.inventoryUpdates = new InventoryUpdates(options);
    this.manifests = new Manifests(options);
    this.quotes = new Quotes(options);
    this.ratecards = new Ratecards(options);
    this.ratecardEstimates = new RatecardEstimates(options);
    this.ratecardLanes = new RatecardLanes(options);
    this.ratecardRates = new RatecardRates(options);
    this.returns = new Returns(options);
    this.shippingConfigurations = new ShippingConfigurations(options);
    this.shippingConfigurationCopies = new ShippingConfigurationCopies(options);
    this.shippingLabels = new ShippingLabels(options);
    this.shippingNotifications = new ShippingNotifications(options);
    this.surchargeSettings = new SurchargeSettings(options);
    this.tiers = new Tiers(options);
    this.trackings = new Trackings(options);
    this.trackingEvents = new TrackingEvents(options);
    this.trackingLabels = new TrackingLabels(options);
    this.webhooks = new Webhooks(options);
    this.webhookDeliveries = new WebhookDeliveries(options);
    this.webhookSettings = new WebhookSettings(options);
    this.addresses = new Addresses(options);
    this.countryDefaults = new CountryDefaults(options);
    this.timezones = new Timezones(options);
    this.carriers = new Carriers(options);
    this.carrierServices = new CarrierServices(options);
    this.countries = new Countries(options);
    this.currencies = new Currencies(options);
    this.languages = new Languages(options);
    this.locales = new Locales(options);
    this.paymentMethods = new PaymentMethods(options);
    this.provinces = new Provinces(options);
    this.regions = new Regions(options);
    this.abandonedOrderSettings = new AbandonedOrderSettings(options);
    this.b2bCreditMemos = new B2bCreditMemos(options);
    this.b2bInvoices = new B2bInvoices(options);
    this.catalogPriceBookItemDocuments = new CatalogPriceBookItemDocuments(options);
    this.checkoutTokens = new CheckoutTokens(options);
    this.consumerInvoices = new ConsumerInvoices(options);
    this.consumerInvoiceDocuments = new ConsumerInvoiceDocuments(options);
    this.countryPickers = new CountryPickers(options);
    this.creditMemos = new CreditMemos(options);
    this.customers = new Customers(options);
    this.customerAddressBook = new CustomerAddressBook(options);
    this.customerAddressBookContacts = new CustomerAddressBookContacts(options);
    this.customerBundles = new CustomerBundles(options);
    this.customerPurgeSettings = new CustomerPurgeSettings(options);
    this.customerTokens = new CustomerTokens(options);
    this.documents = new Documents(options);
    this.ecommercePlatforms = new EcommercePlatforms(options);
    this.emailVerifications = new EmailVerifications(options);
    this.exclusionRules = new ExclusionRules(options);
    this.exports = new Exports(options);
    this.flowRoles = new FlowRoles(options);
    this.fraudEmailRules = new FraudEmailRules(options);
    this.ftpFiles = new FtpFiles(options);
    this.ftpFolders = new FtpFolders(options);
    this.ftpOrganizationSettings = new FtpOrganizationSettings(options);
    this.fulfillments = new Fulfillments(options);
    this.healthchecks = new Healthchecks(options);
    this.imports = new Imports(options);
    this.importTemplates = new ImportTemplates(options);
    this.invitations = new Invitations(options);
    this.priceRules = new PriceRules(options);
    this.itemQuerySuggestions = new ItemQuerySuggestions(options);
    this.links = new Links(options);
    this.memberships = new Memberships(options);
    this.merchantGiftCardBalances = new MerchantGiftCardBalances(options);
    this.merchantGiftCardRedemptions = new MerchantGiftCardRedemptions(options);
    this.merchantGiftCardReversals = new MerchantGiftCardReversals(options);
    this.organizationAuthorizations = new OrganizationAuthorizations(options);
    this.organizationDefaultConfigurations = new OrganizationDefaultConfigurations(options);
    this.organizationTokens = new OrganizationTokens(options);
    this.partnerTokens = new PartnerTokens(options);
    this.passwordResetForms = new PasswordResetForms(options);
    this.permissionChecks = new PermissionChecks(options);
    this.scheduledExports = new ScheduledExports(options);
    this.sessions = new Sessions(options);
    this.sessionAuthorizations = new SessionAuthorizations(options);
    this.shopifyCarts = new ShopifyCarts(options);
    this.shopifyCartConversions = new ShopifyCartConversions(options);
    this.shopifyLocalizationSettings = new ShopifyLocalizationSettings(options);
    this.shopifyLocationFlowCenterMappings = new ShopifyLocationFlowCenterMappings(options);
    this.shopifyPrivateApps = new ShopifyPrivateApps(options);
    this.shopifySyncStatuses = new ShopifySyncStatuses(options);
    this.suggestions = new Suggestions(options);
    this.syncPendingRecords = new SyncPendingRecords(options);
    this.syncRecords = new SyncRecords(options);
    this.syncRecordFailures = new SyncRecordFailures(options);
    this.syncStreams = new SyncStreams(options);
    this.taxSettings = new TaxSettings(options);
    this.tokens = new Tokens(options);
    this.tokenValidations = new TokenValidations(options);
    this.uploads = new Uploads(options);
    this.users = new Users(options);
  }
}
