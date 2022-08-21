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

  const isNewDir = await inquirer.prompt([
    {
      name: "value",
      type: "confirm",
      message: "Generate template code in a new directory?",
    },
  ]);
  if (!isNewDir.value) return;

  const dirInput = await inquirer.prompt([
    {
      name: "value",
      type: "input",
      message: "Input your project name:",
    },
  ]);
  dirCustomed = dirInput.value;
}

function generateTpl() {
  dirTo = path.join(process.cwd(), dirCustomed);
  const spinner = ora("Generating template code...").start();
  const filename = fileURLToPath(import.meta.url);
  const dirname = path.resolve(path.dirname(filename));
  const dirTpl = path.join(dirname, "..", "template");
  fse.copySync(dirTpl, dirTo);
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
