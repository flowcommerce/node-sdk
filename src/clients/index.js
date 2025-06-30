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
import Rates from './rates';
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
import Centers from './centers';
import DeliveryWindows from './delivery-windows';
import DimensionEstimates from './dimension-estimates';
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
import AbandonedOrderPromotions from './abandoned-order-promotions';
import AbandonedOrderSettings from './abandoned-order-settings';
import AllocationV2s from './allocation-v2s';
import B2bCreditMemos from './b2b-credit-memos';
import B2bInvoices from './b2b-invoices';
import BankAccountForms from './bank-account-forms';
import CatalogPriceBookItemDocuments from './catalog-price-book-item-documents';
import ChannelAuthorizations from './channel-authorizations';
import ChannelBankAccounts from './channel-bank-accounts';
import ChannelCurrencyPairs from './channel-currency-pairs';
import ChannelDefaultBankAccounts from './channel-default-bank-accounts';
import ChannelOrganizations from './channel-organizations';
import ChannelOrganizationAuthorizations from './channel-organization-authorizations';
import ChannelPayouts from './channel-payouts';
import ChannelPendingPayoutTransactions from './channel-pending-payout-transactions';
import ChannelRates from './channel-rates';
import ChannelStatements from './channel-statements';
import ChannelTokens from './channel-tokens';
import ChannelTransactions from './channel-transactions';
import ChannelViesRegistrations from './channel-vies-registrations';
import CheckoutTokens from './checkout-tokens';
import ConsumerInvoices from './consumer-invoices';
import ConsumerInvoiceDocuments from './consumer-invoice-documents';
import CountryOfOrigins from './country-of-origins';
import CountryPickers from './country-pickers';
import CreditMemos from './credit-memos';
import Customers from './customers';
import CustomerAddressBook from './customer-address-book';
import CustomerAddressBookContacts from './customer-address-book-contacts';
import CustomerBundles from './customer-bundles';
import CustomerPurgeSettings from './customer-purge-settings';
import CustomerTokens from './customer-tokens';
import Documents from './documents';
import DutyItems from './duty-items';
import DutyItemApprovals from './duty-item-approvals';
import DutyItemProducers from './duty-item-producers';
import EcommercePlatforms from './ecommerce-platforms';
import EmailVerifications from './email-verifications';
import ExclusionRules from './exclusion-rules';
import Exports from './exports';
import FlowRoles from './flow-roles';
import FlowTransactions from './flow-transactions';
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
import KnowYourBusinesses from './know-your-businesses';
import KubeHealthchecks from './kube-healthchecks';
import Links from './links';
import Memberships from './memberships';
import MerchantApplications from './merchant-applications';
import MerchantGiftCardBalances from './merchant-gift-card-balances';
import MerchantGiftCardRedemptions from './merchant-gift-card-redemptions';
import MerchantGiftCardReversals from './merchant-gift-card-reversals';
import OrganizationAuthorizations from './organization-authorizations';
import OrganizationBankAccounts from './organization-bank-accounts';
import OrganizationDefaultBankAccounts from './organization-default-bank-accounts';
import OrganizationDefaultConfigurations from './organization-default-configurations';
import OrganizationOnboardingStates from './organization-onboarding-states';
import OrganizationPayouts from './organization-payouts';
import OrganizationPendingPayoutTransactions from './organization-pending-payout-transactions';
import OrganizationTokens from './organization-tokens';
import OrganizationTokenV2 from './organization-token-v2';
import PackageDimensionses from './package-dimensionses';
import PartnerTokens from './partner-tokens';
import PasswordResetForms from './password-reset-forms';
import PaymentPaymentMethods from './payment-payment-methods';
import PaymentRequests from './payment-requests';
import PaymentRequestBundles from './payment-request-bundles';
import PermissionChecks from './permission-checks';
import ReturnPolicies from './return-policies';
import Romanizations from './romanizations';
import ScheduledExports from './scheduled-exports';
import Sessions from './sessions';
import SessionAuthorizations from './session-authorizations';
import ShopifyCarts from './shopify-carts';
import ShopifyCartConversions from './shopify-cart-conversions';
import ShopifyLocalizationSettings from './shopify-localization-settings';
import ShopifyLocationFlowCenterMappings from './shopify-location-flow-center-mappings';
import ShopifyPrivateApps from './shopify-private-apps';
import ShopifySyncStatuses from './shopify-sync-statuses';
import Statements from './statements';
import Suggestions from './suggestions';
import TaxSettings from './tax-settings';
import Tokens from './tokens';
import TokenValidations from './token-validations';
import TradeAgreements from './trade-agreements';
import TradeAgreementCertifiers from './trade-agreement-certifiers';
import Transactions from './transactions';
import UltimateBeneficiaryOwners from './ultimate-beneficiary-owners';
import Uploads from './uploads';
import Users from './users';


