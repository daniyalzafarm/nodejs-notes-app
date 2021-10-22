const fs = require("fs");
const chalk = require("chalk");

// Add New Note
const addNote = (title, body) => {
  const notes = loadNotes();

  // const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);

  // debugger;

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New Note Added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

// Remove Note
const removeNote = (title) => {
  const notes = loadNotes();
  const check = notes.filter((note) => note.title === title);
  if (check) {
    const remaining = notes.filter((note) => note.title != title);
    saveNotes(remaining);
    console.log(chalk.green.inverse(title + " Deleted Successfully!"));
  } else {
    console.log(chalk.red.inverse(title + " Note NOT Found!"));
  }
};

// Listing all notes
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.italic.underline("Your Notes"));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

// Read Specific Note

const readNote = (gettitle) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === gettitle);

  if (note) {
    console.log(chalk.inverse.italic(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note NOT Found!"));
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataString = dataBuffer.toString();
    const dataJSON = JSON.parse(dataString);
    return dataJSON;
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
