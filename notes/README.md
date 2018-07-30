# Notes App

This is a simple command line note application that can add, remove, list and read notes. 

## Add a note
`node app.js add -t="Note title" -b="Note body"`

## Remove a note
`node app.js remove -t="Note title"`

## List all notes
`node app.js list`

# Read a note
`node app.js read -t="Note title"`

In [notes.js](notes.js) all of the operations on notes are implemented, these include:

  - fetchNotes: retreives all notes in our file
  - saveNotes: saves a list of notes to our file
  - addNote: adds a note to our file if the title doesn't already exist
  - getAll: wrapper for fetchNotes
  - getNote: retreives a note with a specific title
  - removeNote: removes a note with a specific title
  - logNote: debug function, prints a note to the console

The application needs to interact with the file system. We can use the 'fs'
module. It provides an API for interacting with the file system. Each method
has an asynchronous and a synchronous version. The application uses the following 
functions from 'fs':

  - readFileSync: synchronous, returns the contents of a file
  - writeFileSync: synchronous, writes data to a file, replacing the file if it already exists

To work with JSON, we can use the following functions:

  - JSON.parse(someString): parses the JSON, constructs JS object
  - JSON.strinfiy(someString): converts a JS value to a JSON string

When dealing with arrays, we used the following function:

  - filter: creates a new array with all elements that pass some test

To manage command line arguments to the program, we use yargs. Yargs helps you build 
interactive command line tools, by parsing arguments and generating an elegant user 
interface. We set up what we expect in [app.js](app.js). It supports aliasing, and
demanding that an argument be defined. We say `argv._[0]` because yargs has a special
property '_', that stores command values for us.