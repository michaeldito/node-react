//console.log('Starting notes.js');

const fs = require('fs');

/* This function will fetch all notes in our file
 */
var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

/* This function will save a list of notes to our file
 */
var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

/* This function will add a note to our file. If a file of the same
 * title already exists, it does not add it.
 */
var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

/* This function will return a list of notes
 */
var getAll = () => {
  return fetchNotes();
};

/* This function will get a specific note 
 */
var getNote = (title) => {
  console.log('Getting note', title);
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

/* This function will remove a specific note
 */
var removeNote = (title) => {
  var notes = fetchNotes();
  // Populate filterNotes with all notes that do not match 'title'
  var filteredNotes = notes.filter((note) => note.title !== title);
  // Then write all of those notes to the file.
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

/* This function will print a note to the console
*/
var logNote = (note) => {
  debugger;
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
