# [API](README.md).languages - Flow Commerce API - Node SDK Documentation

ISO 639 2-character language code. See https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const languages = client().languages;
```

## Operations

##`get(options)`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| q | string | Free text search for a single matching language. Can be the code or the name of the language. Case insensitive |

