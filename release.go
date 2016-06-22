package main

import (
	"encoding/json"
	"fmt"
	"github.com/flowcommerce/apidoc/registry"
	"github.com/flowcommerce/tools/executor"
	"github.com/flowcommerce/tools/profile"
	"github.com/flowcommerce/tools/util"
	"io/ioutil"
	"net/http"
	"os"
)

func main() {
	executor := executor.Create("node-sdk")
	executor = executor.Add("git checkout master")
	executor = executor.Add("git pull origin master")
  executor = executor.Add("npm run generate")
	executor = executor.Add("git src")
	executor = executor.Add("git commit -m 'autocommit: update generated src directory'")
	executor = executor.Add("git push origin master")
	executor = executor.Add("dev tag --label micro")
	executor = executor.Add("npm publish")
	executor.Run()
}
