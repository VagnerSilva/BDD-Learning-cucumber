"use strict";

const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');



defineSupportCode(({ Given, Then, When }) => {
  // Given(/^que eu abra a página de pesquisa do Google "(.*?)"$/, (url) => {
  //     console.log(url);
      
  //   return client
  //     .url(url)
  //     .waitForElementVisible('body', 1000);
  // });
 // this.client = require('../support/world');

  
  Given('que eu abra a página de pesquisa do Google {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
   return client.url(string)
       .waitForElementVisible('body', 1000);
    //callback(null, 'pending');
  });
 
  Given(/^em seguida, verifico se o título da pagina é "(.*?)"$/, (text) => {
    return client.assert.title(text);
  });
  
 
  Then(/^verificar se o formulário de busca Google existe$/, () => {
     return client.assert.visible('input[name="q"]');
  });
});


