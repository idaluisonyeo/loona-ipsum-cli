#!/usr/bin/env node
const actions = require('./actions.js');

const processArgs = process.argv.slice(2);

let count = 1;
if (processArgs[0] === undefined) {
  actions.paragraph(count);
}

if (processArgs[1] === '-c' || processArgs[1] === '--count') {
  count = parseInt(processArgs[2], 10);
}

const commandsForArguments = {
  '-p': actions.paragraph,
  '--paragraph': actions.paragraph,
  '-s': actions.sentence,
  '--sentence': actions.sentence,
};

const toRun = commandsForArguments[processArgs[0]];

if (toRun === undefined) {
  actions.help();
}

toRun(count);
