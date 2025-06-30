# [API](README.md).addresses - Flow Commerce API - Node SDK Documentation

Defines structured fields for address to be used in user/form input. Either text or the structured input needs to be present.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const addresses = client().addresses;
```

## Operations

##`get(options = {})`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| address | string |  |
| ip | string |  |
| country | string | The ISO 3166 2 or 3 character code for the country. Case insensitive. See https://api.flow.io/reference/countries |
| postal_prefix | string |  |

##`postVerifications(options = {})`



