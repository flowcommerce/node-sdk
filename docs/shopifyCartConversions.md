# [API](README.md).shopifyCartConversions - Flow Commerce API - Node SDK Documentation

Shopify cart conversions create representations of cart data for Shopify based on a given experience. Cart actions are based off the Shopify Ajax API, documentation at https://help.shopify.com/themes/development/getting-started/using-ajax-api

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const shopifyCartConversions = client().shopifyCartConversions;
```

## Operations

##`post(organization, experienceKey, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| experience_key | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| expand | [string] |  |

