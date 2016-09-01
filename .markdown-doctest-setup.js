require('reflect-metadata');
const angular = require('./dist/js/cjs/angular2/angular2.js');

module.exports = {
  require: {
    'angular2/angular2': angular
  },

  globals: {
    ng: angular,
    importScripts: () => {},
    System: {import: () => {}}
  }
}
