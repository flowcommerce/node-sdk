# [API](README.md).hsCodes - Flow Commerce API - Node SDK Documentation

Harmonized System codes.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const hsCodes = client().hsCodes;
```

## Operations

##`get(options = {})`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| code | [string] | Find these specific harmonization codes. Case insensitive. |
| parent | string | Find records with this parent harmonization code. Case insensitive. |
| has_parent | boolean | Find records with or without a parent code. |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`getByCode(code, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| code | string |  |


