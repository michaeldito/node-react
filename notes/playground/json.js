const fs = require('fs');

var ogNote = {
  title: '',
  body: ''
};

var ogNoteString = JSON.stringify(ogNote);

fs.writeFileSync('notes.json', ogNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);
