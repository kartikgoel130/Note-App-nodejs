const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');
const argv = yargs.argv;


var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

if(command === 'add'){
  console.log(chalk.black(chalk.bgGreen("Note Added")));
  notes.addingNote(title, body);
}else if(command === 'remove'){
  console.log(chalk.black(chalk.bgRed("Removed the note")));
  notes.removeNote(title);
}else if(command === 'read'){
  console.log(chalk.black(chalk.bgYellow("Reading the note")));
  notes.readNote(title);
}else if(command === 'list'){
  console.log(chalk.black(chalk.bgBlueBright("Listing all the nots")));
  notes.getAll();
}else {
  console.log("Unknown command was used!");
}

