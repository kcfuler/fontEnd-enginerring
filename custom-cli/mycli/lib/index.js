#!/usr/bin/env node
const { program } = require("commander");
const helpOptions = require("./core/help-options");
const { createProjectAction } = require("./core/actions");

// 1. 抽离帮助信息
helpOptions();

// 2. 增加一些具体的功能操作
program
  .command("create <project> [...others]")
  .description("create vue project, such as vue create myProject")
  .action(createProjectAction);

// 解析argv信息
program.parse(process.argv);
