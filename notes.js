
const fs = require('fs');
const chalk = require('chalk')

var fetchNotes = () => {
  try{
    return JSON.parse(fs.readFileSync('notes.txt'));
  }catch(err) {
    return [];
  }
}

// --------------- Adding notes --------------------
var addingNote = (title, body) => {
  var notes = fetchNotes();

  var note = {
    title,
    body
  };

  var duplicate = notes.filter((note) => note.title === title);

  if(duplicate.length === 0){
    notes.push(note);

    fs.writeFileSync("notes.txt",  JSON.stringify(notes));
  }else{
    console.log("Ok! This title is taken try another.");
  }

}

// ----------- Removing Notes -------------------------
var removeNote = (title) => {
  var notes = fetchNotes();

  var filteredNotes = notes.filter((note) => note.title !== title);

  fs.writeFileSync("notes.txt",  JSON.stringify(filteredNotes));
}

// ----------------- Reading Note ----------------------------

var readNote = (title) => {
  var notes = fetchNotes();

  var filteredNotes = notes.filter((note) => note.title === title);

  logNote(filteredNotes[0]);
}

// ---------------- Getting all Notes at once ---------------------

var getAll = () => {
  var notes = fetchNotes();

  notes.forEach((note) => logNote(note));
}

var logNote = (note) =>{
  console.log("------------------------");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);

}

module.exports = {
  addingNote,
  removeNote,
  readNote,
  getAll
}

