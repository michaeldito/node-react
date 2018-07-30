# MongoDB

## Make sure you are in the mongo/bin directory
`cd ~/mongo/bin`

## Start a mongo server that we can write data to
`./mongod --dbpath ~/mongo-data`

## Interact with the db
`cd ~/mongo/bin`
`./mongo`

## Mongo is a NoSQL Database
- NoSQL stores Collections (sql has tables)
- Collections have Documents (tables have rows/records)
- Documents have fields (rows have columns)

## Npm install
`npm install mongodb@2.2.5 --save`

## Robomongo (Robo 3T)
GUI used to view the db

## What is _id?
- NOT an autoincrementing id
- Randomly generated id
- Documents unique identifier
- 12 byte value
- Timestamp, machine id, process id is encoded into the _id
`result.ops[0]._id.getTimestamp()`
- It can be specified though by putting _id: # in your object

## Insert in Robo 3T
Right click, insert