var showdown = require("showdown");
var fs = require("fs");

var converter = new showdown.Converter();
var md = fs.readFileSync("./README.md", "utf8");
var html = converter.makeHtml(md);

var indexHtml = fs.readFileSync("./scripts/base.html", "utf8");
var htmlPlusMd = indexHtml.replace("<REPLACE></REPLACE>", html);

fs.writeFileSync("./demo/index.html", htmlPlusMd, "utf8");
