# [API](README.md).ratecardEstimates - Flow Commerce API - Node SDK Documentation

Represents a summary of a cost estimate based on rate card data for an origin/destination and weight, either gravitational or dimensional

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const ratecardEstimates = client().ratecardEstimates;
```

## Operations

##`get(organization, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| origin | string | The ISO 3166-3 country code. Case insensitive. See https://api.flow.io/reference/countries |
| destination | string | The ISO 3166-3 country code. Case insensitive. See https://api.flow.io/reference/countries |
| weight_unit | unit_of_measurement | Type of unit measurement used to calculate gravitational weight |
| distance_unit | unit_of_measurement | Type of unit measurement used to calculate dimensional weight |
| service | string | Carrier service level to use |
| weight | double | Part of gravitational weight calculation |
| length | double | Part of dimensional weight calculation |
| width | double | Part of dimensional weight calculation |
| depth | double | Part of dimensional weight calculation |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

