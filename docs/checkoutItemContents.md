# [API](README.md).checkoutItemContents - Flow Commerce API - Node SDK Documentation

A Checkout Item Content provides information about an item to support rendering of that item in the context of checkout

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const checkoutItemContents = client().checkoutItemContents;
```

## Operations

##`getCheckout(organization, experienceKey, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| experience_key | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| number | [string] |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |

