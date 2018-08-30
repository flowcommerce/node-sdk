# [API](README.md).checkoutTokens - Flow Commerce API - Node SDK Documentation

Represents a secure token that can be used to redirect to Checkout UI

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const checkoutTokens = client().checkoutTokens;
```

## Operations

##`getCheckoutAndTokensById(id, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | string | Filter by one or more IDs of this resource |


##`deleteCheckoutAndTokensById(id, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | string | Filter by one or more IDs of this resource |


##`postCheckoutAndTokensByOrganization(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |


