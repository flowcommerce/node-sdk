# [API](README.md).experiencePriceConversions - Flow Commerce API - Node SDK Documentation



## Usage

```JavaScript
import client from '@flowio/node-sdk';

const experiencePriceConversions = client().experiencePriceConversions;
```

## Operations

##`get(organization, experienceKey, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| experience_key | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| base | string | The ISO currency code of the provided values. Defaults to the organization base currency |
| local | string | The ISO currency code in which to return the price facets. Defaults to the experience currency |
| amount | [string] | One or more prices to convert |

