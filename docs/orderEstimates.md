# [API](README.md).orderEstimates - Flow Commerce API - Node SDK Documentation

Lightweight estimate for a group of items without any customer-related information. This will contain available estimates on shipping, taxes, and duties.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const orderEstimates = client().orderEstimates;
```

## Operations

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

