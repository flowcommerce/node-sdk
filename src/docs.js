import handlebars from 'handlebars';
import fs from 'fs';
import serviceToSdkJson from '@flowio/lib-apidoc/lib/codegen/util/service-to-json';

const docsDir = `${process.cwd()}/docs`;
const srcDir = `${process.cwd()}/src`;

const readmeTemplate = handlebars.compile(
  fs.readFileSync(`${srcDir}/readme.handlebars`).toString('utf-8'));
const resourceTemplate = handlebars.compile(
  fs.readFileSync(`${srcDir}/resource.handlebars`).toString('utf-8'));

function createReadme(sdk) {
  fs.writeFileSync(`${docsDir}/README.md`, readmeTemplate(sdk));
}

function createResources(sdk) {
  sdk.resources.forEach((resource) => {
    fs.writeFileSync(`${docsDir}/${resource.name}.md`, resourceTemplate(resource));
  });
}

export default function generate(service) {
  const sdkJson = serviceToSdkJson(service);
  createReadme(sdkJson);
  createResources(sdkJson);
}
