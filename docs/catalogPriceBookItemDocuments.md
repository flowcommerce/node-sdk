# [API](README.md).catalogPriceBookItemDocuments - Flow Commerce API - Node SDK Documentation

Represents the returned information for searching particular price book items

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const catalogPriceBookItemDocuments = client().catalogPriceBookItemDocuments;
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
| price_book_key | [string] |  |
| q | string |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |

