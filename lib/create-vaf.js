#!/usr/bin/env node

import path from "path";
import { fileURLToPath } from "url";
import boxen from "boxen";
import chalk from "chalk";
import fse from "fs-extra";
import inquirer from "inquirer";
import minimist from "minimist";
import ora from "ora";

const argv = minimist(process.argv.slice(2));
let dirCustomed = argv._[0] || "";
let dirTo;

main();

async function main() {
  await inquirCurDir();
  generateTpl();
  logStartTip();
}

async function inquirCurDir() {
  if (dirCustomed) return;

  const dirInput = await inquirer.prompt([
    {
      name: "value",
      type: "input",
      message: "Input a directory name:",
    },
  ]);
  dirCustomed = dirInput.value;
}

function generateTpl() {
  dirTo = path.join(process.cwd(), dirCustomed);
  const filename = fileURLToPath(import.meta.url);
  const dirname = path.resolve(path.dirname(filename));
  const dirTpl = path.join(dirname, "..", "template");

  const spinner = ora("Generating template code...").start();

  // coye tpl
  fse.copySync(dirTpl, dirTo, {
    filter(src) {
      const relative = path.relative(dirname, src);
      if (/node_modules/i.test(relative)) {
        return false;
      }
      if (/dist/i.test(relative)) {
        return false;
      }
      return true;
    },
  });

  // rename _.gitignore to .gitignore
  const underline = `${dirTo}/_.gitignore`;
  const dot = `${dirTo}/.gitignore`;
  fse.rename(underline, dot);

  spinner.succeed("Template code generated successfully.");
}

function logStartTip() {
  ora("")
    .start()
    .succeed(`Execute the following command to start your project:`);

  let tip = "";
  if (dirCustomed) {
    const dir = path.relative(process.cwd(), dirTo);
    const text = `cd ${dir}`;
    tip += `${chalk.green(text)}
`;
  }
  tip += `${chalk.green("npm install")}
${chalk.green("npm run dev")}`;
  console.log(boxen(tip, { padding: 1 }));
}
