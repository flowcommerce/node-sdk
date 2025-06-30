# Development

## NPM Tasks

`npm run generate` - Download the latest api definition and run `sync` to generate new client code
`npm publish` - Runs babel over `src` and outputs to `lib` before publishing. Deletes `lib` after publishing.

NOTE: Generate a `APIBUILDER_TOKEN` [here](https://app.apibuilder.io/tokens/).
NOTE: You will need to run `export APIBUILDER_TOKEN=<your API token>` before running the commands above.

## Deployment

    export APIBUILDER_TOKEN=<your API token>
    go run release.go

NOTE: Do not use `npm version` to release. It does not work well with release script.
NOTE: You need schema evolution manager which can be found [here](https://github.com/mbryzek/schema-evolution-manager).
