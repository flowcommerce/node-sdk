# [API](README.md).virtualCards - Flow Commerce API - Node SDK Documentation

Virtual card details

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const virtualCards = client().virtualCards;
```

## Operations

##`putAuthorizationsByKeyAndAuthorizationKey(organization, key, authorizationKey, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| key | string | Your unique identifier for this transaction, which if provided is used to implement idempotency. |
| authorization_key | string | The key of the authorization against which to issue the virtual card. |


