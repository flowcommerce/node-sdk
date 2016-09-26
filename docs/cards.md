# [API](README.md).cards - Flow Commerce API - Node SDK Documentation

Card represents the metadata about a secure, tokenized card. The card &#x27;token&#x27; is a unique, cryptographically secure token by which this card can be identified in the future. The card token itself will either be a permanent card token (denoted by a prefix of F96) or a one time nonce (denoted by a prefix of F17). Nonces represent cards that were encrypted from public channels (like the user&#x27;s browser via JavaScript) and can be used once only. If you have a nonce you can exchange it for a permanent card token via the operation POST /:organization/cards/nonces

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const cards = client().cards;
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
| token | [string] |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`post(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |


##`getByToken(organization, token, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| token | string |  |


##`deleteByToken(organization, token, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| token | string |  |


##`postUpdatesByToken(organization, token, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| token | string |  |


##`postNonces(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |


##`getVersions(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| card_id | [string] | Filter to cards with any one of these ids. |
| card_token | [string] |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

