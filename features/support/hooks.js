'use strict';

var reporter = require('cucumber-html-reporter');
const options = require('./html.report');

const { defineSupportCode } = require('cucumber');

defineSupportCode(function ({ After }) {
  After(function () {
    return this.client.end();
  });

  After(() => {
    reporter(options);
  });
});