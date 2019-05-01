# Flow Commerce API - Node SDK Documentation

These resources mirror the official documentation located at
[docs.flow.io](https://docs.flow.io).

## Resources

| Resource | Description |
| :------- | :---------- |
| [allocations](allocations.md) |  |
| [attributes](attributes.md) | An attribute can be configured to be used in different ways throughout Flow. A common example is to identify a meaningful attribute (e.g. brand) that can then be displayed throughout the Flow console. |
| [catalogs](catalogs.md) |  |
| [checkoutAttributes](checkoutAttributes.md) | A Checkout Attribute defines an attribute that will be made available via the checkout item content. This is useful if you would like to surface a specific attribute (like &#x27;size&#x27; or &#x27;color&#x27;) in checkout. |
| [checkoutItemContents](checkoutItemContents.md) | A Checkout Item Content provides information about an item to support rendering of that item in the context of checkout |
| [creditPayments](creditPayments.md) | A Credit Payment records a &#x27;non cash&#x27; payment against an order (e.g. a store credit, gift card, etc.), recording the amount of that credit and additional details to reconcile payments. The primary purpose of the credit payment is to record that a payment has been made against an order so the remaining balance can be correctly computed. |
| [experiences](experiences.md) | Experiences define a local experience for a given geographic region |
| [experienceCheckoutSettings](experienceCheckoutSettings.md) |  |
| [experienceDefaults](experienceDefaults.md) | Defines a set of defaults for a given organization and region |
| [experienceLogisticsSettings](experienceLogisticsSettings.md) | Controls logistics related settings per experience |
| [items](items.md) | The Flow item defines a specific item that can be purchased by a consumer. For many clients, this will map to a Sku. |
| [orders](orders.md) | An order represents all of the information about a particular set of line items, including pricing, currency rates, delivery options, etc. All information in an order is guaranteed by Flow - if an order is submitted before its expiration. The intended use case is to create an order as a consumer enters checkout, then to submit that order as part of the user submitting their order. Note that Flow will automatically mark an order submitted if we see payment authorization(s) covering the full balance of an order. |
| [orderBuilders](orderBuilders.md) | The Order Builder resource provides an incremental approach to building an order - returning the order details as they exist along with validation errors. The main difference is that this API will never return a 422 - rather it provides a container to view the order in its current state as well as all validation errors |
| [orderEstimates](orderEstimates.md) | Lightweight estimate for a group of items without any customer-related information. This will contain available estimates on shipping, taxes, and duties. |
| [orderIdentifiers](orderIdentifiers.md) | Represents alternate identifiers that can be used to lookup an order. Common use cases are to support attaching a primary identifier (e.g. a nice order number) post order submission or attaching IDs that are used by the warehouse to ship the orders. |
| [orderNumberGenerators](orderNumberGenerators.md) |  |
| [orderPromotions](orderPromotions.md) |  |
| [organizations](organizations.md) |  |
| [paymentMethodRules](paymentMethodRules.md) | Returns payment methods that are enabled for an organization and available for the provided country and currency. |
| [priceBooks](priceBooks.md) |  |
| [priceBookItems](priceBookItems.md) |  |
| [subcatalogs](subcatalogs.md) | A configuration with custom query to select a subset of master catalog items for a localized experience |
| [subcatalogItems](subcatalogItems.md) | Represents information specific to an item in a given subcatalog |
| [subcatalogQueries](subcatalogQueries.md) | Represents a typed query to indicate which items to include or exclude in a subcatalog |
| [targetings](targetings.md) |  |
| [targetingItems](targetingItems.md) | Represents catalog items where a targeting query is applicable |
| [organizationCurrencySettings](organizationCurrencySettings.md) | Represents organization-specific currency conversion adjustments. |
| [rates](rates.md) | Represents an organization-specific currency conversion rate at a point in time. |
| [harmonizationSettings](harmonizationSettings.md) | Organization level settings. |
| [harmonizedCategories](harmonizedCategories.md) | Categories optimized for harmonization |
| [harmonizedItems](harmonizedItems.md) | A harmonized item stores explicit information about this item for the purposes of harmonization / classification. The harmonization process begins by creating a harmonized item; this kicks off the internal processes. Once assigned, codes will be available via the hs6 and hs10 resources |
| [harmonizedItemDuties](harmonizedItemDuties.md) | Used to specifically set an item&#x27;s duty rate for a given trade lane. |
| [harmonizedLandedCosts](harmonizedLandedCosts.md) | Summary of landed cost data (taxes and duties) for 1 or more items going to a single destination country. Records are unique based on (item.number, country of origin). |
| [hs10](hs10.md) | API to fetch HS-10 codes assigned to your items. Note that if your item has been classified multiple times or its classification has changed, this API will provide you with the most recent harmonization code for that item. That is, each code is unique across your item number, country of origin and destination. |
| [hs6](hs6.md) | API to fetch HS-6 codes assigned to your items. Note that if your item has been classified multiple times or its classification has changed, this API will provide you with the most recent harmonization code for that item. |
| [hsCodes](hsCodes.md) | API to fetch current HS-6 codes. |
| [tariffCodes](tariffCodes.md) | API to fetch current tariff codes. |
| [taxRegistrations](taxRegistrations.md) | Result of looking up a specific tax registration number. Indicates validity of a number for a specific country and (if valid) the associated person/company. |
| [authorizations](authorizations.md) |  |
| [captures](captures.md) | Capture actually transfers funds. You can capture as many times as you&#x27;d like up until the total amount of the authorization has been captured or the authorization otherwise becomes unavailable (e.g. expires). |
| [cards](cards.md) | Card represents the metadata about a secure, tokenized card. The card &#x27;token&#x27; is a unique, cryptographically secure token by which this card can be identified in the future. The card token itself will either be a permanent card token (denoted by a prefix of F96) or a one time nonce (denoted by a prefix of F17). Nonces represent cards that were encrypted from public channels (like the user&#x27;s browser via JavaScript) and can be used once only. If you have a nonce you can exchange it for a permanent card token via the operation POST /:organization/cards/nonces |
| [gatewayAuthenticationData](gatewayAuthenticationData.md) |  |
| [payments](payments.md) | Represents data for a specific online payment method |
| [publicKeys](publicKeys.md) | A public key is used to encrypt cards client side prior to submitting to the Flow vault. |
| [refunds](refunds.md) | Refunds can be created against either a specific capture or an authorization (in which case we will select 1 or more specific captures against which to execute the refund). |
| [reversals](reversals.md) | A reversal is used to clear an authorization (full or partial). |
| [virtualCards](virtualCards.md) | Virtual credit cards are created for a specific limit and currency. Currently only USD denominated cards can be issued. Once created the virtual card can be used in the same way as a physical credit card using the card number, cvv and expiration details. |
| [virtualCardCaptures](virtualCardCaptures.md) | Payment has been captured for the virtual credit card |
| [virtualCardRefunds](virtualCardRefunds.md) | A refund has been issued for the virtual credit card |
| [centers](centers.md) | Represents a facility capable of fulfilling a shipment |
| [deliveryWindows](deliveryWindows.md) | Flow&#x27;s estimate of when a shipment for this delivery will actually arrive at the final destination, taking into account a shipment estimate, center schedules, and carrier transit windows. |
| [dimensionEstimates](dimensionEstimates.md) |  |
| [inventoryRules](inventoryRules.md) | Ordered list of rules to apply, from first to last, to get available quantity. This is unique per organization |
| [inventorySnapshots](inventorySnapshots.md) | Inventory snapshot reflects the current quantity and available number of units for a given center / item |
| [inventoryUpdates](inventoryUpdates.md) | Represents a single update on inventory quantity |
| [manifests](manifests.md) | Represents closeout of a group of labels that have been transferred to the carrier for shipping |
| [quotes](quotes.md) | Represents a collection of deliveries and available options for fulfillment of that delivery |
| [ratecards](ratecards.md) | Snapshot of all lanes and rows across all service levels of an organization |
| [ratecardEstimates](ratecardEstimates.md) |  |
| [ratecardLanes](ratecardLanes.md) | Describe list of rates applicable for a lane on the ratecard - defined by origin and destination zone |
| [ratecardRates](ratecardRates.md) | Specific line item in a ratecard lane with information on a weight threshold and corresponding amount to charge |
| [returns](returns.md) |  |
| [serials](serials.md) | A unique identifier assigned to an individual item. |
| [shippingConfigurations](shippingConfigurations.md) |  |
| [shippingConfigurationCopies](shippingConfigurationCopies.md) |  |
| [shippingLabels](shippingLabels.md) | Represents information about a carrier-generated shipping label used by a shipper to transport a package from a given origin to destination |
| [shippingNotifications](shippingNotifications.md) | Represents information about a client-facilitated shipment where the shipping label and fulfillment was not handled by Flow. For merchant-of-record and tracking purposes, clients doing their own shipping will need to notify Flow of shipped packages. |
| [surchargeSettings](surchargeSettings.md) |  |
| [tiers](tiers.md) | Service shipping tier available in this tier group. e.g. Standard tier, Express tier, Economy tier |
| [tierRules](tierRules.md) | System to filter incoming quote for a shipment request based on a query and output corresponding outcomes. |
| [trackings](trackings.md) | Top level tracking information which contains labels. In cases where shipments are re-labeled, you will see multiple labels for each tracking allowing simple access to see where a shipment is - with which carrier and with the local tracking number |
| [trackingEvents](trackingEvents.md) |  |
| [trackingLabels](trackingLabels.md) | Represents a specific label being tracked as part of the tracking bucket |
| [webhooks](webhooks.md) |  |
| [webhookDeliveries](webhookDeliveries.md) | A webhook delivery represents an event that matched a webhook&#x27;s event types. Each delivery will be attempted one or more times subject to the settings of your webhook. |
| [webhookSettings](webhookSettings.md) | Sets organization level settings to determine things like how many retries on delivery, how long we wait, etc. By default, we will attempt delivery up to 6 times, using exponential backoff with a see of 1 minute (60k ms) - which means that we will retry over the course of approximately an hour before giving up. |
| [addresses](addresses.md) |  |
| [countryDefaults](countryDefaults.md) | Provides country level defaults, incl language and currency. This resource allows you to provide geo info (e.g. IP, address, country) and will geolocate the request, returning the matching country level defaults. For example, if a user lands on your website and you do not have any stored preferences, you can use this API to retrieve the best default preferences based on the location of the user by providing their IP Address. |
| [timezones](timezones.md) | Time zone data is provided by the public IANA time zone database. See http://www.iana.org/time-zones |
| [carriers](carriers.md) | Partner that actually takes a shipment between places (ex: FedEx, DHL, SF Express) |
| [carrierServices](carrierServices.md) | Specific service rendered by the carrier (fedex ground saturday, ups overnight weekend, etc) |
| [countries](countries.md) | ISO 3166 country codes. Note Flow APIs will accept either the 2 or 3 character country code, but internally we normalize data and store as the 3 character, upper case ISO code. See https://api.flow.io/reference/countries |
| [currencies](currencies.md) | ISO 4217 3-character currency code. See https://api.flow.io/reference/currencies |
| [languages](languages.md) | ISO 639 2-character language code. See https://api.flow.io/reference/languages |
| [locales](locales.md) | Locales defines standard conventions for presentation of content. See https://api.flow.io/reference/locales |
| [paymentMethods](paymentMethods.md) | Represents a single payment method - e.g VISA or Paypal - and any associated metadata required for processing |
| [provinces](provinces.md) | A subdivision/province/state within a country. These conform to the ISO 3166-2 standard for country subdivisions. See https://api.flow.io/reference/provinces |
| [regions](regions.md) | A region represents a geographic area of the world. Regions can be countries, continents or other political areas (like the Eurozone). See https://api.flow.io/reference/regions |
| [b2bInvoices](b2bInvoices.md) | The b2b invoice represents a transaction between Flow and one of our clients (e.g. Flow purchasing inventory to resell to a consumer). |
| [checkoutTokens](checkoutTokens.md) | Represents a secure token that can be used to redirect to Checkout UI |
| [consumerInvoices](consumerInvoices.md) | The consumer invoice represents the details of a set of items from a given order. This may represent either the full order or a partial fulfillment. |
| [consumerInvoiceDocuments](consumerInvoiceDocuments.md) |  |
| [creditMemos](creditMemos.md) | The credit memo represents the details of a refund and the reasons for the issuance of the refund. |
| [customers](customers.md) | A customer represents the actual person placing an order. |
| [customerAddressBook](customerAddressBook.md) | A composed model representing a customer&#x27;s address book contacts. |
| [customerAddressBookContacts](customerAddressBookContacts.md) | Preferences may indicate a contact is preferred for billing, invoicing, and/or shipping. |
| [documents](documents.md) |  |
| [emailVerifications](emailVerifications.md) | Represents the successful response of an email verification token. We return the email address in this case to allow the UI to display which email address was verified. |
| [exports](exports.md) |  |
| [feeds](feeds.md) | Describes types of feeds that may be produced by Flow. |
| [flowRoles](flowRoles.md) | All roles available to attach to a user. |
| [fraudEmailRules](fraudEmailRules.md) | Rule to apply to enable white-listing and black-listing for an email address. |
| [ftpFiles](ftpFiles.md) | The FTP File represents a file uploaded to the FTP Server |
| [ftpFolders](ftpFolders.md) | The FTP Folder represents a single folder associated with an organization for which we create an external FTP Directory |
| [ftpOrganizationSettings](ftpOrganizationSettings.md) | The FTP Organization Settings allows you to enable an FTP Drop Point for an organization, creating the standard set of FTP Folders, credentials, and associated webhooks. |
| [fulfillments](fulfillments.md) | Used to track and manage the fulfillment of an order. |
| [healthchecks](healthchecks.md) |  |
| [imports](imports.md) |  |
| [importTemplates](importTemplates.md) |  |
| [invitations](invitations.md) | An invitation via email to a user to join this organization. The user will then walk through a user login/registration process and will immediately become a member of the organization. |
| [itemQuerySuggestions](itemQuerySuggestions.md) |  |
| [links](links.md) |  |
| [memberships](memberships.md) | Represents the users that are part of this organization. Primary purpose is to manage which users have access to the organization&#x27;s data and to provide a simple user interface to assign roles and permissions to each member of the organization |
| [organizationAuthorizations](organizationAuthorizations.md) | Defines the data used for broad authorization of user access to org level data |
| [organizationDefaultConfigurations](organizationDefaultConfigurations.md) |  |
| [organizationTokens](organizationTokens.md) | All of the metadata associated with a given token. |
| [partnerTokens](partnerTokens.md) | All of the metadata associated with a given token. |
| [passwordResetForms](passwordResetForms.md) |  |
| [permissionChecks](permissionChecks.md) | Used to test an integration&#x27;s permissions, including identifying the authentication technique that will be used for similar requests. |
| [scheduledExports](scheduledExports.md) |  |
| [sessions](sessions.md) |  |
| [sessionAuthorizations](sessionAuthorizations.md) |  |
| [shopifyCarts](shopifyCarts.md) | Cart actions are based off the Shopify Ajax API, documentation at https://help.shopify.com/themes/development/getting-started/using-ajax-api |
| [shopifyLocalizationSettings](shopifyLocalizationSettings.md) |  |
| [shopifyLocationFlowCenterMappings](shopifyLocationFlowCenterMappings.md) |  |
| [shopifyPrivateApps](shopifyPrivateApps.md) | Shopify private app information. |
| [shopifySyncStatuses](shopifySyncStatuses.md) |  |
| [suggestions](suggestions.md) |  |
| [taxSettings](taxSettings.md) |  |
| [tokens](tokens.md) |  |
| [tokenValidations](tokenValidations.md) | Validations test whether or not a given API token is valid |
| [uploads](uploads.md) | Provides the ability to upload a file to a URL (an expiring s3 url, usually valid for 1 week) |
| [users](users.md) |  |
