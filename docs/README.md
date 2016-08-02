# Flow Commerce API - Node SDK Documentation

These resources mirror the official documentation located at
[docs.flow.io](https://docs.flow.io).

## Resources

| Resource | Description |
| :------- | :---------- |
| [attributes](attributes.md) | An attribute can be configured to be used in different ways throughout Flow. A common example is to identify a meaningful attribute (e.g. brand) that can then be displayed throughout the Flow console. |
| [catalogs](catalogs.md) |  |
| [experiences](experiences.md) | Properties that define a customized local experience for a given geographic region |
| [items](items.md) | The Flow item defines a specific item that can be purchased by a consumer. For many clients, this will map to a Sku. |
| [orders](orders.md) | An order represents all of the information about a particular line item, including pricing, currency rates, delivery options, etc. All information in an order is guaranteed by Flow - if an order is booked before its expiration. The intended use case is to create an order as a consumer enters checkout, then to book that order in order processing. |
| [subcatalogs](subcatalogs.md) | A configuration with custom query to select a subset of master catalog items for a localized experience |
| [subcatalogItems](subcatalogItems.md) | Represents information specific to an item in a given subcatalog |
| [functions](functions.md) | Prioritized calculation yielding a localized price (also allows for custom defined price function) |
| [duties](duties.md) |  |
| [harmonizationSettings](harmonizationSettings.md) | Organization level settings. |
| [harmonizedItems](harmonizedItems.md) | A harmonized item stores explicit information about this item for the purposes of harmonization / classification. The harmonization process begins by creating a harmonized item; this kicks off the internal processes. Once assigned, codes will be available via the hs6 and hs10 resources |
| [harmonizedItemDuties](harmonizedItemDuties.md) | Used to specifically set an item&#x27;s duty rate for a given trade lane. |
| [harmonizedLandedCosts](harmonizedLandedCosts.md) | Summary of landed cost data (taxes and duties) for 1 or more items going to a single destination country. Records are unique based on (item.number, country of origin). |
| [hs10](hs10.md) | API to fetch HS-10 codes assigned to your items. Note that if your item has been classified multiple times or its classification has changed, this API will provide you with the most recent harmonization code for that item. That is, each code is unique across your item number, country of origin and destination. |
| [hs6](hs6.md) | API to fetch HS-6 codes assigned to your items. Note that if your item has been classified multiple times or its classification has changed, this API will provide you with the most recent harmonization code for that item. |
| [taxes](taxes.md) |  |
| [authorizations](authorizations.md) | An authorization is used to check and reserve funds w/ a given payment method. No funds are actually transferred; once you have you an authorization, you can capture up to the amount of the authorization. |
| [captures](captures.md) | Capture actually transfers funds. You can capture as many times as you&#x27;d like up until the total amount of the authorization has been captured or the authorization otherwise becomes unavailable (e.g. expires). |
| [cards](cards.md) | Card represents the metadata about a secure, tokenized card. The card &#x27;id&#x27; is a unique, cryptographically secure token by which this card can be identified in the future. |
| [refunds](refunds.md) | Refunds are used to issue refunds against a prior capture. |
| [bookings](bookings.md) | Represents second step of two-step purchase of Flow services. |
| [carriers](carriers.md) | Partner that actually take a shipment between places (ex: FedEx, DHL, SF Express) |
| [carrierAccounts](carrierAccounts.md) | carrier_account an organization has with a carrier. A carrier can have multiple carrier_accounts with a single carrier. This represents the many-to-many relationship between organizations and carriers. |
| [centers](centers.md) | Represents a facility capable of fulfilling a shipment |
| [deliveryWindows](deliveryWindows.md) |  |
| [inventoryRules](inventoryRules.md) | Ordered list of rules to apply, from first to last, to get available quantity. This is unique per organization |
| [inventorySnapshots](inventorySnapshots.md) | Inventory snapshot reflects the current quantity and available number of units for a given center / item |
| [inventoryUpdates](inventoryUpdates.md) | Represents a single update on inventory quantity |
| [labels](labels.md) | Represents a specific label being tracked as part of the tracking bucket |
| [labelEvents](labelEvents.md) |  |
| [lanes](lanes.md) | Available origin/destination mapping and available metadata for lanes of a carrier Service. e.g. UPS Ground only US-US, UPS Intl only US-Intl, etc |
| [quotes](quotes.md) | Represents a collection of deliveries and available options for fulfillment of that delivery |
| [services](services.md) | Specific service rendered by the carrier (fedex ground saturday, ups overnight weekend, etc) |
| [shipments](shipments.md) | Represents a subset of items from an order grouped into a single physical shipment. Flow provides a generated tracking number to track this shipment across multiple possible hops and carriers. |
| [shipmentLabels](shipmentLabels.md) | Top-level information on shipment tracking shipment_label and number |
| [tiers](tiers.md) | Service shipping tier available in this tier gorup. e.g. Standard tier, Express tier, Economy tier |
| [tierDefaults](tierDefaults.md) | Grouping of shipping tiers by experience to provide logical default functionality. |
| [tierRules](tierRules.md) | System to filter incoming quote for a shipment request based on a query and output corresponding outcomes. |
| [trackings](trackings.md) | Top level tracking information which contains labels. In cases where shipments are re-labeled, you will see multiple labels for each tracking allowing simple access to see where a shipment is - with which carrier and with the local tracking number |
| [countries](countries.md) |  |
| [currencies](currencies.md) | ISO 4217 3-character currency code. See https://api.flow.io/reference/currencies |
| [languages](languages.md) | ISO 639 2-character language code. See https://api.flow.io/reference/languages |
| [regions](regions.md) | A region represents a geographic area of the world. Regions can be countries, continents or other political areas (like the Eurozone). |
| [timezones](timezones.md) | Time zone data is provided by the public IANA time zone database. See http://www.iana.org/time-zones |
| [addresses](addresses.md) |  |
| [documents](documents.md) |  |
| [emailVerifications](emailVerifications.md) | Represents the successful response of an email verification token. We return the email address in this case to allow the UI to display which email address was verified. |
| [healthchecks](healthchecks.md) |  |
| [invitations](invitations.md) | An invitation via email to a user to join this organization. The user will then walk through a user login/registration process and will immediately become a member of the organization. |
| [memberships](memberships.md) | Represents the users that are part of this organization. Primary purpose is to manage which users have access to the organization&#x27;s data and to provide a simple user interface to assign roles and permissions to each member of the organization |
| [organizations](organizations.md) |  |
| [organizationAuthorizations](organizationAuthorizations.md) | Defines the data used for broad authorization of user access to org level data |
| [passwordResetForms](passwordResetForms.md) |  |
| [suggestions](suggestions.md) |  |
| [tokens](tokens.md) | All of the metadata associated with a given token. |
| [users](users.md) |  |
| [validations](validations.md) | Validations test whether or not a given API token is valid |
