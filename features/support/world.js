'use strict';

const { client } = require('nightwatch-cucumber');
var {defineSupportCode} = require('cucumber');

function CustomWorld() {
  this.client = client;
}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld);
});