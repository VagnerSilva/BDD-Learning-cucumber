'use strict';

var reporter = require('cucumber-html-reporter');
const options = require('../support_files/html.report');
const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');

defineSupportCode(({ Before, After }) => {
  Before(() => new Promise(resolve => {
    console.log('Before start');
    setTimeout(() => {
      console.log('Before end');
      resolve();
    }, 1000);
  }));

  After(() => new Promise(resolve => {
    reporter.generate(options);
    setTimeout(() => {
      console.log('After end');
      client.end();
      resolve();
    }, 1000);
  }));
});