#!/usr/bin/env node
const { program } = require("commander");
const helpOptions = require("./core/help-options");
const { createProjectAction, addComponentAction } = require("./core/actions");

// 1. 抽离帮助信息
helpOptions();

// 2. create a repo by template
program
  .command("create <project> [...others]")
  .description("create vue project, such as vue create myProject")
  .action(createProjectAction);

// 3. add a cpn by template
program
  .command("addcpn <cpnname> [...others]")
  .description(
    "add the component you want into a folder, such as: mycli add cpn Header"
  )
  .action(addComponentAction);

// 解析argv信息
program.parse(process.argv);
