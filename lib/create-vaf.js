#!/usr/bin/env node

const path = require("path");
const fse = require("fs-extra");

const argv = require("minimist")(process.argv.slice(2));
const dirCustomed = argv._[0] || "";
const dirTarget = path.join(process.cwd(), dirCustomed);

const dirSourceCode = path.join(__dirname, "..", "template");

console.log("正在生成...");
fse.copySync(dirSourceCode, dirTarget);
console.log("已经生成 vaf 管理平台模板代码.");

if (dirCustomed) {
  console.log("cd", path.relative(process.cwd(), dirTarget));
}
console.log("npm install");
console.log("npm run dev");
