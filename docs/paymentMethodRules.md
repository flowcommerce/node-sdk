# [API](README.md).paymentMethodRules - Flow Commerce API - Node SDK Documentation

Returns payment methods that are enabled for an organization and available for the provided country and currency.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const paymentMethodRules = client().paymentMethodRules;
```

## Operations

##`getPaymentMethodRules(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| country | string | Filters available payment methods to those available for the experience associated with the provided country. |
| currency | string | Filters available payment methods to those that support the provided currency. |
| experience | string | If provided, the payment methods available for the corresponding experience will be returned. |
| ip | string | If provided, will be used to help pick the experience if the country or experience key are not provided. |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`getPaymentAndMethodAndRules(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| country | string | Filters available payment methods to those available for the experience associated with the provided country. |
| currency | string | Filters available payment methods to those that support the provided currency. |
| experience | string | If provided, the payment methods available for the corresponding experience will be returned. |
| ip | string | If provided, will be used to help pick the experience if the country or experience key are not provided. |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

