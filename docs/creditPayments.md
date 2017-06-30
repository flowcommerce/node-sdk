# [API](README.md).creditPayments - Flow Commerce API - Node SDK Documentation

A Credit Payment records a &#x27;non cash&#x27; payment against an order (e.g. a store credit, gift card, etc.), recording the amount of that credit and additional details to reconcile payments. The primary purpose of the credit payment is to record that a payment has been made against an order so the remaining balance can be correctly computed.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const creditPayments = client().creditPayments;
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
| key | [string] |  |
| order_number | string |  |
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
| expand | [string] |  |

##`getByKey(organization, key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| key | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| expand | [string] |  |

##`putByKey(organization, key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| key | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| expand | [string] |  |

##`deleteByKey(organization, key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| key | string |  |


##`getVersions(organization, options = {})`

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

