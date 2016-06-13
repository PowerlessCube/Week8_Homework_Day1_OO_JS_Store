##Read Me - Homework Week 8 Day 1

Below is a copy of the homework objectives that I have tried to accomplish:
#Webpack RecordStore Homework

Take the RecordStore that we did in week 1 and create a browser UI for it. Create a sample.json which should be an array of objects to represent Records.

Just as we did with the Bank, create a new RecordStore and add all the records using the sample.json data and use a RecordStoreView to deal with the UI.

It should:

  - Display the name and city of the RecordStore
  - Display the inventory list

Further:

  - Add a FORM to add a new Record to the RecordStore.
  - Add ability to sell record

#Dependencies used:
* lodash - JavaScript utility library
* express - minimalist node.js web application for displaying JS code on a browser
* mocha - Testing Package
* chai - Testing package
* webpack - module bundler: webpack takes modules with dependencies and generates static assets representing those modules.
* nodemon - listen to changes to server and implement changes with out rebbot

#Running JS Record Store Tests
To run tests, navigate to
```
$ cd client/src/record_store/
```
and then type the following:
```
$ npm test
```

#To run webpage on localhost
to run on localhost3000, navigate to
```
js_record_webpack $ nodemon server.js
```
then in your navigator of choice type in the address:
```
localhost3000
```
