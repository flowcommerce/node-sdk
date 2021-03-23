package main

import (
	"github.com/flowcommerce/tools/executor"
)

func main() {
	executor := executor.Create("node-sdk")
	executor = executor.Add("git checkout main")
	executor = executor.Add("git pull origin main")
	executor = executor.Add("npm install")
	executor = executor.Add("npm run generate")
	executor = executor.Add("git add src docs package.json package-lock.json")
	executor = executor.Add("git commit -m 'autocommit: version and generated src and docs directories. API Version `node -p \"require('./api.service.json').service.version\"`'")
	executor = executor.Add("dev tag")
	executor = executor.Add("npm version from-git")
	executor = executor.Add("npm publish --otp")
	executor.Run()
}
