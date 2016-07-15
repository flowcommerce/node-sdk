# [API](README.md).emailVerifications - Flow Commerce API - Node SDK Documentation

Represents the successful response of an email verification token. We return the email address in this case to allow the UI to display which email address was verified.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const emailVerifications = client().emailVerifications;
```

## Operations

##`postByToken(token, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| token | string | The unique token sent to the user to verify their email address |


