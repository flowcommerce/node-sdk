# [API](README.md).orders - Flow Commerce API - Node SDK Documentation

An order represents all of the information about a particular set of line items, including pricing, currency rates, delivery options, etc. All information in an order is guaranteed by Flow - if an order is submitted before its expiration. The intended use case is to create an order as a consumer enters checkout, then to submit that order as part of the user submitting their order. Note that Flow will automatically mark an order submitted if we see payment authorization(s) covering the full balance of an order.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const orders = client().orders;
```

## Operations

##`get(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| number | [string] |  |
| identifier | string |  |
| status | order_status |  |
| customer_number | string | If specified, returns order for the specified customer.number |
| submitted_at_on_or_after | date-time-iso8601 | If specified, we filter to all records that have a &#x27;submitted_at&#x27; &gt;&#x3D; &#x27;submitted_at_on_or_after&#x27; |
| romanize | [string] | Fields on the order to romanize. For example, if &#x27;destination&#x27; is passed, then destination addresses in Chinese characters will be transliterated to the romanized form in pinyin |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |
| expand | [string] |  |

##`post(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| experience | string | If specified, we will render the items in the context of the experience with this key. |
| country | string | If specified, we will select the experience matching this country. ISO 3166 3 currency code as defined in https://api.flow.io/reference/countries |
| ip | string | If specified, we will geolocate the user by this IP address, and if successful, select the experience matching the country of the IP address. |
| currency | string | Iso 4217 3 currency code as defined in https://api.flow.io/reference/currencies If specified, translate the pricing to this currency. Translation occurs using the current spot rate for this currency from the base currency in the experience. |
| language | string | ISO 639 2 language code as defined in https://api.flow.io/reference/languages If specified, translate content to this language (where available) |
| expand | [string] |  |
| romanize | [string] | Fields on the order to romanize. For example, if &#x27;destination&#x27; is passed, then destination addresses in Chinese characters will be transliterated to the romanized form in pinyin |

##`getIdentifierByIdentifier(organization, identifier, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| identifier | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| expand | [string] |  |
| romanize | [string] | Fields on the order to romanize. For example, if &#x27;destination&#x27; is passed, then destination addresses in Chinese characters will be transliterated to the romanized form in pinyin |

##`postSubmissions(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| expand | [string] |  |
| experience | string | The key of the experience in which to place the order. |
| currency | string | Iso 4217 3 currency code as defined in https://api.flow.io/reference/currencies If specified, translate the pricing to this currency. Translation occurs using the current spot rate for this currency from the base currency in the experience. |
| show_selections_only | boolean | Flag to indicate whether to only show delivery options that are selected. Only the delivery options with ids in the selections list would be shown. |

##`getVersions(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| number | [string] |  |
| journal_timestamp_on_or_after | date-time-iso8601 | If specified, we filter to all records that have a &#x27;journal_timestamp&#x27; &gt;&#x3D; &#x27;journal_timestamp_on_or_after&#x27; |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`getByNumber(organization, number, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| number | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| expand | [string] |  |
| romanize | [string] | Fields on the order to romanize. For example, if &#x27;destination&#x27; is passed, then destination addresses in Chinese characters will be transliterated to the romanized form in pinyin |

##`putByNumber(organization, number, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| number | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| experience | string | If specified, we will render the items in the context of the experience with this key. |
| country | string | If specified, we will select the experience matching this country. ISO 3166 3 currency code as defined in https://api.flow.io/reference/countries |
| ip | string | If specified, we will geolocate the user by this IP address, and if successful, select the experience matching the country of the IP address. |
| currency | string | Iso 4217 3 currency code as defined in https://api.flow.io/reference/currencies If specified, translate the pricing to this currency. Translation occurs using the current spot rate for this currency from the base currency in the experience. |
| language | string | ISO 639 2 language code as defined in https://api.flow.io/reference/languages If specified, translate content to this language (where available) |
| expand | [string] |  |
| romanize | [string] | Fields on the order to romanize. For example, if &#x27;destination&#x27; is passed, then destination addresses in Chinese characters will be transliterated to the romanized form in pinyin |

##`deleteByNumber(organization, number, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| number | string |  |


##`getAllocationsByNumber(organization, number, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| number | string |  |


##`postAuthorizationsByNumber(organization, number, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| number | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| expand | [string] |  |

##`putDestinationByNumber(organization, number, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| number | string |  |


##`putInventoryAndReservationsByNumber(organization, number, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| number | string |  |


##`putPromotionsAndFreeShippingByNumberAndKey(organization, number, key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| number | string |  |
| key | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| expand | [string] |  |

##`postServiceAndChangesByNumber(organization, number, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| number | string |  |


##`putSubmissionsByNumber(organization, number, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| number | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| expand | [string] |  |

##`putTaxAndRegistrationByNumber(organization, number, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| number | string |  |


##`deleteTaxAndRegistrationByNumberAndKey(organization, number, key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| number | string |  |
| key | string |  |


##`getStatusAndFraudByNumber(organization, number, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| number | string |  |


##`postLabelsAndDocumentsAndInvoiceByNumber(organization, number, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| number | string |  |


