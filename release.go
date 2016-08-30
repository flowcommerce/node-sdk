package main

import (
	"github.com/flowcommerce/tools/executor"
)

func main() {
	executor := executor.Create("node-sdk")
	executor = executor.Add("git checkout master")
	executor = executor.Add("git pull origin master")
	executor = executor.Add("npm install")
	executor = executor.Add("npm run generate")
	executor = executor.Add("npm version --no-git-tag-version `node -p \"require('./api.service.json').service.version\"`")
	executor = executor.Add("git add src docs package.json")
	executor = executor.Add("git commit -m 'autocommit: version and generated src and docs directories'")
	executor = executor.Add("git push origin master")
	executor = executor.Add("npm publish")
	executor.Run()
}