const enums = {
  abandonedOrderPromotionStatus: ['active', 'inactive'],
  abandonedOrderSettingStatus: ['active', 'inactive'],
  addressFieldName: ['first_name', 'last_name', 'street_1', 'street_2', 'city', 'province', 'postal', 'country', 'phone', 'company', 'vat_registration_number'],
  addressVerificationResultFieldCode: ['matched', 'not_available', 'not_checked', 'not_matched'],
  adjustmentReasonKey: ['duty_deminimis', 'vat_deminimis'],
  attributeDataType: ['boolean', 'integer', 'decimal', 'string', 'json_array'],
  attributeIntent: ['brand', 'color', 'countries_of_origin', 'product_id', 'fulfillment_method', 'hazardous', 'price', 'size', 'sku', 'taxability', 'consumer_url', 'gtin', 'mpn', 'facet', 'eccn', 'returnable', 'searchable', 'barcode', 'min_days_to_ship', 'max_days_to_ship', 'commercial_invoice_item_number', 'include_in_product_feeds'],
  authenticationTechnique: ['anonymous', 'session', 'token', 'partner_token', 'user'],
  authorizationDeclineCode: ['expired', 'invalid_name', 'invalid_number', 'invalid_expiration', 'invalid_address', 'invalid_token_type', 'invalid_token', 'no_account', 'avs', 'cvv', 'fraud', 'duplicate', 'not_supported', 'unknown', 'online_payment_error'],
  authorizationOption: ['store_card'],
  authorizationResultActionType: ['native', 'redirect', 'wait'],
  authorizationStatus: ['initiated', 'pending', 'expired', 'authorized', 'review', 'declined', 'reversed'],
  availabilityStatus: ['enabled', 'disabled'],
  availableFilterFormat: ['boolean', 'date', 'money', 'decimal', 'string', 'unit_of_length', 'unit_of_mass'],
  avsCode: ['match', 'partial', 'unsupported', 'no_match'],
  b2bInvoiceType: ['self_bill_invoice', 'invoice'],
  calendar: ['weekdays', 'everyday'],
  cancelReason: ['out_of_stock', 'consumer_requested', 'flow_cancel'],
  capability: ['crossdock'],
  captureDeclineCode: ['expired', 'insufficient_funds', 'unknown'],
  captureStatus: ['initiated', 'pending', 'succeeded', 'failed', 'canceled'],
  cardErrorCode: ['invalid_address', 'invalid_currency', 'invalid_name', 'invalid_number', 'invalid_expiration', 'invalid_token_type', 'avs', 'cvv', 'fraud', 'unknown'],
  cardType: ['american_express', 'cartes_bancaires', 'china_union_pay', 'dankort', 'diners_club', 'discover', 'jcb', 'maestro', 'mastercard', 'visa'],
  carrierChargeReason: ['return_to_origin', 'rejection', 'other'],
  centerCapability: ['international', 'domestic', 'crossdock', 'commercial_invoice'],
  changeType: ['insert', 'update', 'delete'],
  channelCurrencyCapability: ['payment_authorizations', 'settlement_currency'],
  channelShopifyOrderStateReasonCode: ['placeholder_reason_code'],
  consumerInvoiceCustomerType: ['business_eu_verified', 'business_non_verified', 'individual'],
  consumerInvoiceDocumentType: ['pdf'],
  consumerInvoiceStatus: ['pending', 'available', 'invalid'],
  costEstimateSource: ['flow', 'channel'],
  countryPickerSource: ['experience', 'destination'],
  creditPaymentErrorCode: ['generic_error', 'invalid_order_number', 'invalid_currency', 'invalid_description', 'duplicate', 'amount_must_be_positive', 'amount_exceeds_balance', 'insufficient_amount'],
  currencyLabelFormatter: ['strip_trailing_zeros', 'symbol_prefix', 'symbol_suffix'],
  currencySymbolFormat: ['narrow', 'primary'],
  customerAddressType: ['billing', 'invoice', 'shipping'],
  cvvCode: ['match', 'suspicious', 'unsupported', 'no_match'],
  cvvResultCode: ['matched', 'not_available', 'not_checked', 'not_matched'],
  dayOfWeek: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
  deliveredDuty: ['paid', 'unpaid'],
  deliveredDutyDisplayType: ['all', 'single'],
  deliveryOptionCostDetailComponentKey: ['ratecard_base_cost', 'ratecard_ddp_fee', 'ratecard_fuel_surcharge', 'ratecard_oversized_shipment_fee', 'ratecard_rural_shipment_fee', 'ratecard_emergency_situation_surcharge_fee', 'ratecard_peak_surcharge_fee', 'ratecard_duties_taxes_paid_surcharge_fee', 'center_commercial_invoice_fee', 'center_inbound_carton_fee', 'center_outbound_carton_fee'],
  deliveryOptionCostDetailSource: ['center', 'ratecard'],
  deliveryWindowComponentSource: ['flow', 'organization', 'carrier', 'center', 'mixed'],
  deliveryWindowLocation: ['center', 'crossdock', 'customer'],
  direction: ['outbound', 'return'],
  discountRuleStatus: ['active', 'scheduled', 'expired'],
  discountRuleSubsidyTarget: ['vat', 'duty'],
  discountTarget: ['item', 'shipping'],
  dutyItemApprovalStatus: ['pending', 'certified', 'decertified'],
  ecommercePlatformType: ['commercetools', 'custom', 'hybris', 'magento', 'shopify', 'shopify_markets', 'sfcc', 'solidus', 'workarea'],
  economicTitleLocation: ['high_seas', 'origination', 'destination'],
  entityIdentifierType: ['ioss', 'voec', 'zaz'],
  environment: ['sandbox', 'production'],
  eventType: ['test_upserted', 'generate_load', 'aldo_item_upserted', 'aldo_item_deleted', 'ansh_item_upserted', 'ansh_item_deleted', 'transaction_upserted', 'organization_transaction_upserted', 'organization_transaction_deleted', 'statement_upserted', 'statement_deleted', 'channel_transaction_upserted', 'channel_transaction_deleted', 'channel_transaction_deleted_v2', 'channel_statement_upserted', 'channel_statement_deleted', 'channel_payout_upserted', 'channel_payout_deleted', 'organization_payout_upserted', 'organization_payout_deleted', 'channel_pending_payout_transaction_upserted', 'channel_pending_payout_transaction_deleted', 'organization_pending_payout_transaction_upserted', 'organization_pending_payout_transaction_deleted', 'attribute_upserted', 'attribute_deleted', 'attribute_upserted_v2', 'attribute_deleted_v2', 'catalog_upserted', 'catalog_deleted', 'subcatalog_upserted', 'subcatalog_deleted', 'subcatalog_item_upserted', 'subcatalog_item_deleted', 'catalog_statistics_upserted', 'catalog_statistics_deleted', 'item_inserted', 'item_updated', 'item_deleted', 'channel_shopify_order_state_upserted', 'channel_shopify_order_state_deleted', 'channel_upserted', 'channel_deleted', 'channel_currency_upserted', 'channel_currency_deleted', 'channel_organization_upserted', 'channel_organization_deleted', 'b2b_invoice_upserted', 'b2b_invoice_deleted', 'b2b_credit_memo_upserted', 'b2b_credit_memo_deleted', 'consumer_invoice_upserted', 'consumer_invoice_deleted', 'credit_memo_upserted', 'credit_memo_deleted', 'crossdock_shipment_upserted', 'rate_deleted', 'rate_upserted', 'rate_deleted_v3', 'rate_upserted_v3', 'customer_upserted', 'customer_deleted', 'customer_address_book_contact_upserted', 'customer_address_book_contact_deleted', 'available_promotions_upserted', 'available_promotions_deleted', 'available_promotions_upserted_v2', 'available_promotions_deleted_v2', 'allocation_deleted_v2', 'allocation_upserted_v2', 'currency_format_deleted', 'currency_format_upserted', 'experience_deleted', 'experience_upserted', 'experience_deleted_v2', 'experience_upserted_v2', 'country_status_upserted', 'country_status_deleted', 'experience_price_book_mapping_deleted', 'experience_price_book_mapping_upserted', 'experience_logistics_settings_upserted', 'experience_logistics_settings_deleted', 'item_margin_deleted_v2', 'item_margin_upserted_v2', 'item_sales_margin_deleted', 'item_sales_margin_upserted', 'label_format_deleted', 'label_format_upserted', 'order_deleted', 'order_upserted', 'order_deleted_v2', 'order_upserted_v2', 'order_identifier_deleted', 'order_identifier_upserted', 'order_identifier_deleted_v2', 'order_identifier_upserted_v2', 'order_identifier_upserted_v3', 'order_replacement_upserted', 'order_replacement_deleted', 'pricing_deleted', 'pricing_upserted', 'order_service_change_request', 'fraud_status_changed', 'center_upserted', 'center_deleted', 'shipping_configuration_upserted', 'shipping_configuration_deleted', 'tier_upserted_v2', 'tier_deleted_v2', 'shipping_lane_upserted', 'shipping_lane_deleted', 'shipping_configuration_item_availability_upserted', 'shipping_configuration_item_availability_deleted', 'shipping_configuration_item_shipping_pricing_upserted', 'shipping_configuration_item_shipping_pricing_deleted', 'ge_item_inserted', 'ge_item_updated', 'ge_item_deleted', 'hs6_code_upserted', 'hs6_code_deleted', 'hs10_code_upserted', 'hs10_code_deleted', 'item_origin_upserted', 'item_origin_deleted', 'harmonized_landed_cost_upserted', 'fully_harmonized_item_upserted', 'import_completed_v2', 'import_failed_v2', 'label_upserted', 'label_deleted_v2', 'label_upserted_v2', 'notification_upserted_v2', 'notification_deleted_v2', 'manifested_label_upserted', 'manifested_label_deleted', 'label_processing_modification_upserted', 'label_processing_modification_deleted', 'merchant_application_upserted', 'merchant_application_deleted', 'order_placed', 'order_placed_v2', 'ready_to_fulfill', 'ready_to_fulfill_v2', 'membership_upserted_v2', 'membership_deleted_v2', 'organization_upserted', 'organization_deleted', 'organization_upserted_v2', 'organization_deleted_v2', 'organization_default_configurations_upserted', 'organization_default_configurations_deleted', 'ecommerce_platform_upserted', 'ecommerce_platform_deleted', 'organization_onboarding_state_upserted', 'organization_onboarding_state_deleted', 'authorization_deleted_v2', 'authorization_status_changed', 'card_authorization_upserted_v2', 'card_authorization_deleted_v2', 'online_authorization_upserted_v2', 'online_authorization_deleted_v2', 'capture_upserted_v2', 'capture_deleted', 'card_upserted_v2', 'card_deleted', 'payment_upserted', 'payment_deleted', 'refund_upserted_v2', 'refund_deleted_v2', 'refund_capture_upserted_v2', 'reversal_upserted', 'reversal_deleted', 'capture_identifier_upserted', 'capture_identifier_deleted', 'refund_identifier_upserted', 'refund_identifier_deleted', 'virtual_card_capture_upserted', 'virtual_card_capture_deleted', 'virtual_card_refund_upserted', 'virtual_card_refund_deleted', 'authorization_retry_upserted', 'authorization_retry_deleted', 'payment_request_upserted', 'payment_request_deleted', 'price_book_upserted', 'price_book_deleted', 'price_book_item_upserted', 'price_book_item_deleted', 'product_inserted', 'product_updated', 'product_deleted', 'organization_rates_published', 'ratecard_lane_upserted', 'ratecard_lane_deleted', 'ratecard_upserted', 'ratecard_deleted', 'product_restriction_result_upserted', 'product_restriction_result_deleted', 'return_upserted', 'return_deleted', 'return_upserted_v2', 'return_deleted_v2', 'shopify_localization_setting_upserted', 'shopify_localization_setting_deleted', 'tracking_label_event_upserted'],
  exceptionType: ['open', 'closed'],
  exclusionRuleState: ['current', 'deleting', 'updating'],
  experienceCloneStatus: ['pending', 'updating', 'completed', 'failed'],
  experienceCountryStatus: ['enabled', 'disabled'],
  experiencePaymentMethodTag: ['display'],
  experienceStatus: ['draft', 'active', 'archiving', 'archived'],
  exportStatus: ['created', 'processing', 'completed', 'failed'],
  exporterOfRecord: ['flow', 'organization'],
  feeDeductionType: ['duty_guarantee', 'mor', 'fraud', 'fx', 'processing', 'rate_lock', 'transfer', 'negative_balance_guarantee'],
  flowBehavior: ['view_consumer_data'],
  flowEntity: ['flow-usa', 'flow-irl', 'flow-can', 'ge-usa'],
  flowRole: ['organization_admin', 'organization_merchant', 'organization_customer_service', 'organization_fulfillment', 'organization_marketing', 'organization_finance', 'organization_classification', 'flow_operations', 'channel_admin', 'channel_organization_admin'],
  fraudEmailRuleDecision: ['approved', 'declined'],
  fraudLiability: ['flow', 'organization'],
  fraudStatus: ['pending', 'approved', 'declined', 'review'],
  ftpFileSource: ['flow', 'organization'],
  fulfillmentItemQuantityStatus: ['new', 'shipped', 'cancelled'],
  fulfillmentMethodType: ['fulfillment_method'],
  fulfillmentMethodValue: ['digital', 'physical'],
  fulfillmentRouting: ['fulfilled_from_center', 'fulfillment_service'],
  geCatalogItemIngestionResponse: ['ge_catalog_item_ingestion_success', 'ge_catalog_item_ingestion_failure'],
  geEnvironment: ['production', 'sandbox'],
  geEventType: ['restriction_result', 'ingestion_result'],
  genericErrorCode: ['generic_error', 'client_error', 'server_error'],
  goodsSupply: ['export', 'intra_community', 'local'],
  holidayCalendar: ['us_bank_holidays', 'jewish_holidays'],
  imageTag: ['thumbnail', 'checkout'],
  importType: ['catalog_items', 'catalog_items_external', 'customs_descriptions', 'customs_description_tariffs', 'experiences_with_settings', 'harmonization_codes', 'item_prices', 'item_form_overlays', 'price_book_items', 'price_book_items_query', 'ratecard_lanes', 'order_service_changes'],
  includedLevyKey: ['duty', 'vat', 'vat_and_duty', 'none'],
  incoterm: ['EXW', 'FCA', 'CPT', 'CIP', 'DAT', 'DAP', 'DDP', 'FAS', 'FOB', 'CFR', 'CIF', 'DAF', 'DES', 'DEQ', 'DDU'],
  incotermConfiguration: ['DDP', 'DAP', 'DDU', 'UNSUPPORTED'],
  inlineWindowViewportSize: ['xxx_small', 'xx_small', 'x_small', 'small', 'fullscreen', 'responsive'],
  inputSpecificationType: ['text', 'number'],
  invitationErrorCode: ['expired', 'invalid_email'],
  itemAvailabilityStatus: ['available', 'low', 'out_of_stock'],
  itemIdentifier: ['item_number', 'sku'],
  labelRequestMethod: ['flow_web_sync', 'channel_web_async', 'direct_api_sync', 'direct_api_async', 'bridge_api_sync', 'partner_api_sync', 'notification_requiring_crossdock', 'flow_simulation_sync', 'autogenerated'],
  labelTriggerMethod: ['autogenerated', 'on_demand'],
  laneDirection: ['outbound', 'return'],
  lanePreselectPreference: ['lowest_cost', 'default_tier'],
  laneStrategy: ['oldest', 'fastest', 'lowest_cost', 'highest_priority'],
  levyComponent: ['goods', 'duty', 'insurance', 'freight', 'vat'],
  levyStrategy: ['minimum', 'average', 'maximum'],
  locationErrorCode: ['address_required', 'ip_invalid', 'ip_required', 'timezone_unavailable'],
  logisticsFormatPreference: ['shopify_console', 'existing_3pl_integration', 'byo_integration'],
  marginType: ['fixed', 'percent'],
  measurementSystem: ['imperial', 'metric'],
  merchantDisabledReason: ['merchant_deactivated', 'merchant_rejected'],
  merchantGiftCardErrorCode: ['invalid', 'expired', 'empty', 'insufficient_funds', 'unsupported_currency'],
  merchantOfRecord: ['flow', 'organization'],
  merchantRejectedReason: ['merchant_ubo_is_pep', 'merchant_catalog_is_unsupportable', 'merchant_failed_kyb_review'],
  method: ['post'],
  onboardingApplicationStatus: ['to_do', 'in_progress', 'on_hold', 'rejected', 'accepted'],
  onboardingBlockedReason: ['street_address_is_blank_3pl', 'street_address_is_po_box_3pl', 'business_street_address_is_blank', 'business_street_address_is_po_box', 'exception_merchant', 'application_missing', 'missing_logistics_contact_info'],
  onboardingTradeSector: ['accessories', 'animals_and_pet_supplies', 'apparel', 'apparel_and_accessories', 'arts_and_entertainment', 'baby_and_toddler', 'business_and_industrial', 'cameras_and_optics', 'electronics', 'food_beverages_and_tobacco', 'furniture', 'gift_cards', 'hardware', 'health_and_beauty', 'home_and_garden', 'jewelry', 'luggage_and_bags', 'mature', 'media', 'office_supplies', 'paper_and_art', 'religious_and_ceremonial', 'software', 'sporting_goods', 'sports_and_fitness', 'toys_and_games', 'toys_hobbies_gifts', 'vehicles_and_parts', 'other'],
  orderChangeSource: ['consumer', 'retailer', 'fulfillment', 'flow', 'carrier'],
  orderErrorCode: ['generic_error', 'order_item_not_available', 'order_identifier_error', 'authorization_invalid', 'domestic_shipping_unavailable', 'shipping_unavailable', 'value_threshold_exceeded', 'invalid_currency', 'invalid_country', 'invalid_region', 'invalid_language', 'item_out_of_stock', 'gift_card_not_accepted', 'total_changed'],
  orderMerchantOfRecord: ['flow', 'organization', 'mixed'],
  orderPaymentSourceType: ['globale', 'third_party'],
  orderPaymentType: ['card', 'online', 'credit', 'external', 'subsidized', 'installment_plan', 'cash_on_delivery'],
  orderPriceDetailComponentKey: ['adjustment', 'vat_deminimis', 'duty_deminimis', 'duties_item_price', 'duties_freight', 'duties_insurance', 'vat_item_price', 'vat_freight', 'vat_insurance', 'vat_duties_item_price', 'vat_duties_freight', 'vat_duties_insurance', 'item_price', 'item_discount', 'rounding', 'insurance', 'shipping', 'shipping_discount', 'order_discount', 'subtotal_percent_sales_margin', 'subtotal_vat_percent_sales_margin', 'subtotal_duty_percent_sales_margin', 'vat_subsidy', 'duty_subsidy', 'remote_area_surcharge', 'fuel_surcharge', 'emergency_situation_surcharge', 'peak_surcharge', 'duties_taxes_paid_surcharge', 'tip'],
  orderPriceDetailKey: ['adjustment', 'subtotal', 'vat', 'duty', 'shipping', 'insurance', 'discount', 'surcharges', 'tip'],
  orderRefundSummaryIncludes: ['duties', 'vat', 'shipping'],
  orderRefundSummaryPartialCharged: ['per_item', 'for_order', 'by_value_percentage', 'by_quantity_percentage'],
  orderStatus: ['open', 'submitted'],
  orderStorage: ['do_not_persist', 'persist'],
  orderType: ['standard', 'replacement', 'edit'],
  organizationPaymentMethodTag: ['deny'],
  organizationStatus: ['active', 'inactive', 'deactivated', 'provisioned'],
  organizationType: ['standalone', 'channel'],
  originLocationSource: ['public_hub_code', 'merchant_hub_code_override', 'shopify', 'fallback_location'],
  packageDimensionsSource: ['provided', 'item_dimensions_estimated', 'dimensions_estimated', 'default_item_dimensions_estimated'],
  paymentActionType: ['redirect', 'redirect_get', 'redirect_post', 'select_payment_option', 'use_sdk_klarna_v1', 'use_sdk_applepay_js', 'use_sdk_googlepay', 'use_sdk_paypal', 'use_sdk_stripe_v3', 'use_sdk_adyen_v3', 'use_sdk_adyen_v4', 'execute_script', 'display_inline_window'],
  paymentErrorCode: ['duplicate', 'invalid_amount', 'invalid_currency', 'invalid_method', 'invalid_order', 'invalid_customer', 'invalid_destination', 'unknown'],
  paymentFailureCode: ['action_expired', 'action_cancelled', 'action_failed', 'authorization_declined', 'not_supported', 'fraudulent', 'error', 'payment_checks_declined'],
  paymentFeeType: ['fx', 'mor'],
  paymentMethodCapability: ['credit', 'debit'],
  paymentMethodDataOptionType: ['ideal_issuer_option'],
  paymentMethodRuleContentKey: ['description'],
  paymentMethodType: ['card', 'online', 'offline'],
  paymentRequestReviewCheckStatus: ['passed', 'failed'],
  paymentRequestReviewCheckType: ['restricted_party_screening', 'fraud_suspicious_behavior', 'fraud_suspicious_past_activity', 'fraud_risky_velocity', 'fraud_previous_chargebacks', 'order_restricted_goods', 'order_unsupported_destination', 'order_missing_information', 'order_domestic', 'order_mismatched_currencies', 'order_missing'],
  paymentRequestReviewStatus: ['pending', 'approved', 'rejected'],
  paymentSourceConfirmationActionType: ['cvv', 'billing_address', 'number'],
  paymentStatus: ['requires_payment_method', 'requires_action', 'processing', 'cancelled', 'expired', 'authorized', 'reversed', 'captured', 'refunded', 'in_dispute', 'charged_back'],
  paymentType: ['card', 'klarna', 'googlepay', 'paypal', 'applepay', 'ideal', 'sofort', 'afterpay', 'bancontact', 'twint', 'przelewy24', 'mobilepay', 'grabpay', 'vipps', 'kcp_creditcard'],
  payoutAttachmentType: ['transactions'],
  payoutStatusFailureCode: ['invalid_account_number', 'account_closed', 'could_not_process'],
  pendingPayoutTransactionReasonCode: ['waiting_for_full_refund', 'waiting_for_fulfillment', 'waiting_for_in_transit', 'waiting_for_next_payout_date', 'waiting_for_tracking_info', 'waiting_for_positive_account_balance', 'unfulfilled_amount_greater_than_negative_balance', 'account_payment_hold'],
  permittedHttpMethod: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  physicalDeliverySpecialSerivce: ['cold_storage', 'hazardous', 'perishable'],
  postalType: ['eircode', 'pin', 'postal', 'zip'],
  preferredServiceSelectionStrategy: ['calculated_rate', 'flat_rate', 'custom_rate'],
  priceAccuracy: ['calculated', 'estimated_from_partial_destination'],
  priceBookStatus: ['draft', 'published', 'archived'],
  priceDetailComponentKey: ['base_price', 'discount', 'currency_margin', 'percent_item_margin', 'fixed_item_margin', 'duties_item_price', 'duties_added_margin', 'duties_rounding', 'duties_deminimis', 'vat_item_price', 'vat_added_margin', 'vat_rounding', 'vat_duties_item_price', 'vat_duties_added_margin', 'vat_duties_rounding', 'vat_deminimis', 'item_price_percent_sales_margin', 'margins_percent_sales_margin', 'rounding_percent_sales_margin', 'vat_percent_sales_margin', 'vat_duty_percent_sales_margin', 'duty_percent_sales_margin'],
  priceDetailKey: ['item_price', 'margins', 'vat', 'duty', 'rounding', 'adjustment'],
  priceFacetBoundary: ['min', 'max'],
  pricingLevySetting: ['included', 'displayed', 'ignored'],
  productRestrictionRule: ['adult_product', 'alcohol', 'anti_money_laundering', 'collagen', 'consumer_safety', 'cosmetics', 'dg_batteries', 'dg_hazmat', 'drugs', 'dual_use', 'fine_art', 'fish_wildlife_cites', 'fish_wildlife_plant', 'fish_wildlife_USFWS', 'food', 'gambling', 'health', 'human_hair', 'insufficient_details', 'intangible', 'jewelry', 'jewelry_watches_over_limit', 'knives', 'liquids', 'oversized', 'restrict_by_default', 'supplements', 'tattoo_ink_and_pmu', 'weapon', 'wood'],
  promotionTriggerType: ['automatic', 'order_subtotal'],
  provinceType: ['area', 'city', 'county', 'department', 'dependency', 'district', 'do_si', 'emirate', 'entity', 'island', 'municipality', 'oblast', 'outlying_area', 'parish', 'prefecture', 'province', 'state', 'territory', 'other'],
  quoteErrorCode: ['generic_error', 'items_not_available', 'shipping_unavailable'],
  ratecardOwner: ['flow', 'organization'],
  refundDeclineCode: ['expired', 'insufficient_funds', 'unknown'],
  refundFailureCategory: ['amount_too_high', 'amount_too_low', 'not_enough_balance', 'insufficient_funds', 'refund_period_expired', 'dispute', 'not_captured', 'unsupported_payment_method', 'unsupported_partial_refund', 'invalid_currency', 'card_no_longer_valid', 'general'],
  refundStatus: ['pending', 'succeeded', 'failed', 'canceled'],
  regionType: ['state', 'province', 'jurisdiction'],
  restrictedReviewStatus: ['in_review', 'reviewed'],
  returnItemStatus: ['returnable', 'non-returnable'],
  returnPolicyState: ['current', 'deleting', 'updating'],
  returnStatus: ['open', 'refunded'],
  returnTrackingStatus: ['awaiting_customs_clearance', 'cancel_requested', 'canceled', 'collection_attempt_failed', 'customs_clearance_completed', 'delivered_to_retailer', 'in_transit_to_local_hub', 'in_transit_to_retailer', 'parcel_added_to_pallet', 'parcel_delayed', 'parcel_extracted_from_pallet', 'parcel_lost', 'parcel_processed_by_retailer', 'parcel_under_investigation', 'processed_by_local_hub', 'received_at_local_hub', 'received_by_the_carrier', 'return_registered_online'],
  reversalErrorCode: ['amount_exceeds_balance', 'authorization_declined', 'authorization_expired', 'invalid_authorization', 'invalid_key', 'invalid_amount', 'invalid_currency', 'no_remaining_balance', 'partial_reversal_not_supported', 'unknown'],
  reversalStatus: ['pending', 'processed', 'failed'],
  reviewStatus: ['high_risk_in_review', 'low_risk_in_review', 'reviewed'],
  role: ['admin', 'member'],
  roundingMethod: ['up', 'down', 'nearest'],
  roundingType: ['pattern', 'multiple'],
  scheduleExceptionStatus: ['Open', 'Closed'],
  shipmentIntegrationType: ['direct', 'information', 'preadvice'],
  shipmentRecipient: ['customer', 'return', 'crossdock'],
  shippingConfigurationType: ['default', 'variant'],
  shippingLabelErrorCode: ['generic_error', 'cancelled_order', 'carrier_outage', 'catalog_issue', 'invalid_destination', 'invalid_origin', 'invalid_shipping_parameters', 'merchant_error', 'order_not_found', 'order_processing', 'restricted_item', 'unsupported_lane'],
  shopifyGrant: ['customer', 'discount', 'gift_card', 'metafield', 'order'],
  shopifyLocalizationMethod: ['api', 'ssr'],
  shopifySyncCheck: ['localized_variants', 'flow_variant_metafields'],
  sortDirection: ['ascending', 'descending'],
  statementAttachmentType: ['csv'],
  storedMethodUsageStep: ['initial', 'subsequent'],
  strategy: ['range', 'from', 'to'],
  subcatalogItemStatus: ['excluded', 'included', 'restricted'],
  substatusCode: ['Delivered_001', 'Delivered_002', 'Delivered_003', 'Delivered_004', 'AvailableForPickup_001', 'Exception_001', 'Exception_002', 'Exception_003', 'Exception_004', 'Exception_005', 'Exception_006', 'Exception_007', 'Exception_008', 'Exception_009', 'Exception_010', 'Exception_011', 'Exception_012', 'Exception_013', 'AttemptFail_001', 'AttemptFail_002', 'AttemptFail_003', 'InTransit_001', 'InTransit_002', 'InTransit_003', 'InTransit_004', 'InTransit_005', 'InTransit_006', 'InTransit_007', 'InTransit_008', 'InTransit_009', 'InfoReceived_001', 'OutForDelivery_001', 'OutForDelivery_003', 'OutForDelivery_004', 'Pending_001', 'Pending_002', 'Pending_003', 'Pending_004', 'Pending_005', 'Pending_006', 'Expired_001'],
  surchargeResponsibleParty: ['organization', 'customer'],
  taxApplicability: ['none', 'all'],
  taxReportType: ['consumer', 'b2b'],
  taxVerificationResult: ['valid', 'invalid', 'unable_to_validate'],
  taxabilityType: ['tax_rule'],
  taxabilityValue: ['exempt'],
  threeDSecureCode: ['verified', 'not_verified', 'failed'],
  threedsTwoChallengeViewport: ['xxx_small', 'xx_small', 'x_small', 'small', 'fullscreen'],
  tierAvailability: ['always', 'backup'],
  tierEstimateType: ['calculated', 'custom'],
  tierStrategy: ['fastest', 'lowest_cost'],
  tokenType: ['permanent', 'one_time'],
  trackingNumberType: ['flow', 'carrier'],
  trackingStatus: ['label_created', 'pending', 'info_received', 'picked_up', 'in_transit', 'out_for_delivery', 'attempt_fail', 'delivered', 'exception', 'returned', 'expired', 'unknown', 'unmapped'],
  tradeAgreementName: ['USMCA', 'T-MEC', 'CUSMA', 'TCA'],
  tradeAgreementStatus: ['supported', 'not_supported'],
  transactionSource: ['capture', 'refund', 'dispute', 'adjustment', 'reversal', 'shipping_label', 'shipping_label_service', 'shipping_label_revenue_share', 'trueup', 'trueup_base', 'trueup_surcharge', 'carrier_charge', 'carrier_charge_revenue_share', 'platform_fee', 'tax', 'duty', 'withholding', 'other_adjustment', 'tax_adjustment', 'channel', 'channel_billed', 'order_service', 'virtual_card_capture', 'virtual_card_refund', 'failed_payout', 'tax_refund', 'non_l4l_tax_duty_fx', 'ge_revenue_share'],
  trueupSource: ['flow', 'channel', 'dhl-parcel', 'dhl', 'ups'],
  trueupSurchargeType: ['fuel', 'remote_area', 'oversize', 'duties_paid', 'emergency', 'peak', 'address_correction', 'security', 'eei_filing', 'fixed_ddp', 'fixed_currency_conversion', 'prohibited_item', 'undeliverable_shipment', 'signature_required', 'direct_delivery', 'saturday_stop', 'residential_extended_area_pickup', 'package_level_detail'],
  unitOfLength: ['millimeter', 'centimeter', 'inch', 'foot', 'meter'],
  unitOfMeasurement: ['millimeter', 'centimeter', 'inch', 'foot', 'cubic_inch', 'cubic_meter', 'gram', 'kilogram', 'meter', 'ounce', 'pound'],
  unitOfTime: ['year', 'month', 'week', 'day', 'hour', 'minute'],
  unitOfVolume: ['cubic_inch', 'cubic_meter'],
  unitOfWeight: ['gram', 'kilogram', 'ounce', 'pound'],
  updatePolicy: ['auto', 'queue', 'discard'],
  userStatus: ['pending', 'active', 'inactive'],
  valueAddedService: ['HazardousMaterial'],
  visibility: ['public', 'private'],
  webhookStatus: ['pending', 'success', 'failure', 'ignored'],
  withholdingDeductionType: ['tax', 'duty', 'freight', 'insurance'],
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
    this.rates = new Rates(options);
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
    this.centers = new Centers(options);
    this.deliveryWindows = new DeliveryWindows(options);
    this.dimensionEstimates = new DimensionEstimates(options);
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
    this.abandonedOrderPromotions = new AbandonedOrderPromotions(options);
    this.abandonedOrderSettings = new AbandonedOrderSettings(options);
    this.allocationV2s = new AllocationV2s(options);
    this.b2bCreditMemos = new B2bCreditMemos(options);
    this.b2bInvoices = new B2bInvoices(options);
    this.bankAccountForms = new BankAccountForms(options);
    this.catalogPriceBookItemDocuments = new CatalogPriceBookItemDocuments(options);
    this.channelAuthorizations = new ChannelAuthorizations(options);
    this.channelBankAccounts = new ChannelBankAccounts(options);
    this.channelCurrencyPairs = new ChannelCurrencyPairs(options);
    this.channelDefaultBankAccounts = new ChannelDefaultBankAccounts(options);
    this.channelOrganizations = new ChannelOrganizations(options);
    this.channelOrganizationAuthorizations = new ChannelOrganizationAuthorizations(options);
    this.channelPayouts = new ChannelPayouts(options);
    this.channelPendingPayoutTransactions = new ChannelPendingPayoutTransactions(options);
    this.channelRates = new ChannelRates(options);
    this.channelStatements = new ChannelStatements(options);
    this.channelTokens = new ChannelTokens(options);
    this.channelTransactions = new ChannelTransactions(options);
    this.channelViesRegistrations = new ChannelViesRegistrations(options);
    this.checkoutTokens = new CheckoutTokens(options);
    this.consumerInvoices = new ConsumerInvoices(options);
    this.consumerInvoiceDocuments = new ConsumerInvoiceDocuments(options);
    this.countryOfOrigins = new CountryOfOrigins(options);
    this.countryPickers = new CountryPickers(options);
    this.creditMemos = new CreditMemos(options);
    this.customers = new Customers(options);
    this.customerAddressBook = new CustomerAddressBook(options);
    this.customerAddressBookContacts = new CustomerAddressBookContacts(options);
    this.customerBundles = new CustomerBundles(options);
    this.customerPurgeSettings = new CustomerPurgeSettings(options);
    this.customerTokens = new CustomerTokens(options);
    this.documents = new Documents(options);
    this.dutyItems = new DutyItems(options);
    this.dutyItemApprovals = new DutyItemApprovals(options);
    this.dutyItemProducers = new DutyItemProducers(options);
    this.ecommercePlatforms = new EcommercePlatforms(options);
    this.emailVerifications = new EmailVerifications(options);
    this.exclusionRules = new ExclusionRules(options);
    this.exports = new Exports(options);
    this.flowRoles = new FlowRoles(options);
    this.flowTransactions = new FlowTransactions(options);
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
    this.knowYourBusinesses = new KnowYourBusinesses(options);
    this.kubeHealthchecks = new KubeHealthchecks(options);
    this.links = new Links(options);
    this.memberships = new Memberships(options);
    this.merchantApplications = new MerchantApplications(options);
    this.merchantGiftCardBalances = new MerchantGiftCardBalances(options);
    this.merchantGiftCardRedemptions = new MerchantGiftCardRedemptions(options);
    this.merchantGiftCardReversals = new MerchantGiftCardReversals(options);
    this.organizationAuthorizations = new OrganizationAuthorizations(options);
    this.organizationBankAccounts = new OrganizationBankAccounts(options);
    this.organizationDefaultBankAccounts = new OrganizationDefaultBankAccounts(options);
    this.organizationDefaultConfigurations = new OrganizationDefaultConfigurations(options);
    this.organizationOnboardingStates = new OrganizationOnboardingStates(options);
    this.organizationPayouts = new OrganizationPayouts(options);
    this.organizationPendingPayoutTransactions = new OrganizationPendingPayoutTransactions(options);
    this.organizationTokens = new OrganizationTokens(options);
    this.organizationTokenV2 = new OrganizationTokenV2(options);
    this.packageDimensionses = new PackageDimensionses(options);
    this.partnerTokens = new PartnerTokens(options);
    this.passwordResetForms = new PasswordResetForms(options);
    this.paymentPaymentMethods = new PaymentPaymentMethods(options);
    this.paymentRequests = new PaymentRequests(options);
    this.paymentRequestBundles = new PaymentRequestBundles(options);
    this.permissionChecks = new PermissionChecks(options);
    this.returnPolicies = new ReturnPolicies(options);
    this.romanizations = new Romanizations(options);
    this.scheduledExports = new ScheduledExports(options);
    this.sessions = new Sessions(options);
    this.sessionAuthorizations = new SessionAuthorizations(options);
    this.shopifyCarts = new ShopifyCarts(options);
    this.shopifyCartConversions = new ShopifyCartConversions(options);
    this.shopifyLocalizationSettings = new ShopifyLocalizationSettings(options);
    this.shopifyLocationFlowCenterMappings = new ShopifyLocationFlowCenterMappings(options);
    this.shopifyPrivateApps = new ShopifyPrivateApps(options);
    this.shopifySyncStatuses = new ShopifySyncStatuses(options);
    this.statements = new Statements(options);
    this.suggestions = new Suggestions(options);
    this.taxSettings = new TaxSettings(options);
    this.tokens = new Tokens(options);
    this.tokenValidations = new TokenValidations(options);
    this.tradeAgreements = new TradeAgreements(options);
    this.tradeAgreementCertifiers = new TradeAgreementCertifiers(options);
    this.transactions = new Transactions(options);
    this.ultimateBeneficiaryOwners = new UltimateBeneficiaryOwners(options);
    this.uploads = new Uploads(options);
    this.users = new Users(options);
  }
}
