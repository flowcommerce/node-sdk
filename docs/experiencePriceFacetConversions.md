# [API](README.md).experiencePriceFacetConversions - Flow Commerce API - Node SDK Documentation



## Usage

```JavaScript
import client from '@flowio/node-sdk';

const experiencePriceFacetConversions = client().experiencePriceFacetConversions;
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
| min | [string] | One or more prices to convert. These values are expected to represent the minimum of a range (e.g. for a 10-50 facet value, this would be 10) |
| max | [string] | One or more prices to convert. These values are expected to represent the maximum of a range (e.g. for a 10-50 facet value, this would be 50) |

