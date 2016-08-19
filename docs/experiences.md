# [API](README.md).experiences - Flow Commerce API - Node SDK Documentation

Experiences define a local experience for a given geographic region

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const experiences = client().experiences;
```

## Operations

##`get(organization, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| key | [string] |  |
| name | string |  |
| region | string |  |
| currency | string |  |
| subcatalog | string |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`post(organization, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |


##`getByKey(organization, key, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| key | string |  |


##`putByKey(organization, key, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| key | string |  |


##`deleteByKey(organization, key, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| key | string |  |


##`getItemsAndPriceByKeyAndNumber(organization, key, number, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| key | string |  |
| number | string |  |


##`getMarginsByKey(organization, key, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| key | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`postMarginsByKey(organization, key, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| key | string |  |


##`getMarginsByKeyAndId(organization, key, id, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| key | string |  |
| id | string | Filter by one or more IDs of this resource |


##`putMarginsByKeyAndId(organization, key, id, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| key | string |  |
| id | string | Filter by one or more IDs of this resource |


##`deleteMarginsByKeyAndId(organization, key, id, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| key | string |  |
| id | string | Filter by one or more IDs of this resource |


##`getMarginsAndVersionsByKey(organization, key, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| key | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`getPricingByKey(organization, key, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| key | string |  |


##`putPricingByKey(organization, key, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| key | string |  |


##`getItems(organization, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| number | [string] |  |
| status | [subcatalog_item_status] | Filter to items based on their status within this subcatalog |
| experience | string | If specified, we will render the items in the context of the experience with this key. |
| country | string | If specified, we will select the experience matching this country. ISO 3166 3 currency code as defined in https://api.flow.io/reference/countries |
| ip | string | If specified, we will geolocate the user by this IP address, and if successful, select the experience matching the country of the IP address. |
| currency | string | Iso 4217 3 currency code as defined in https://api.flow.io/reference/currencies If specified, translate the pricing to this currency. Translation occurs using the current spot rate for this currency from the base currency in the experience. |
| language | string | ISO 639 2 language code as defined in https://api.flow.io/reference/languages If specified, translate content to this language (where available) |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`getItemsByNumber(organization, number, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| number | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| experience | string | If specified, we will render the items in the context of the experience with this key. |
| country | string |  |
| ip | string |  |
| currency | string |  |
| language | string | ISO 639 2 language code as defined in https://api.flow.io/reference/languages |

##`getVersions(organization, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| key | [string] |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

