# [API](README.md).virtualCards - Flow Commerce API - Node SDK Documentation

Virtual credit cards are created for a specific limit and currency. Currently only USD denominated cards can be issued. Once created the virtual card can be used in the same way as a physical credit card using the card number, cvv and expiration details.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const virtualCards = client().virtualCards;
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
| key | string |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`getByKey(organization, key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| key | string | Your unique identifier for this virtual card. |


##`putAuthorizationsByKeyAndAuthorizationKey(organization, key, authorizationKey, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| key | string | Your unique identifier for this virtual card, which is used to implement idempotency. |
| authorization_key | string | The key of the authorization against which to issue the virtual card. |


