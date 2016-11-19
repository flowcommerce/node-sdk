# Flow Commerce API - Node SDK Documentation

These resources mirror the official documentation located at
[docs.flow.io](https://docs.flow.io).

## Resources

| Resource | Description |
| :------- | :---------- |
| [attributes](attributes.md) | An attribute can be configured to be used in different ways throughout Flow. A common example is to identify a meaningful attribute (e.g. brand) that can then be displayed throughout the Flow console. |
| [catalogs](catalogs.md) |  |
| [experiences](experiences.md) | Experiences define a local experience for a given geographic region |
| [experienceDefaults](experienceDefaults.md) | Defines a set of defaults for a given organization and region |
| [items](items.md) | The Flow item defines a specific item that can be purchased by a consumer. For many clients, this will map to a Sku. |
| [orders](orders.md) | An order represents all of the information about a particular line item, including pricing, currency rates, delivery options, etc. All information in an order is guaranteed by Flow - if an order is submitted before its expiration. The intended use case is to create an order as a consumer enters checkout, then to submit that order as part of the user submitting their order. Note that Flow will automatically mark an order submitted if we see a payment authorization for an order. |
| [orderEstimates](orderEstimates.md) | Lightweight estimate for a group of items without any customer-related information. This will contain available estimates on shipping, taxes, and duties. |
| [organizations](organizations.md) |  |
| [queries](queries.md) | Represents a typed query to indicate which items to include or exclude in a subcatalog |
| [subcatalogs](subcatalogs.md) | A configuration with custom query to select a subset of master catalog items for a localized experience |
| [subcatalogItems](subcatalogItems.md) | Represents information specific to an item in a given subcatalog |
| [targetings](targetings.md) |  |
| [targetingItems](targetingItems.md) | Represents catalog items where a targeteing query is applicable |
| [itemFunctions](itemFunctions.md) | Item Functions are javascript code used to calculate the localized price of an additional item. Each function can be associated with an optional query identifying the products to which the function applies. Flow selects the first function matching an item, then uses that function to calculate local prices whenever any data relevant to the item changes (e.g. on update in master catalog, on change in relevant exchange rate, etc.). Item functions are immutable once created. |
| [organizationCurrencySettings](organizationCurrencySettings.md) | Represents organization-specific currency conversion adjustments. |
| [rates](rates.md) | Represents an organization-specific currency conversion rate at a point in time. |
| [spotRates](spotRates.md) |  |
| [harmonizationSettings](harmonizationSettings.md) | Organization level settings. |
| [harmonizedCategories](harmonizedCategories.md) | Categories optimized for harmonization |
| [harmonizedItems](harmonizedItems.md) | A harmonized item stores explicit information about this item for the purposes of harmonization / classification. The harmonization process begins by creating a harmonized item; this kicks off the internal processes. Once assigned, codes will be available via the hs6 and hs10 resources |
| [harmonizedItemDuties](harmonizedItemDuties.md) | Used to specifically set an item&#x27;s duty rate for a given trade lane. |
| [harmonizedLandedCosts](harmonizedLandedCosts.md) | Summary of landed cost data (taxes and duties) for 1 or more items going to a single destination country. Records are unique based on (item.number, country of origin). |
| [hs10](hs10.md) | API to fetch HS-10 codes assigned to your items. Note that if your item has been classified multiple times or its classification has changed, this API will provide you with the most recent harmonization code for that item. That is, each code is unique across your item number, country of origin and destination. |
| [hs6](hs6.md) | API to fetch HS-6 codes assigned to your items. Note that if your item has been classified multiple times or its classification has changed, this API will provide you with the most recent harmonization code for that item. |
| [authorizations](authorizations.md) | An authorization is used to check and reserve funds w/ a given payment method. No funds are actually transferred; once you have you an authorization, you can capture up to the amount of the authorization. |
| [captures](captures.md) | Capture actually transfers funds. You can capture as many times as you&#x27;d like up until the total amount of the authorization has been captured or the authorization otherwise becomes unavailable (e.g. expires). |
| [cards](cards.md) | Card represents the metadata about a secure, tokenized card. The card &#x27;token&#x27; is a unique, cryptographically secure token by which this card can be identified in the future. The card token itself will either be a permanent card token (denoted by a prefix of F96) or a one time nonce (denoted by a prefix of F17). Nonces represent cards that were encrypted from public channels (like the user&#x27;s browser via JavaScript) and can be used once only. If you have a nonce you can exchange it for a permanent card token via the operation POST /:organization/cards/nonces |
| [publicKeys](publicKeys.md) | A public key is used to encrypt cards client side prior to submitting to the Flow vault. |
| [refunds](refunds.md) | Refunds can be created against either a specific capture or an authorization (in which case we will select 1 or more specific captures against which to execute the refund). |
| [carriers](carriers.md) | Partner that actually take a shipment between places (ex: FedEx, DHL, SF Express) |
| [centers](centers.md) | Represents a facility capable of fulfilling a shipment |
| [deliveryWindows](deliveryWindows.md) |  |
| [inventoryRules](inventoryRules.md) | Ordered list of rules to apply, from first to last, to get available quantity. This is unique per organization |
| [inventorySnapshots](inventorySnapshots.md) | Inventory snapshot reflects the current quantity and available number of units for a given center / item |
| [inventoryUpdates](inventoryUpdates.md) | Represents a single update on inventory quantity |
| [quotes](quotes.md) | Represents a collection of deliveries and available options for fulfillment of that delivery |
| [quoteEstimates](quoteEstimates.md) |  |
| [rmas](rmas.md) |  |
| [services](services.md) | Specific service rendered by the carrier (fedex ground saturday, ups overnight weekend, etc) |
| [shippingLabels](shippingLabels.md) | Represents information about a carrier-generated shipping label used by a shipper to transport a package from a given origin to destination |
| [shippingNotifications](shippingNotifications.md) | Represents information about a client-facilitated shipment where the shipping label and fulfillment was not handled by Flow. For merchant-of-record and tracking purposes, clients doing their own shipping will need to notify Flow of shipped packages. |
| [tiers](tiers.md) | Service shipping tier available in this tier gorup. e.g. Standard tier, Express tier, Economy tier |
| [tierDefaults](tierDefaults.md) | Grouping of shipping tiers by experience to provide logical default functionality. |
| [tierRules](tierRules.md) | System to filter incoming quote for a shipment request based on a query and output corresponding outcomes. |
| [trackings](trackings.md) | Top level tracking information which contains labels. In cases where shipments are re-labeled, you will see multiple labels for each tracking allowing simple access to see where a shipment is - with which carrier and with the local tracking number |
| [trackingEvents](trackingEvents.md) |  |
| [trackingLabels](trackingLabels.md) | Represents a specific label being tracked as part of the tracking bucket |
| [webhooks](webhooks.md) |  |
| [webhookDeliveries](webhookDeliveries.md) | A webhook delivery represents an event that matched a webhook&#x27;s event types. Each delivery will be attempted one or more times subject to the settings of your webhook. |
| [addresses](addresses.md) |  |
| [countryDefaults](countryDefaults.md) | Provides country level defaults, incl language and currency. This resource allows you to provide geo info (e.g. IP, address, country) and will geolocate the request, returning the matching country level defaults. For example, if a user lands on your website and you do not have any stored preferences, you can use this API to retrieve the best default preferences based on the location of the user by providing their IP Address. |
| [timezones](timezones.md) | Time zone data is provided by the public IANA time zone database. See http://www.iana.org/time-zones |
| [countries](countries.md) | ISO 3166 country codes. Note Flow APIs will accept either the 2 or 3 character country code, but internally we normalize data and store as the 3 character, upper case ISO code. See https://api.flow.io/reference/countries |
| [currencies](currencies.md) | ISO 4217 3-character currency code. See https://api.flow.io/reference/currencies |
| [languages](languages.md) | ISO 639 2-character language code. See https://api.flow.io/reference/languages |
| [regions](regions.md) | A region represents a geographic area of the world. Regions can be countries, continents or other political areas (like the Eurozone). See https://api.flow.io/reference/regions |
| [documents](documents.md) |  |
| [emailVerifications](emailVerifications.md) | Represents the successful response of an email verification token. We return the email address in this case to allow the UI to display which email address was verified. |
| [exports](exports.md) |  |
| [healthchecks](healthchecks.md) |  |
| [imports](imports.md) |  |
| [invitations](invitations.md) | An invitation via email to a user to join this organization. The user will then walk through a user login/registration process and will immediately become a member of the organization. |
| [memberships](memberships.md) | Represents the users that are part of this organization. Primary purpose is to manage which users have access to the organization&#x27;s data and to provide a simple user interface to assign roles and permissions to each member of the organization |
| [organizationAuthorizations](organizationAuthorizations.md) | Defines the data used for broad authorization of user access to org level data |
| [organizationTokens](organizationTokens.md) | All of the metadata associated with a given token. |
| [partnerTokens](partnerTokens.md) | All of the metadata associated with a given token. |
| [passwordResetForms](passwordResetForms.md) |  |
| [suggestions](suggestions.md) |  |
| [tokens](tokens.md) |  |
| [tokenValidations](tokenValidations.md) | Validations test whether or not a given API token is valid |
| [uploads](uploads.md) | Provides the ability to upload a file to a URL (an expiring s3 url, usually valid for 1 week) |
| [users](users.md) |  |
