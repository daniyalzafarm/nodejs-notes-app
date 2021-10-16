// const validator = require("validator");

const chalk = require("chalk");
const { argv } = require("yargs");
const yargs = require("yargs"); // Used to get args instead from process
const { removeNote } = require("./notes.js");
const notes = require("./notes.js"); // Using own file

// Customize yargs version
// yargs.version("1.1.0");

// **** Yargs Commands ****
// add, remove, read, list (Yargs could do)

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
    // console.log("Title: ", argv.title);
    // console.log("Body Text: ", argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a new note",
  builder: {
    title: {
      describe: "Removing Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler() {
    notes.removeNote(argv.title);
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a new note",
  builder: {
    title: {
      describe: "Title to Find",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List a new note",
  handler() {
    notes.listNotes();
  },
});

//console.log("Yargs Arguments: ", yargs.argv);
yargs.parse();

// ---- Style Logs using npm "Chalk" module ----
// console.log(getNotes());
// console.log(chalk.green.inverse("Success!"));

// ---- Accessing CLI Commands ----
// const command = process.argv[2];

// if (command === "add") {
//   console.log("Adding Note!");
// } else if (command === "remove") {
//   console.log("Removing Note!");
// }

// console.log(process.argv);

// yargs.version("1.1.0");
// console.log(yargs.argv);

// ---- npm package validator ----
// console.log(validator.isEmail("daniyal@gmail.com"));

// ---- Our Custom Methods File ----
// const add = require("./utlis");
// const sum = add(4, 6);
// console.log(sum);
