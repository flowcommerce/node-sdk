# Development

## NPM Tasks

`npm run generate` - Download the latest api definition and run `sync` to generate new client code
`npm publish` - Runs babel over `src` and outputs to `lib` before publishing. Deletes `lib` after publishing.

## Deployment

    go run release.go
