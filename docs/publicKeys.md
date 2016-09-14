# [API](README.md).publicKeys - Flow Commerce API - Node SDK Documentation

A public key is used to encrypt cards client side prior to submitting to the Flow vault.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const publicKeys = client().publicKeys;
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
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

