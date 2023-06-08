#!/usr/bin/env node

import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import inquirer from 'inquirer';
import chalk from 'chalk';
import path from 'path';
import fs from 'fs';
import createFiles from './createFiles.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const questions = [
  {
    name: 'project-name',
    type: 'input',
    message: 'Project name (leave empty to use current directory):',
  },
  {
    name: 'project-choice',
    message: 'Preferred module system:',
    type: 'list',
    choices: [
      {
        name: 'CommonJS (default)',
        value: 'js-cjs',
      },
      {
        name: 'ES Modules',
        value: 'js-esm',
      },
    ],
  },
];

inquirer.prompt(questions).then((answers) => {
  try {
    const projectName = answers['project-name'];
    const projectChoice = answers['project-choice'];

    const templatePath = path.join(__dirname, 'templates', projectChoice);
    const newProjectPath = projectName === '.' ? process.cwd() : path.join(process.cwd(), projectName);

    console.log(`🚚 Creating project inside "${newProjectPath}"...`);

    fs.mkdirSync(newProjectPath, { recursive: true });

    // Check if files already exist in the new project path
    const filesExist = fs.readdirSync(newProjectPath).length;

    if (filesExist) {
      throw new Error(`Please ensure the directory "${newProjectPath}" is empty before running the command.`);
    }

    createFiles(templatePath, newProjectPath);

    console.log('📂 Files created. Installing dependencies using npm...\n');

    // Run npm install inside the newProjectPath
    execSync('npm install', { cwd: newProjectPath, stdio: 'inherit' });

    console.log('\n✅ Dependencies installed successfully.');

    console.log(`🤔 Next steps:
    1. Edit "${path.join(newProjectPath, '.env')}" and add your bot's token.
    2. Run your project using "npm run start"
    `);

    console.log(chalk.green(`🚀 Discord.js project created successfully. Happy Coding!\n`));
  } catch (error) {
    console.error(chalk.red('An error occured while creating your Discord.js project.\n'), error);
  }
});
